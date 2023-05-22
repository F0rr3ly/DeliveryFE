/* self.addEventListener('message', function(e) {
    self.postMessage(e.data);
    console.log("hola desde el worker");
    console.log(e.data)
}, false); */

/* self.addEventListener = function(e){
    self.postMessage(e.data);
    console.log("hola desde el worker");
    console.log(e.data)
} */

/* self.onmessage = function(event){
    self.postMessage(event.data);
    console.log("hola desde el worker");
    console.log(event.data)
}; */
var i=0
function count(){
    console.log(i);
    i++;
    setTimeout(count, 1000)
}
count()