    //ubicamos elemento dentro del DOM
    var txtReloj = document.getElementById('txtReloj');

    //declaramos función
    function motrarReloj()
    {
        //creamos un objeto de fecha
        var fecha = new Date();
        //averiguamos las horas
        var horas = fecha.getHours();
        //averiguamos los minutos
        var minutos = fecha.getMinutes();
            if( minutos ){
                minutos = '0'+minutos;
            }
        //averiguamos los segundos
        var segundos = fecha.getSeconds();
            if( segundos < 10 ){
                segundos = '0'+segundos;
            }
        //escribimos en el span
        txtReloj.innerText = horas +':'+ minutos +':'+ segundos;
    }

    //llamamos a la función
    motrarReloj();

    //actualizar el llamado a mostrarReloj
    setInterval( motrarReloj, 1000 )
