import "./Asaid.css";
import lingote from "../../../assets/lingote-de-plata.png";

function Asaid() {
  return (
    <>
      <aside>
        <div className="asaidContainer">
          <div className="cabezeraAsaid">
            <p className="perfilEstacion">ESTACIÓN - PERFIL</p>
            <p className="asideTitle">// ESPECIALIZACIONES DE MATERIALES</p>
          </div>
          <div className="tituloLista">
            <p>MATERIAL</p>
            <p>PRODUCCIÓN</p>
          </div>
          <div className="listaMateriales">
            <ul>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Hierro (Mineral)</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li>Material 2</li>
              <li>Material 3</li>
              <li>Material 4</li>
              <li>Material 5</li>
              <li>Material 6</li>
              <li>Material 7</li>
              <li>Material 8</li>
              <li>Material 9</li>
              <li>Material 10</li>
            </ul>
          </div>
          <div className="capacidadRefineria">
            <p className="asideTitle">// CAPACIADAD DE REFINERIA</p>
            <p className="textoCapacidad">LA REFINERIA TIENE ACTUALMENTE UNA CARGA DE TRABAJO EXTREMA, SE AGREGARA UN GRAN RECARGO.</p>
          </div>
        </div>
      </aside>
    </>
  );
}
export default Asaid;
