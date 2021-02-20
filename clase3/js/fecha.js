// obtenemos el objeto fecha
    var fecha = new Date();

// obtenemos información de la fecha
    // el día del mes (del 1 al 31)
    var diaMes = fecha.getDate();
    // el mes actual (del 0 al 11)
    var mes = fecha.getMonth()+1;
        if ( mes < 10 ) {
            mes = '0'+mes;
        }
    // el año actual
    var anio = fecha.getFullYear();

// mostramos en el span, el texto generado
    document.getElementById('mostrarFecha').innerText = diaMes+'/'+mes+'/'+anio;
