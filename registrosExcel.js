
export class RegistrosExcel {

    plantillaParticipacion = null;
    curso = "";

    constructor(filepath, curso) {
        this.plantillaParticipacion = new File([], filepath);
        this.curso = curso;
    }

    async cargarEstudiantes() {
        // Cargar estudiantes de la plantilla
        console.log(`Cargando estudiantes desde ${this.plantillaParticipacion.name}...`);
        console.log(this.plantillaParticipacion);
        return dummyEstudiantes;
    }

    async exportarEstudiantes(estudiantes) {
        const filename = this.buildFileName();
        // Exportar estudiantes en un nuevo archivo Excel con el nombre generado
        console.log(`Exportando estudiantes a ${filename}...`);
        console.log(estudiantes);
    }

    async getLeaderboard() {
        // Cargar registros y calcular el leaderboard
        console.log("Leaderboard:");
        console.log(dummyLeaderboard);
        return dummyLeaderboard;
    }

    buildFileName() {
        // Construir el nombre del archivo con el formato "asistencia-curso-fecha.xlsx"
        return "";
    }
}

const dummyEstudiantes = [
    { id: 1, nombre: "Juan", apellido: "Pérez", participaciones: 0 },
    { id: 2, nombre: "María", apellido: "Gómez", participaciones: 0 },
    { id: 3, nombre: "Carlos", apellido: "López", participaciones: 0 },
    { id: 4, nombre: "Ana", apellido: "Martínez", participaciones: 0 },
    { id: 5, nombre: "Luis", apellido: "Rodríguez", participaciones: 0 }
];

const dummyLeaderboard = [
    { nombreEstudiante: "Juan", apellidoEstudiante: "Pérez", totalParticipaciones: 2 },
    { nombreEstudiante: "María", apellidoEstudiante: "Gómez", totalParticipaciones: 3 },
    { nombreEstudiante: "Carlos", apellidoEstudiante: "López", totalParticipaciones: 1 },
    { nombreEstudiante: "Ana", apellidoEstudiante: "Martínez", totalParticipaciones: 5 },
    { nombreEstudiante: "Luis", apellidoEstudiante: "Rodríguez", totalParticipaciones: 0 }
];