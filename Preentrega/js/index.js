// MENSAJE DE BIENVENIDA
alert(
    "Hola, bienvenido a la central de turnos. \nPresione Aceptar para continuar"
);

// FUNCION QUE ASIGNA EL TURNO AL PACIENTE
function asignarTurno() {
    let dia = parseInt(
        prompt(
            "Selecciona un día para asistir a la clinica: \n 1.Lunes \n 2. Martes \n 3.Miercoles. \n 4. Jueves \n 5. Viernes"
        )
    );
    // INGRESAR HORARIO DE ASISTENCIA POR PANTALLA
    let horario = parseInt(prompt("Ingrese un horario en el que pueda asistir:"));
    switch (dia) {
        case 1:
            console.log(`Turno agendado para el dia lunes a las ${horario}hs.`);
            break;
        case 2:
            console.log(`Turno agendado para el dia martes  a las ${horario}hs`);
            break;
        case 3:
            console.log(`Turno agendado para el dia miercoles a las ${horario}hs`);
            break;
        case 4:
            console.log(`Turno agendado para el dia jueves a las ${horario}hs`);
            break;
        case 5:
            console.log(`Turno agendado para el dia viernes a las ${horario}hs`);
            break;
        default:
            console.log("Opcion incorrecta, selecciona una opcion valida");
            break;
    }
}

let salir = true;
while (salir) {
    // EVALUAR LA OPCION UTILIZANDO SWITCH
    let opcion = parseInt(
        prompt(
            "Selecciona una especialidad: \n 1.Medico Clinico \n 2. Traumatologia \n 3.Ginecologia. \n 4. Neurologia \n 5. Pediatria \n 6. Nefrologia \n 7. Salir "
        )
    );
    if (opcion >= 1 && opcion < 6) {
        asignarTurno();
    } else if (opcion == 7) {
        salir = false;
        alert("Hasta luego.");
    } else {
        console.log("Opcion incorrecta, selecciona una opcion valida");
    }
}
