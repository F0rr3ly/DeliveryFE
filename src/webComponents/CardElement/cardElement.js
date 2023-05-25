import {html,render} from "../../lib/lit-html/lit-html.js"
class CardElement extends HTMLElement{
    constructor(){
        super();
        this.root=this.attachShadow({mode:"open"})
        this.data={
            name:"holaaaa",
            image:"../../img-src/pikapika.webp",
            id:"123"
        }
        
    }
    get name(){
        return this.getAttribute("name")
    }
    set name(val){
        this.setAttribute("name",val)
    }
    set image(val){
        this.setAttribute("image",val)
    }
    static get observedAtribute(){
        return["name","image"]
    }
    atributeChangeCallback(atributo){
        //aqui dibujara el componente cuando alla un cambio
        this.dibujar
    }
    template(){
        //codigo de que se va ver en html y hace return

        let plantilla = (data) => html`
            <div class="card">
                <img src="${this.data.image}" alt="Avatar" style="width:100%">
                <div class="container">
                <h4><b>${this.data.name}</b></h4>
                <p>ID: ${this.data.id}</p>
                </div>
            </div>
            
            <style>
            .card {
                /* Add shadows to create the "card" effect */
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                margin-bottom:10px;
              }
              
              /* On mouse-over, add a deeper shadow */
              .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
              }
              
              /* Add some padding inside the card container */
              .container {
                padding: 2px 16px;
                overflow:hidden;
              }

            </style>`;
        
        return plantilla()
    }
    dibujar(){
        render(this.template(),this.root)
    }
    connectedCallback(){
        this.dibujar()
        
    }
        
    
}
customElements.define("card-element", CardElement);
export default CardElement

fetch("http://localhost:8080/Delivery/comercio", {
  method: "GET",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    return response.json();
  })
  .then((data) => {
    const listaGetREST = data.map((item) => item);
    console.log(listaGetREST);

    // Obtener el contenedor donde se agregarán las cards
    const container = document.getElementById("container");

    // Crear una instancia de CardElement para cada ID y agregarlo al contenedor
    listaGetREST.forEach((item) => {
      const cardElement = new CardElement(item);
      container.appendChild(cardElement);
      cardElement.data = { ...cardElement.data, id: item.idComercio, name:item.nombre };
      cardElement.dibujar();
    });
    
  })
  .catch((error) => {
    console.error("Error:", error);
  });