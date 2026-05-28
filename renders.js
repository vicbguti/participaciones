/* renders.js - Punto de Entrada / Fachada (Facade) */

// Importamos la lógica modular desde ui/
import { renderEstudiantes, updateParticipacion } from "./ui/renders/estudiantes.js";
import { renderLeaderboard } from "./ui/renders/leaderboard.js";
import { renderGuardarRegistros } from "./ui/renders/feedback.js";

// Re-exportamos para conservar la compatibilidad de Erick y participaciones.js
export {
  renderEstudiantes,
  updateParticipacion,
  renderLeaderboard,
  renderGuardarRegistros
};