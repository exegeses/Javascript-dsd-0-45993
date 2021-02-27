    // ubicar elemento dentro del DOM
    var caja = document.getElementById('caja');

    //declaramos funciones
    function ocultar()
    {
        //caja.style.opacity = 0;
        //caja.style.visibility = 'hidden';
        caja.style.display = 'none';
    }
    function mostrar()
    {
        //caja.style.opacity = 1;
        //caja.style.visibility = 'visible';
        caja.style.display = 'block';
    }
    function mostrarOcultar()
    {
        if( caja.style.display == 'none' ){
            //caja.style.display = 'block';
            mostrar();
        }
        else{
            //caja.style.display = 'none';
            ocultar();
        }
    }