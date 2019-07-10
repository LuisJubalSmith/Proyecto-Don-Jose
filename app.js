// Creador: Luis Jubal Smith.
// Email: lsmithp@ucenfotec.ac.cr.
// Ejercicio: Proyecto Final.
// Curso: Fundamentos de Programacion Wed.

window.onload = function init() {
    // 1er. Declarar y Inicializar Variables
    var nombreTxt = document.getElementById('nombreTxt');
    var apellidoTxt = document.getElementById('apellidoTxt');
    var apellido2Txt = document.getElementById('apellido2Txt');
    var cedulaTxt = document.getElementById('cedulaTxt');
    var sltTipoRecolector = document.getElementById('sltTipoRecolector');
    var registrarBtn = document.getElementById('registrarBtn');
    // Actualizar
    var sltActualizar = document.getElementById('sltActualizar');
    var nombreActualizarTxt = document.getElementById('nombreActualizarTxt');
    var apellidoActualizarTxt = document.getElementById('apellidoActualizarTxt');
    var apellido2ActualizarTxt = document.getElementById('apellido2ActualizarTxt');
    var cedulaActualizarTxt = document.getElementById('cedulaActualizarTxt');
    var sltActualizarTipoRecolector = document.getElementById('sltActualizarTipoRecolector');
    var actualizarBtn = document.getElementById('actualizarBtn');
    // Registrar cajuelas
    var sltRegCajuela = document.getElementById('sltRegCajuela');
    var sltSemana = document.getElementById('sltSemana');
    var cantCajuelasTxt = document.getElementById('cantCajuelasTxt');
    var registrarCajuelasBtn = document.getElementById('registrarCajuelasBtn');
    // Calcular Pago
    var sltPagoSemanal = document.getElementById('sltPagoSemanal');
    var calcularPagoBtn = document.getElementById('calcularPagoBtn');
    // Eliminar
    var sltEliminar = document.getElementById('sltEliminar');
    var eliminarBtn = document.getElementById('eliminarBtn');
    var resetSemanaBtn = document.getElementById('resetSemanaBtn');
    // Botones Mayo, Menor y Mostrar tabla completa
    var mostrarListaBtn = document.getElementById('mostrarListaBtn');
    var mostrarMayorRecolectorBtn = document.getElementById('mostrarMayorRecolectorBtn');
    var mostrarMenorRecolectorBtn = document.getElementById('mostrarMenorRecolectorBtn');
    // Crear Reportes
    var recolectoresTable = document.createElement('table');
    document.body.appendChild(recolectoresTable);
    var resultadoPr = document.getElementById('resultadoPr');
    var counter = 0;
    // Expresiones regulares
    var expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    // Matriz: Nombre,1erApellido,2doApellido,Cedula,Tipo de Recolector,Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,CantidadTotalCajuelas.
    var infoRecolectores = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    registrarRecolectores('Josue', 'Ortiz', 'Sanchez', 101110111, 'Regular', 0, 0, 0, 0, 0, 0, 0);
    registrarRecolectores('Juan', 'Perez', 'Gomez', 202220222, 'Temporal', 0, 0, 0, 0, 0, 0, 0);
    registrarRecolectores('Maria', 'Fernandez', 'Leiva', 303330333, 'Regular', 0, 0, 0, 0, 0, 0, 0);
    registrarRecolectores('Elena', 'Arias', 'Rojas', 404440444, 'Temporal', 0, 0, 0, 0, 0, 0, 0);
    registrarRecolectores('Diego', 'Hernandez', 'Jimenez', 505550555, 'Regular', 0, 0, 0, 0, 0, 0, 0);
    actualizarinfoRecolectoresSlt()


    // Funciones
    function registrarRecolectores(nombre, apellido, apellido2, cedula, tipoRecolector, lunes, martes, miercoles, jueves, viernes, sabado, total) {

        infoRecolectores[0].push(nombre);
        infoRecolectores[1].push(apellido);
        infoRecolectores[2].push(apellido2);
        infoRecolectores[3].push(cedula);
        infoRecolectores[4].push(tipoRecolector);
        infoRecolectores[5].push(lunes);
        infoRecolectores[6].push(martes);
        infoRecolectores[7].push(miercoles);
        infoRecolectores[8].push(jueves);
        infoRecolectores[9].push(viernes);
        infoRecolectores[10].push(sabado);
        infoRecolectores[11].push(total);



    }

    function mostrarTabla() {


        resultadoH3.innerHTML = "Tabla Recolectores";
        recolectoresTable.innerHTML = '';

        var tr = document.createElement('tr');
        recolectoresTable.appendChild(tr);

        var th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Nombre';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Apellido';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Segundo Apellido';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Cedula';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'tipo de Recolector';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Cantidad Recolectado';

        for (let y = 0; y < infoRecolectores[0].length; y++) {


            tr = document.createElement('tr');
            recolectoresTable.appendChild(tr);

            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = infoRecolectores[0][y];

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = infoRecolectores[1][y];

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = infoRecolectores[2][y];

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = infoRecolectores[3][y];

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = infoRecolectores[4][y];

            td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = infoRecolectores[11][y];

        }

    }

    function actualizarinfoRecolectoresSlt() {
        sltActualizar.innerHTML = '';

        for (let y = 0; y < infoRecolectores[0].length; y++) {
            var option = document.createElement('option');
            option.innerHTML = infoRecolectores[0][y] + ' ' + infoRecolectores[1][y];
            option.value = y;
            sltActualizar.appendChild(option);


            var option = document.createElement('option');
            option.innerHTML = infoRecolectores[0][y] + ' ' + infoRecolectores[1][y];
            option.value = y;
            sltEliminar.appendChild(option);


            var option = document.createElement('option');
            option.innerHTML = infoRecolectores[0][y] + ' ' + infoRecolectores[1][y];
            option.value = y;
            sltRegCajuela.appendChild(option);


            var option = document.createElement("option");
            option.value = y;
            option.innerHTML = infoRecolectores[0][y] + ' ' + infoRecolectores[1][y];
            sltPagoSemanal.appendChild(option);
            counter++;
        }

    }

    function actualizar(nombre, apellido, apellido2, cedula, tipoRecolector) {

        var nombre = nombreActualizarTxt.value;
        var apellido = apellidoActualizarTxt.value;
        var apellido2 = apellido2ActualizarTxt.value;
        var cedula = cedulaActualizarTxt.value;
        var tipoRecolector = sltActualizarTipoRecolector.value;
        var index = Number(sltActualizar.value);

        infoRecolectores[0][index] = nombre;
        infoRecolectores[1][index] = apellido;
        infoRecolectores[2][index] = apellido2;
        infoRecolectores[3][index] = cedula;
        infoRecolectores[4][index] = tipoRecolector;


    }

    function agregarActualizacion() {

        sltActualizar.innerHTML = '';
        sltRegCajuela.innerHTML = '';
        sltPagoSemanal.innerHTML = '';
        sltEliminar.innerHTML = '';

        for (var i = 0; i < infoRecolectores[0].length; i++) {
            var option = document.createElement('option');
            option.innerHTML = infoRecolectores[0][i] + ' ' + infoRecolectores[1][i];
            var option2 = document.createElement('option');
            option2.innerHTML = infoRecolectores[0][i] + ' ' + infoRecolectores[1][i];
            var option3 = document.createElement('option');
            option3.innerHTML = infoRecolectores[0][i] + ' ' + infoRecolectores[1][i];
            var option4 = document.createElement('option');
            option4.innerHTML = infoRecolectores[0][i] + ' ' + infoRecolectores[1][i];

            option.value = i;
            option2.value = i;
            option3.value = i;
            option4.value = i;
            sltActualizar.appendChild(option);
            sltRegCajuela.appendChild(option2);
            sltPagoSemanal.appendChild(option3);
            sltEliminar.appendChild(option4);
            counter++;
        }
    }

    function registrarCajuelas(cajuelas, diaSemana, recolector) {

        infoRecolectores[(diaSemana + 5)][recolector] = cajuelas;

    }

    function cantCajuelas() {
        var cantTotal = 0;

        for (var j = 0; j < infoRecolectores[0].length; j++) {

            cantTotal = infoRecolectores[5][j] + infoRecolectores[6][j] + infoRecolectores[7][j] + infoRecolectores[8][j] + infoRecolectores[9][j] + infoRecolectores[10][j];

            infoRecolectores[11][j] = cantTotal;

        }

        console.log(infoRecolectores[11]);
    }

    function sumarArreglos(indexSemana) {

        var indexSemana = Number(sltPagoSemanal.value);
        var presioCajuela = 2500;
        var extra = 15;
        var cantTotal = infoRecolectores[11][indexSemana];
        var tipoRecolector = infoRecolectores[4][indexSemana]
        var total1 = 0;
        var total2 = 0;
        var subTotal = 0;

        total1 = cantTotal * presioCajuela;

        if (tipoRecolector == 'Regular') {
            subTotal = total1 * (extra / 100);
            total2 = total1 + subTotal;
        } else {
            total2 = total1;
        }
        var total = infoRecolectores[0][indexSemana] + ' ' + infoRecolectores[1][indexSemana] + ' es ' + total2;
        console.log(total);

        return total;
    }

    function encontrarNumMayor(msj) {

        var mayor = infoRecolectores[11][0];
        var posicion = 0;

        for (var j = 0; j < infoRecolectores[11].length; j++) {
            if (mayor < infoRecolectores[11][j]) {
                mayor = infoRecolectores[11][j];
            }
        }
        console.log(infoRecolectores[11].indexOf(mayor));
        posicion = infoRecolectores[11].indexOf(mayor);

        resultadoH3.innerHTML = msj;
        recolectoresTable.innerHTML = '';

        var tr = document.createElement('tr');
        recolectoresTable.appendChild(tr);

        var th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Nombre';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Apellido';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Segundo Apellido';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Cedula';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Tipo De Recolector';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Cantidad Recolectada'



        tr = document.createElement('tr');
        recolectoresTable.appendChild(tr);

        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[0][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[1][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[2][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[3][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[4][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[11][posicion];

    }

    function encontrarNumMenor(msj) {

        var menor = infoRecolectores[11][0];
        var posicion = 0;

        for (var j = 0; j < infoRecolectores[11].length; j++) {
            if (menor > infoRecolectores[11][j]) {
                menor = infoRecolectores[11][j];
            }
        }
        console.log(infoRecolectores[11].indexOf(menor));
        posicion = infoRecolectores[11].indexOf(menor);

        resultadoH3.innerHTML = msj;
        recolectoresTable.innerHTML = '';

        var tr = document.createElement('tr');
        recolectoresTable.appendChild(tr);

        var th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Nombre';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Apellido';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Segundo Apellido';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Cedula';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Tipo De Recolector';

        th = document.createElement('th');
        tr.appendChild(th);
        th.innerHTML = 'Cantidad Recolectada'



        tr = document.createElement('tr');
        recolectoresTable.appendChild(tr);

        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[0][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[1][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[2][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[3][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[4][posicion];

        td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = infoRecolectores[11][posicion];

    }

    function eliminar() {
        var index = Number(sltEliminar.value);

        for (var x = 0; x < infoRecolectores[0].length; x++) {

            if (infoRecolectores[0][index] === infoRecolectores[0][x]) {

                infoRecolectores[0].splice(index, 1);
                infoRecolectores[1].splice(index, 1);
                infoRecolectores[2].splice(index, 1);
                infoRecolectores[3].splice(index, 1);
                infoRecolectores[4].splice(index, 1);
                infoRecolectores[5].splice(index, 1);
                infoRecolectores[6].splice(index, 1);
                infoRecolectores[7].splice(index, 1);
                infoRecolectores[8].splice(index, 1);
                infoRecolectores[9].splice(index, 1);
                infoRecolectores[10].splice(index, 1);
                infoRecolectores[11].splice(index, 1);
            }
        }
        console.log(index);
        console.log(infoRecolectores);
    }

    function resetSemana() {
        for (var x = 0; x < infoRecolectores[5].length; x++) {


            infoRecolectores[5][x] = 0;
            infoRecolectores[6][x] = 0;
            infoRecolectores[7][x] = 0;
            infoRecolectores[8][x] = 0;
            infoRecolectores[9][x] = 0;
            infoRecolectores[10][x] = 0;
            infoRecolectores[11][x] = 0;


        }
    }

    // Botones

    registrarBtn.onclick = function registrarBtnOnClick() {



        var nombre = nombreTxt.value;
        var apellido = apellidoTxt.value;
        var apellido2 = apellido2Txt.value;
        var cedula = cedulaTxt.value;
        var tipoRecolector = sltTipoRecolector.value;


        if (nombre == '') {

            alert("El campo Nombre es requerido");


        } else if (!expRegNombre.exec(nombre)) {

            alert("El campo nombre solo acepta letras y espacios");

        } else if (apellido == '') {

            alert("El campo Apellido es requerido");

        } else if (!expRegNombre.exec(apellido)) {

            alert("El campo Apellido solo acepta letras y espacios");

        } else if (apellido2 == '') {

            alert("El campo Seg.Apellido es requerido");

        } else if (!expRegNombre.exec(apellido2)) {

            alert("El campo Seg.Apellido solo acepta letras y espacios");

        } else if (cedula == '') {

            alert("El campo Cedula es requerido");

        } else {

            nombreTxt.value = '';
            apellidoTxt.value = '';
            apellido2Txt.value = '';
            cedulaTxt.value = '';
            sltTipoRecolector.value = '';

            registrarRecolectores(nombre, apellido, apellido2, cedula, tipoRecolector, 0, 0, 0, 0, 0, 0, 0);


            console.log(infoRecolectores[0]);
            console.log(infoRecolectores[1]);
            console.log(infoRecolectores[2]);
            console.log(infoRecolectores[3]);
            console.log(infoRecolectores[4]);
            console.log(infoRecolectores[5]);
            console.log(infoRecolectores[6]);
            console.log(infoRecolectores[7]);
            console.log(infoRecolectores[8]);
            console.log(infoRecolectores[9]);
            console.log(infoRecolectores[10]);

            for (var j = counter; j < infoRecolectores[0].length; j++) {
                var option = document.createElement("option");
                option.value = j;
                option.innerHTML = infoRecolectores[0][j] + ' ' + infoRecolectores[1][j];
                sltActualizar.appendChild(option);


                var option = document.createElement("option");
                option.value = j;
                option.innerHTML = infoRecolectores[0][j] + ' ' + infoRecolectores[1][j];
                sltEliminar.appendChild(option);

                var option = document.createElement("option");
                option.value = j;
                option.innerHTML = infoRecolectores[0][j] + ' ' + infoRecolectores[1][j];
                sltRegCajuela.appendChild(option);

                var option = document.createElement("option");
                option.value = j;
                option.innerHTML = infoRecolectores[0][j] + ' ' + infoRecolectores[1][j];
                sltPagoSemanal.appendChild(option);
                counter++;
            }

            agregarActualizacion()

        }
    }


    registrarCajuelasBtn.onclick = function registrarCajuelasBtnOnClick() {


        var cajuelas = Number(cantCajuelasTxt.value);
        var diaSemana = Number(sltSemana.value);
        var recolector = Number(sltRegCajuela.value);

        registrarCajuelas(cajuelas, diaSemana, recolector)

        console.log(infoRecolectores[5]);
        console.log(infoRecolectores[6]);
        console.log(infoRecolectores[7]);
        console.log(infoRecolectores[8]);
        console.log(infoRecolectores[9]);
        console.log(infoRecolectores[10]);

        cantCajuelasTxt.value = '';

    }

    sltActualizar.onchange = function sltActualizarOnChange() {

        var posicion = Number(sltActualizar.value);

        nombreActualizarTxt.value = '';
        apellidoActualizarTxt.value = '';
        apellido2ActualizarTxt.value = '';
        cedulaActualizarTxt.value = '';


        nombreActualizarTxt.value = infoRecolectores[0][posicion];
        apellidoActualizarTxt.value = infoRecolectores[1][posicion];
        apellido2ActualizarTxt.value = infoRecolectores[2][posicion];
        cedulaActualizarTxt.value = infoRecolectores[3][posicion];

        if (infoRecolectores[4][posicion] == 'Regular') {

            sltActualizarTipoRecolector.value = 'Regular';

        } else {

            sltActualizarTipoRecolector.value = 'Temporal';
        }
        console.log(sltActualizarTipoRecolector.value);

    }

    actualizarBtn.onclick = function actualizarBtnOnClick() {

        var nombre = nombreActualizarTxt.value;
        var apellido = apellidoActualizarTxt.value;
        var apellido2 = apellido2ActualizarTxt.value;
        var cedula = cedulaActualizarTxt.value;


        if (nombre == '') {

            alert("El campo Nombre es requerido");


        } else if (!expRegNombre.exec(nombre)) {

            alert("El campo nombre solo acepta letras y espacios");

        } else if (apellido == '') {

            alert("El campo Apellido es requerido");

        } else if (!expRegNombre.exec(apellido)) {

            alert("El campo Apellido solo acepta letras y espacios");

        } else if (apellido2 == '') {

            alert("El campo Seg.Apellido es requerido");

        } else if (!expRegNombre.exec(apellido2)) {

            alert("El campo Seg.Apellido solo acepta letras y espacios");

        } else if (cedula == '') {

            alert("El campo Cedula es requerido");

        } else {

            actualizar();
            agregarActualizacion();

            console.log(infoRecolectores[0]);
            console.log(infoRecolectores[1]);
            console.log(infoRecolectores[2]);
            console.log(infoRecolectores[3]);
            console.log(infoRecolectores[4]);

            nombreActualizarTxt.value = '';
            apellidoActualizarTxt.value = '';
            apellido2ActualizarTxt.value = '';
            cedulaActualizarTxt.value = '';
            cantCajuelasTxt.value = '';
            mostrarTabla()


        }
    }


    calcularPagoBtn.onclick = function calcularPagoBtnOnClick() {

        resultadoPr.innerHTML = '';
        cantCajuelas();
        sumarArreglos(Number(sltPagoSemanal.value));

        resultadoPr.innerHTML = 'Su pago: El pago de ' + sumarArreglos();
    }

    mostrarListaBtn.onclick = function () {
        cantCajuelas();
        mostrarTabla();
    }

    mostrarMayorRecolectorBtn.onclick = function mostrarMayorRecolectorBtnOnClick() {
        cantCajuelas();
        encontrarNumMayor('Recolector que mas recolecto');

    }

    mostrarMenorRecolectorBtn.onclick = function mostrarMenorRecolectorBtnOnClick() {
        cantCajuelas();
        encontrarNumMenor('Recolector que menos recolecto');
    }

    eliminarBtn.onclick = function eliminarBtnOnClick() {


        eliminar();
        agregarActualizacion();

        nombreActualizarTxt.value = '';
        apellidoActualizarTxt.value = '';
        apellido2ActualizarTxt.value = '';
        cedulaActualizarTxt.value = '';
        cantCajuelasTxt.value = '';
        mostrarTabla()


    }

    resetSemanaBtn.onclick = function resetSemanaBtnOnClick() {


        resetSemana()
        cantCajuelas()
        mostrarTabla()

        console.log(infoRecolectores);
    }

};