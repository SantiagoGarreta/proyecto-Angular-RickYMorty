document.addEventListener("DOMContentLoaded", () => {


    //SCROLLS 
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

    //DESPLAZAMIENTO DEL MENU HACIA LAS SECCIONES
    const scrollToSection = (menuItemClass, targetElementClass, transitionClass) => {
        const menuItem = document.querySelector(menuItemClass);
        const targetElement = document.querySelector(targetElementClass);

        menuItem.addEventListener('click', () => {
            targetElement.classList.add(transitionClass);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            setTimeout(() => {
                targetElement.classList.remove(transitionClass);
            }, 500);
        });
    };

    scrollToSection('.disfDeHombre', '.transition', 'transition');
    scrollToSection('.disfDeMujer', '.transition2', 'transition2');
    scrollToSection('.nosotros', '.transition3', 'transition3');
    scrollToSection('.contacto', '.transition4', 'transition4');


    //ANIMACIONES DE MOVIMIENTO DE FONDO 
    const cohete = document.querySelector('.cohete');
    const rickA = document.querySelector('.rickA');
    const pepinoA = document.querySelector('.pepinoA');
    const pistolaA = document.querySelector('.pistolaA');
    const cohete2 = document.querySelector('.cohete2');
    const rickA2 = document.querySelector('.rickA2');
    const pepinoA2 = document.querySelector('.pepinoA2');
    const pistolaA2 = document.querySelector('.pistolaA2');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const rocketWidth = cohete.offsetWidth;
    const rocketHeight = cohete.offsetHeight;
    const rickAWidth = rickA.offsetWidth;
    const rickAHeight = rickA.offsetHeight;
    const pepinoAWidth = pepinoA.offsetWidth;
    const pepinoAHeight = pepinoA.offsetHeight;
    const pistolaAWidth = pistolaA.offsetWidth;
    const pistolaAHeight = pistolaA.offsetHeight;

    function moveElement(element, width, height) {
        const newLeft = Math.floor(Math.random() * (screenWidth - width));
        const newTop = Math.floor(Math.random() * (screenHeight - height));
        element.style.left = newLeft + 'px';
        element.style.top = newTop + 'px';
        const randomDuration = Math.floor(Math.random() * (3000 - 800) + 800);
        setTimeout(() => {
            moveElement(element, width, height);
        }, randomDuration);
    }

        moveElement(cohete, rocketWidth, rocketHeight);
        moveElement(rickA, rickAWidth, rickAHeight);
        moveElement(pepinoA, pepinoAWidth, pepinoAHeight);
        moveElement(pistolaA, pistolaAWidth, pistolaAHeight);
        moveElement(cohete2, rocketWidth, rocketHeight);
        moveElement(rickA2, rickAWidth, rickAHeight);
        moveElement(pepinoA2, pepinoAWidth, pepinoAHeight);
        moveElement(pistolaA2, pistolaAWidth, pistolaAHeight);


    
});