import CardElement from "../CardElement/cardElement.js"
class CardGenerator extends CardElement{
    constructor(){
        super()
        
        this.datos={
            name:"ola",
            image:"./../../img-src/sayamiki.webp"
            ,id:"12342134"
        }

    }
    connectedCallback(){
      
        this.data=this.datos
        this.dibujar()
        
        
    }
   

}
customElements.define("card-generator",CardGenerator)
export default CardGenerator