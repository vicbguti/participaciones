const STORAGE_KEY = "participaciones.estudiantes";

export class RegistrosCsv {
    curso = "";

    constructor(_filepath, curso) {
        this.curso = curso;
    }

    async cargarEstudiantes() {
        return this.cargarEstudiantesGuardados();
    }

    async cargarEstudiantesDesdeArchivo(file) {
        if (!file) {
            throw new Error("Selecciona un archivo CSV.");
        }

        const text = await file.text();
        const estudiantes = parseEstudiantesCsv(text);
        this.guardarEstudiantesLocalmente(estudiantes);
        return estudiantes;
    }

    cargarEstudiantesGuardados() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];

        try {
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];
            return parsed.map(normalizeStoredEstudiante);
        } catch (error) {
            console.warn("No se pudieron cargar estudiantes guardados:", error);
            return [];
        }
    }

    guardarEstudiantesLocalmente(estudiantes) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(estudiantes));
    }

    limpiarEstudiantesLocalmente() {
        localStorage.removeItem(STORAGE_KEY);
    }

    async exportarEstudiantes(estudiantes) {
        if (!estudiantes.length) {
            throw new Error("Carga estudiantes antes de guardar registros.");
        }

        this.guardarEstudiantesLocalmente(estudiantes);

        const csv = buildEstudiantesCsv(estudiantes);
        const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = this.buildFileName();
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    }

    async getLeaderboard() {
        return this.cargarEstudiantesGuardados()
            .map((estudiante) => ({
                nombreEstudiante: estudiante.nombre,
                apellidoEstudiante: estudiante.apellido,
                totalParticipaciones: estudiante.participaciones
            }))
            .filter((entry) => entry.totalParticipaciones > 0);
    }

    buildFileName() {
        const date = new Date().toISOString().slice(0, 10);
        return `participaciones-${this.curso}-${date}.csv`;
    }
}

function parseEstudiantesCsv(text) {
    const rows = parseCsvRows(text.replace(/^\uFEFF/, ""));
    if (rows.length < 2) {
        throw new Error("El CSV debe incluir encabezado y al menos un estudiante.");
    }

    const headers = rows[0].map((value) => value.trim().toLowerCase());
    const expectedHeaders = ["id", "nombre", "apellido", "participaciones"];
    const headerIndexes = Object.fromEntries(headers.map((header, index) => [header, index]));
    const hasExpectedHeaders = expectedHeaders.every((header) => Number.isInteger(headerIndexes[header]));
    if (!hasExpectedHeaders) {
        throw new Error("El CSV debe tener las columnas: id,nombre,apellido,participaciones.");
    }

    return rows.slice(1)
        .filter((row) => row.some((value) => value.trim() !== ""))
        .map((row, index) => buildEstudiante(row, headerIndexes, index + 2));
}

function parseCsvRows(text) {
    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i += 1) {
        const char = text[i];
        const next = text[i + 1];

        if (char === '"') {
            if (inQuotes && next === '"') {
                field += '"';
                i += 1;
            } else {
                inQuotes = !inQuotes;
            }
            continue;
        }

        if (char === "," && !inQuotes) {
            row.push(field);
            field = "";
            continue;
        }

        if ((char === "\n" || char === "\r") && !inQuotes) {
            if (char === "\r" && next === "\n") i += 1;
            row.push(field);
            rows.push(row);
            row = [];
            field = "";
            continue;
        }

        field += char;
    }

    if (inQuotes) {
        throw new Error("El CSV tiene comillas sin cerrar.");
    }

    row.push(field);
    rows.push(row);

    return rows.filter((csvRow) => csvRow.some((value) => value.trim() !== ""));
}

function buildEstudiante(row, headerIndexes, lineNumber) {
    const expectedColumns = Math.max(...Object.values(headerIndexes)) + 1;
    if (row.length < expectedColumns) {
        throw new Error(`La linea ${lineNumber} no tiene todas las columnas requeridas.`);
    }

    const id = Number(row[headerIndexes.id]);
    const nombre = row[headerIndexes.nombre].trim();
    const apellido = row[headerIndexes.apellido].trim();
    const participaciones = Number(row[headerIndexes.participaciones]);

    if (!Number.isInteger(id) || id <= 0) {
        throw new Error(`La linea ${lineNumber} tiene un ID invalido.`);
    }

    if (!nombre || !apellido) {
        throw new Error(`La linea ${lineNumber} debe incluir nombre y apellido.`);
    }

    if (!Number.isInteger(participaciones) || participaciones < 0) {
        throw new Error(`La linea ${lineNumber} tiene participaciones invalidas.`);
    }

    return { id, nombre, apellido, participaciones };
}

function normalizeStoredEstudiante(estudiante) {
    const normalized = {
        id: Number(estudiante.id),
        nombre: String(estudiante.nombre || "").trim(),
        apellido: String(estudiante.apellido || "").trim(),
        participaciones: Number(estudiante.participaciones)
    };

    if (
        !Number.isInteger(normalized.id) ||
        !normalized.nombre ||
        !normalized.apellido ||
        !Number.isInteger(normalized.participaciones) ||
        normalized.participaciones < 0
    ) {
        throw new Error("Datos locales invalidos.");
    }

    return normalized;
}

function buildEstudiantesCsv(estudiantes) {
    const rows = [
        ["id", "nombre", "apellido", "participaciones"],
        ...estudiantes.map((estudiante) => [
            estudiante.id,
            estudiante.nombre,
            estudiante.apellido,
            estudiante.participaciones
        ])
    ];

    return rows.map((row) => row.map(escapeCsvValue).join(",")).join("\n");
}

/**
 * Add a new student to the locally stored array.
 * Generates a unique incremental ID if not provided.
 */
RegistrosCsv.prototype.addStudent = function(student) {
  // Ensure required fields exist
  const { nombre, apellido, participaciones } = student;
  if (!nombre || !apellido) {
    throw new Error('Nombre y apellido son obligatorios.');
  }
  const partInt = Number(participaciones);
  if (!Number.isInteger(partInt) || partInt < 0) {
    throw new Error('Participaciones debe ser un entero no negativo.');
  }

  // Load current list, compute new ID
  const current = this.cargarEstudiantesGuardados();
  const maxId = current.reduce((max, s) => Math.max(max, s.id), 0);
  const newStudent = {
    id: maxId + 1,
    nombre: String(nombre).trim(),
    apellido: String(apellido).trim(),
    participaciones: partInt
  };
  const updated = [...current, newStudent];
  this.guardarEstudiantesLocalmente(updated);
  return newStudent;
};

/**
 * Serialise an array of students to CSV text.
 */
RegistrosCsv.prototype.exportCsv = function(estudiantes) {
  return buildEstudiantesCsv(estudiantes);
};

/**
 * Save the currently stored students to a CSV file (trigger download).
 */
RegistrosCsv.prototype.saveCsvToFile = function() {
  const estudiantes = this.cargarEstudiantesGuardados();
  if (!estudiantes.length) {
    throw new Error('No hay estudiantes para exportar.');
  }
  const csv = this.exportCsv(estudiantes);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = this.buildFileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

function escapeCsvValue(value) {
    const text = String(value);
    if (/[",\n\r]/.test(text)) {
        return `"${text.replaceAll('"', '""')}"`;
    }
    return text;
}
