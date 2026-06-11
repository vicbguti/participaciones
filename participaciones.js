import { EstudiantesController } from "./estudiante.js";
import { RegistrosCsv } from "./registrosCsv.js";
import { renderEstudiantes, renderGuardarRegistros, updateParticipacion } from "./renders.js";
import { PLANTILLA, CURSO } from "./config.js";

export const estudiantesController = new EstudiantesController();
export const registrosCsv = new RegistrosCsv(PLANTILLA, CURSO);


export async function initData() {
  const estudiantes = await registrosCsv.cargarEstudiantes();
  estudiantesController.setEstudiantes(estudiantes);
  renderEstudiantes(estudiantes, "Carga un archivo CSV para empezar a registrar participaciones.");
}

export function handleMarcarParticipacion(estudianteId) {
  estudiantesController.incrementarParticipacion(estudianteId);
  const estudiante = estudiantesController.getEstudiante(estudianteId);
  registrosCsv.guardarEstudiantesLocalmente(estudiantesController.estudiantes);
  updateParticipacion(estudianteId, estudiante.participaciones);
}

export function handleQuitarParticipacion(estudianteId) {
  estudiantesController.decrementarParticipacion(estudianteId);
  const estudiante = estudiantesController.getEstudiante(estudianteId);
  registrosCsv.guardarEstudiantesLocalmente(estudiantesController.estudiantes);
  updateParticipacion(estudianteId, estudiante.participaciones);
}


export async function handleGuardarRegistros() {
  const estudiantes = estudiantesController.estudiantes;
  try {
    await registrosCsv.exportarEstudiantes(estudiantes);
    renderGuardarRegistros("Registros guardados correctamente.", "success");
  } catch (error) {
    renderGuardarRegistros(error.message, "error");
  }
}

export async function handleCargarCsv(file) {
  try {
    const estudiantes = await registrosCsv.cargarEstudiantesDesdeArchivo(file);
    estudiantesController.setEstudiantes(estudiantes);
    renderEstudiantes(estudiantes);
    renderGuardarRegistros("CSV cargado correctamente.", "success");
  } catch (error) {
    renderGuardarRegistros(error.message, "error");
  }
}

export function handleLimpiarRegistros() {
  registrosCsv.limpiarEstudiantesLocalmente();
  estudiantesController.setEstudiantes([]);
  renderEstudiantes([], "Carga un archivo CSV para empezar a registrar participaciones.");
  renderGuardarRegistros("Datos locales limpiados correctamente.", "success");
}


export function handleGuardar() {
  try {
    registrosCsv.saveCsvToFile();
  } catch (e) {
    console.warn('Error al guardar CSV:', e);
  }
}

export function handleFiltroEstudiantes(nombre, apellido) {
  const filtrados = estudiantesController.filtrarEstudiantes(nombre, apellido);
  renderEstudiantes(filtrados);
}
