import "./Asaid.css";
import ListaMateriales from "../ListaMateriales/ListaMateriales";
import SVG from "../SVG/SVG";
import Hr from "../../Hr/Hr";

function Asaid() {
  return (
    <>
      <aside>
        <div className="asaidContainer">
          <span className="line top"></span>
          <span className="line right"></span>
          <span className="line bottom"></span>

          <div className="cabezeraAsaid">
            <p className="perfil">ESTACIÓN - PERFIL</p>
            <p className="asideTitle">// ESPECIALIZACIONES DE MATERIALES</p>
          </div>
          <div className="tituloLista">
            <p>MATERIAL</p>
            <p>PRODUCCIÓN</p>
          </div>
          <ListaMateriales />
          <hr className="extremos" />
          <div className="capacidadRefineria">
            <p className="asideTitle">// CAPACIADAD DE REFINERIA</p>
            <p className="textoCapacidad">LA REFINERIA TIENE ACTUALMENTE UNA CARGA DE TRABAJO EXTREMA, SE AGREGARA UN GRAN RECARGO.</p>
          </div>
          <Hr />
          <div className="porcentajeCapacidad">
            <p>CAPACIDAD ACTUAL</p>
            <p className="valorCapacidad">115273%</p>
          </div>
          <SVG />
          <Hr />
          <div className="cabezeraAsaid">
            <p className="perfil">USUARIO - DETALLES</p>
            <p className="asideTitle">// SELECCIÓN DE MATERIALES</p>
          </div>
          <div className="btnContainer">
            <button className="btn-configurar"> CONFIGURAR ORDEN DE REFINADO</button>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Asaid;
