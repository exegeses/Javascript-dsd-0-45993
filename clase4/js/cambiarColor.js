    // ubicamos elemento dentro del DOM
    var caja = document.getElementById('caja');

    function verde()
    {
        caja.style.backgroundColor = '#a3d6c3';
        caja.style.border = '1px solid #425650';
        caja.innerText = 'verde';
    }

    function naranja()
    {
        caja.style.backgroundColor = '#d6bfa3';
        caja.style.border = '1px solid #f60';
        caja.innerText = 'naranja';
    }