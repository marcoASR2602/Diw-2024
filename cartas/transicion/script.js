let pulsaciones=0;
let carta1='';
let carta2='';

document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll(".carta").forEach(element => {
        element.addEventListener('click',function(){
            element.classList.toggle("seleccionada");
                if(!element.classList.contains('seleccionada')){
                pulsaciones++;
                if(pulsaciones==1){
                    carta1=element.classList[1];        
                }else if(pulsaciones==2){
                    carta2=element.classList[1];  
                    pulsaciones=0;
                    if(carta1!=carta2){ 
                    setTimeout(quitarClaseSeleccionada,500);
                        }
                }
        }       
    });
});

function quitarClaseSeleccionada(){
    document.querySelectorAll("."+carta1).array.forEach(element => {
        element.classList.remove("seleccionada");
    });
    document.querySelectorAll("."+carta2).array.forEach(element => {
        element.classList.remove("seleccionada");
    });
}