/*
Estudiante tiene los siguientes atributos:
- id: un número único que identifica al estudiante.
- nombre: el nombre del estudiante.
- apellido: el apellido del estudiante.
- participaciones: un número que representa la cantidad de veces que el estudiante ha participado en una clase.
*/

export class EstudiantesController {

    estudiantes = [];

    incrementarParticipacion(estudianteId) {
        const estudiante = this.estudiantes.find(e => e.id === estudianteId);
        if (estudiante) {
            estudiante.participaciones += 1;
        }
        console.log(`Participación incrementada para el estudiante con ID: ${estudianteId}`);
        console.log(estudiante);
    }

    decrementarParticipacion(estudianteId) {
        const estudiante = this.estudiantes.find(e => e.id === estudianteId);
        if (estudiante && estudiante.participaciones > 0) {
            estudiante.participaciones -= 1;
        }
        console.log(`Participación decrementada para el estudiante con ID: ${estudianteId}`);
        console.log(estudiante);
    }

    filtrarEstudiantes(nombre, apellido) {
        if (!nombre && !apellido) return this.estudiantes;
        return this.estudiantes.filter(e => {
            const matchesNombre = nombre ? e.nombre.toLowerCase().includes(nombre.toLowerCase()) : true;
            const matchesApellido = apellido ? e.apellido.toLowerCase().includes(apellido.toLowerCase()) : true;
            return matchesNombre && matchesApellido;
        });
    }

    setEstudiantes(estudiantes) {
        this.estudiantes = estudiantes;
    }

    getEstudiante(estudianteId) {
        return this.estudiantes.find(e => e.id === estudianteId);
    }

}