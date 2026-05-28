import { EstudiantesController } from "./estudiante.js";
import { RegistrosExcel } from "./registrosExcel.js";
import { renderEstudiantes, renderGuardarRegistros, updateParticipacion } from "./renders.js";
import { PLANTILLA, CURSO } from "./config.js";

const estudiantesController = new EstudiantesController();
const registrosExcel = new RegistrosExcel(PLANTILLA, CURSO);


export async function initData() {
  const estudiantes = await registrosExcel.cargarEstudiantes();
  estudiantesController.setEstudiantes(estudiantes);
  renderEstudiantes(estudiantes);
}

export function handleMarcarParticipacion(estudianteId) {
  estudiantesController.incrementarParticipacion(estudianteId);
  const estudiante = estudiantesController.getEstudiante(estudianteId);
  updateParticipacion(estudianteId, estudiante.participaciones);
}

export function handleQuitarParticipacion(estudianteId) {
  estudiantesController.decrementarParticipacion(estudianteId);
  const estudiante = estudiantesController.getEstudiante(estudianteId);
  updateParticipacion(estudianteId, estudiante.participaciones);
}


export function handleGuardarExcel() {
  const estudiantes = estudiantesController.estudiantes;
  registrosExcel.exportarEstudiantes(estudiantes);
  renderGuardarRegistros();
}


export function handleFiltroEstudiantes(nombre, apellido) {
  const filtrados = estudiantesController.filtrarEstudiantes(nombre, apellido);
  renderEstudiantes(filtrados);
}