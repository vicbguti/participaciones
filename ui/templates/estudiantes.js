/* ui/templates/estudiantes.js */

export function buildFilaTablaEstudiante(estudiante) {
  return `
    <td class="col-id">${estudiante.id}</td>
    <td>${estudiante.nombre}</td>
    <td>${estudiante.apellido}</td>
    <td class="col-participaciones">
      <span class="participaciones-badge" id="participaciones-${estudiante.id}">${estudiante.participaciones}</span>
    </td>
    <td class="col-acciones">
      <button class="btn-participacion btn-accion btn-mas" data-estudiante-id="${estudiante.id}" title="Marcar participación">+</button>
      <button class="btn-quitar-participacion btn-accion btn-menos" data-estudiante-id="${estudiante.id}" title="Quitar participación">−</button>
    </td>
  `;
}

export function buildTablaHeader() {
  return `
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Participaciones</th>
      <th>Acciones</th>
    </tr>
  `;
}
