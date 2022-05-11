
// Scroll reveal header

window.sr = ScrollReveal();

    sr.reveal('.navegacion', {
        duration: 1000,
        easing: 'ease-in'
    });

    sr.reveal('.banner', {
        duration: 1000,
        easing: 'ease-in-out'
    });

    
    sr.reveal('.scroll-animacion', {
        duration: 3000,
        origin: 'right',
        distance: '-400px',
    });


    sr.reveal('.scroll-mision', {
        duration: 3000,
        origin: 'left',
        distance: '-400px'
    });


    sr.reveal('.scroll-img-l', {
        duration: 3000,
        origin: 'left',
        distance: '-400px'
    });

    sr.reveal('.scroll-img-r', {
        duration: 3000,
        origin: 'right',
        distance: '-400px'
    });

    sr.reveal('.scroll-senderismo', {
        duration: 3000,
        origin: 'right',
        distance: '-400px'
    });

    sr.reveal('.scroll-escalada', {
        duration: 3000,
        origin: 'left',
        distance: '-400px'
    })

    sr.reveal('.scroll-camping', {
        duration: 3000,
        origin: 'right',
        distance: '-400px'
    });

    sr.reveal('.scroll-tirolesa', {
        duration: 3000,
        origin: 'left',
        distance: '-400px'
    })

    sr.reveal('.ubicacion',{
        duration: 1000,
        easing: 'ease-in-out'
    })

    sr.reveal('.ubicacion',{
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    })

    sr.reveal('.contenedor-contacto',{
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    })


window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 980){
        document.querySelector('.go-top-container').classList.add('show');
    }
    else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const ham = document.querySelector('.ham');
const br1 = document.querySelector('.br-1');
const br2 = document.querySelector('.br-2');
const br3 = document.querySelector('.br-3');

const enlace = document.querySelector('.enlaces-menu');

ham.addEventListener('click', () => {
    enlace.classList.toggle('activado');
    br1.classList.toggle('active-br-1')
    br2.classList.toggle('active-br-2')
    br3.classList.toggle('active-br-3')
})
