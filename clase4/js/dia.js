    //ubicamos elemento dentro del DOM
    var txtDia = document.getElementById('txtDia');

    // creamos un objeto de fecha
    var fecha = new Date();
    //obtenemos número del día de la semana
        /*
        * 0 - Domingo
        * 1 - Lunes
        * 2 - Martes
        * ...
        * 6 - Sábado
        * */
    var diaSemana = fecha.getDay();

    // almacenamos días de la semana en memoria
    var semana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                 ];

    //escribimos dentro del spam
    txtDia.innerText = semana[ diaSemana ];