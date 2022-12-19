let ubicacionPrincipal = window.pageYOffset;
  
AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-130px"
    }

    ubicacionPrincipal = desplazamientoActual;

});

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguesa")[0].addEventListener("click" , function(){
    if(semaforo){
        document.querySelectorAll(".hamburguesa")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguesa")[0].style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos")
})

