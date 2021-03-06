    //ubicar Elemento dentro del DOM
    var verDado = document.getElementById('verDado');

    //crear función de control
    function tirarDado()
    {
        //obtenemos numero aleatorio
        var numeroAleatorio = Math.random();// 0 - 1
            console.log(numeroAleatorio);
        //obtenemos numero entre 1 y 6
        var numeroMultiplicado = (numeroAleatorio * 5) + 1;
            console.log(numeroMultiplicado);
        //quitamos decimales
        var numero = Math.round(numeroMultiplicado);
            console.log(numero);

        //mostrar imagen dentro del figure
        verDado.innerHTML = '<img src="dados/dado'+numero+'.png">';
    }

    //invocar función
    tirarDado();