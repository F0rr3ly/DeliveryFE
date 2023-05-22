
var worker;

function clickeado(){
    if(worker==undefined){
        worker= new Worker("worker.js");
        worker.postMessage(1);
    }

    console.log("clickeado");
    
}
function terminarW(){
    worker.terminate();
    worker=undefined
}

function setNamecard(){ 
 
 
 
}