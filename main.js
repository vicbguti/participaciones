import {
    initData,
    handleMarcarParticipacion,
    handleQuitarParticipacion,
    handleGuardarExcel,
    handleFiltroEstudiantes
} from "./participaciones.js";


function init() {
    initData();
    initGuardarExcelBtn();
    initParticipacionButtons();
    initFiltroInputs();
}

function initGuardarExcelBtn() {
    document.getElementById("btnGuardar").addEventListener("click", handleGuardarExcel);
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