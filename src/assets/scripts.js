document.addEventListener("DOMContentLoaded", () => {

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const slider = document.querySelector('.slider');

    const prev2 = document.querySelector('.prev2');
    const next2 = document.querySelector('.next2');
    const slider2 = document.querySelector('.slider2');


    prev.addEventListener('click', () => {
        slider.scrollLeft -= 300;
    });

    next.addEventListener('click', () => {
        slider.scrollLeft += 300;
    });

    prev2.addEventListener('click', () => {
        slider2.scrollLeft -= 300;
    });

    next2.addEventListener('click', () => {
        slider2.scrollLeft += 300;
    });

    function limitString(Text, limit) {
        if (Text.length > limit) {
            return Text.slice(0, limit) + '...';
        } else {
            return Text;
        }
    }

    //desplazamiento desde el menu hasta la seccion de Hombre
    // Obtener el elemento del menú
    const menuItem = document.querySelector('.disfDeHombre');

    // Obtener el elemento al que se quiere desplazar
    const targetElement = document.querySelector('.transition');

    // Agregar un controlador de eventos al elemento del menú
    menuItem.addEventListener('click', () => {
        // Agregar la clase CSS que activa la transición
        targetElement.classList.add('transition');

        // Desplazarse al elemento objetivo
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        // Eliminar la clase CSS después de que termine la transición
        setTimeout(() => {
            targetElement.classList.remove('transition');
        }, 500);
    });


    //desplazamiento desde el menu hasta la seccion de Mujer
    const menuItem2 = document.querySelector('.disfDeMujer');
    const targetElement2 = document.querySelector('.transition2');

    menuItem2.addEventListener('click', () => {
        targetElement2.classList.add('transition2');
        targetElement2.scrollIntoView({
            behavior: 'smooth'
        });

        setTimeout(() => {
            targetElement2.classList.remove('transition2');
        }, 500);
    });

    //desplazamiento desde el menu hasta la seccion de Sobre Nosotros
    const menuItem3 = document.querySelector('.nosotros');
    const targetElement3 = document.querySelector('.transition3');

    menuItem3.addEventListener('click', () => {
        targetElement3.classList.add('transition3');
        targetElement3.scrollIntoView({
            behavior: 'smooth'
        });

        setTimeout(() => {
            targetElement3.classList.remove('transition3');
        }, 500);
    });

    //desplazamiento desde el menu hasta la seccion de Contacto
    const menuItem4 = document.querySelector('.contacto');
    const targetElement4 = document.querySelector('.transition4');

    menuItem4.addEventListener('click', () => {
        targetElement4.classList.add('transition4');
        targetElement4.scrollIntoView({
            behavior: 'smooth'
        });

        setTimeout(() => {
            targetElement4.classList.remove('transition4');
        }, 500);
    });


    //ANIMACIONES DE MOVIMIENTO
    const cohete = document.querySelector('.cohete');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const rocketWidth = cohete.offsetWidth;
    const rocketHeight = cohete.offsetHeight;

    function moveRocket() {
        const newLeft = Math.floor(Math.random() * (screenWidth - rocketWidth));
        const newTop = Math.floor(Math.random() * (screenHeight - rocketHeight));
        cohete.style.left = newLeft + 'px';
        cohete.style.top = newTop + 'px';
    }

    setInterval(moveRocket, 1200); // Actualizar la posición del cohete cada segundo

    const rickA = document.querySelector('.rickA');
    const rickAWidth = rickA.offsetWidth;
    const rickAHeight = rickA.offsetHeight;

    function moverickA() {
        const newLeft = Math.floor(Math.random() * (screenWidth - rickAWidth));
        const newTop = Math.floor(Math.random() * (screenHeight - rickAHeight));
        rickA.style.left = newLeft + 'px';
        rickA.style.top = newTop + 'px';
    }

    setInterval(moverickA, 2000);

    const pepinoA = document.querySelector('.pepinoA');
    const pepinoAWidth = rickA.offsetWidth;
    const pepinoAHeight = rickA.offsetHeight;

    function movepepinoA() {
        const newLeft = Math.floor(Math.random() * (screenWidth - pepinoAWidth));
        const newTop = Math.floor(Math.random() * (screenHeight - pepinoAHeight));
        pepinoA.style.left = newLeft + 'px';
        pepinoA.style.top = newTop + 'px';
    }

    setInterval(movepepinoA, 800);

    const pistolaA = document.querySelector('.pistolaA');
    const pistolaAWidth = rickA.offsetWidth;
    const pistolaAHeight = rickA.offsetHeight;

    function movepistolaA() {
        const newLeft = Math.floor(Math.random() * (screenWidth - pistolaAWidth));
        const newTop = Math.floor(Math.random() * (screenHeight - pistolaAHeight));
        pistolaA.style.left = newLeft + 'px';
        pistolaA.style.top = newTop + 'px';
    }

    setInterval(movepistolaA, 3000);



    //segundas animaciones
    const cohete2 = document.querySelector('.cohete2');

    function moveRocket2() {
        const newLeft = Math.floor(Math.random() * (screenWidth - rocketWidth));
        const newTop = Math.floor(Math.random() * (screenHeight - rocketHeight));
        cohete2.style.left = newLeft + 'px';
        cohete2.style.top = newTop + 'px';
    }

    setInterval(moveRocket2, 1500); // Actualizar la posición del cohete cada segundo

    const rickA2 = document.querySelector('.rickA2');
    const rickA2Width = rickA2.offsetWidth;
    const rickA2Height = rickA2.offsetHeight;

    function moverickA2() {
        const newLeft = Math.floor(Math.random() * (screenWidth - rickA2Width));
        const newTop = Math.floor(Math.random() * (screenHeight - rickA2Height));
        rickA2.style.left = newLeft + 'px';
        rickA2.style.top = newTop + 'px';
    }

    setInterval(moverickA2, 1900);

    const pepinoA2 = document.querySelector('.pepinoA2');
    const pepinoA2Width = pepinoA2.offsetWidth;
    const pepinoA2Height = pepinoA2.offsetHeight;

    function movepepinoA2() {
        const newLeft = Math.floor(Math.random() * (screenWidth - pepinoA2Width));
        const newTop = Math.floor(Math.random() * (screenHeight - pepinoA2Height));
        pepinoA2.style.left = newLeft + 'px';
        pepinoA2.style.top = newTop + 'px';
    }

    setInterval(movepepinoA2, 750);

    const pistolaA2 = document.querySelector('.pistolaA2');
    const pistolaA2Width = pistolaA2.offsetWidth;
    const pistolaA2Height = pistolaA2.offsetHeight;

    function movepistolaA2() {
        const newLeft = Math.floor(Math.random() * (screenWidth - pistolaA2Width));
        const newTop = Math.floor(Math.random() * (screenHeight - pistolaA2Height));
        pistolaA2.style.left = newLeft + 'px';
        pistolaA2.style.top = newTop + 'px';
    }

    setInterval(movepistolaA2, 1000);


});