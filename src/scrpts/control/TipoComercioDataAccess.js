import DefaultDataAccess from "../../DataAccess.js";
class TipoComercioDA extends DefaultDataAccess{
    constructor(){
        super()
        this.BASE_URL=this.BASE_URL+"tipocomercio"
    }
}
export default TipoComercioDA
