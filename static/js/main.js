var widthWindow = window.innerWidth


const desktopAnimations = ()=>{
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
}

const animationsMobile = ()=>{
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
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    });


    sr.reveal('.scroll-mision', {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    });


    sr.reveal('.scroll-img-l', {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    });

    sr.reveal('.scroll-img-r', {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    });

    sr.reveal('.scroll-senderismo', {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    });

    sr.reveal('.scroll-escalada', {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    })

    sr.reveal('.scroll-camping', {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
    });

    sr.reveal('.scroll-tirolesa', {
        duration: 1000,
        easing: 'ease-in-out',
        delay: 400
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


}


function animations(){

    if(widthWindow < 768){
        animationsMobile();

    } else{
        desktopAnimations();
    }
}

animations();



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

const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const navItems = [nav1, nav2, nav3, nav4];

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
