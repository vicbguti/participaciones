import {
    initData,
    handleMarcarParticipacion,
    handleQuitarParticipacion,
    handleGuardarRegistros,
    handleCargarCsv,
    handleLimpiarRegistros,
    handleFiltroEstudiantes
} from "./participaciones.js";


function init() {
    initData();
    initRegistroButtons();
    initParticipacionButtons();
    initFiltroInputs();
}

function initRegistroButtons() {
    document.getElementById("btnGuardar").addEventListener("click", handleGuardarRegistros);
    document.getElementById("btnLimpiarRegistros").addEventListener("click", handleLimpiarRegistros);

    const inputCsv = document.getElementById("inputCsv");
    document.getElementById("btnCargarCsv").addEventListener("click", () => inputCsv.click());
    inputCsv.addEventListener("change", (event) => {
        const file = event.target.files[0];
        handleCargarCsv(file);
        event.target.value = "";
    });
}

function initParticipacionButtons() {
    const botones = document.querySelectorAll(".btn-participacion");
    botones.forEach((boton) => {
        boton.addEventListener("click", () => handleMarcarParticipacion(Number(boton.dataset.estudianteId)));
    });

    const botonesQuitar = document.querySelectorAll(".btn-quitar-participacion");
    botonesQuitar.forEach((boton) => {
        boton.addEventListener("click", () => handleQuitarParticipacion(Number(boton.dataset.estudianteId)));
    });
}


function initFiltroInputs() {
    document.getElementById("filtroNombre").addEventListener("input", () => {
        const nombre = document.getElementById("filtroNombre").value;
        const apellido = document.getElementById("filtroApellido").value;
        handleFiltroEstudiantes(nombre, apellido);
    });

    document.getElementById("filtroApellido").addEventListener("input", () => {
        const nombre = document.getElementById("filtroNombre").value;
        const apellido = document.getElementById("filtroApellido").value;
        handleFiltroEstudiantes(nombre, apellido);
    });
}

document.addEventListener("DOMContentLoaded", init);
