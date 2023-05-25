import {html,render} from "../../lib/lit-html/lit-html.js"
class NavElement extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: "open" })
    }
    template() {
        //codigo de que se va ver en html y hace return

        let plantilla = () => html`
        <li>Delivery</li>
        <li>Inicio</li>
        <li>Instalar</li>
        `;
        return plantilla()
    }
    dibujar(){
        render(this.template(),this.root)
    }
    connectedCallback(){
        this.dibujar()        
    }
    disconnectedCallback() {

    }
    atributeChangeCallback() {
    }
}
customElements.define("nav-ele", NavElement)
export default NavElement