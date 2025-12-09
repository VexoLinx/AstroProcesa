import "./Asaid.css";
import lingote from "../../../assets/lingote-de-plata.png";

function Asaid() {
  return (
    <>
      <hr className="extremos" />
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
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Escombros</p>
                </div>
                <div>
                  <p>+9%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Bexalite (Crudo)</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Torite (Mineral)</p>
                </div>
                <div>
                  <p>+1%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Corundum (Crudo)</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Quantanium</p>
                </div>
                <div>
                  <p>+5%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Tungsteno</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Titanio</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Taranite</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Savrilium</p>
                </div>
                <div>
                  <p>+1%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Quartz</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Lindinium</p>
                </div>
                <div>
                  <p>+4%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Laranite</p>
                </div>
                <div>
                  <p>+7%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Hephaestanite</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Cobre</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Oro</p>
                </div>
                <div>
                  <p>+5%</p>
                </div>
              </li>
              <li className="rowLista">
                <div className="imgNombreMaterial">
                  <img src={lingote} alt="" />
                  <p>Borase</p>
                </div>
                <div>
                  <p>+8%</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="capacidadRefineria">
            <p className="asideTitle">// CAPACIADAD DE REFINERIA</p>
            <p className="textoCapacidad">LA REFINERIA TIENE ACTUALMENTE UNA CARGA DE TRABAJO EXTREMA, SE AGREGARA UN GRAN RECARGO.</p>
          </div>
          <hr className="extremos" />
          <div className="porcentajeCapacidad">
            <p>CAPACIDAD ACTUAL</p>
            <p className="valorCapacidad">115273%</p>
          </div>
          <div className="spectrum" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 80" preserveAspectRatio="none">
              <rect x="0" y="60" width="4" height="20" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect x="20" y="71" width="4" height="9" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect x="40" y="39" width="4" height="41" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="60" y="10" width="4" height="70" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="80" y="46" width="4" height="34" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="100" y="54" width="4" height="26" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect x="120" y="22" width="4" height="58" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="140" y="68" width="4" height="12" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect x="160" y="20" width="4" height="60" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="180" y="72" width="4" height="8" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="200" y="30" width="4" height="50" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect x="220" y="50" width="4" height="30" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="240" y="15" width="4" height="65" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="260" y="58" width="4" height="22" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect x="280" y="40" width="4" height="40" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="300" y="62" width="4" height="18" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="320" y="34" width="4" height="46" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="340" y="8" width="4" height="72" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect x="360" y="66" width="4" height="14" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="380" y="56" width="4" height="24" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="400" y="28" width="4" height="52" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="420" y="44" width="4" height="36" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="440" y="36" width="4" height="44" rx="1.5" fill="#bfc5c8" fill-opacity="0.95" />
              <rect x="460" y="8" width="4" height="72" rx="1.5" fill="#d9534f" fill-opacity="0.98" />
              <rect width="100%" height="100%" fill="url(#none)" opacity="0.06" />
            </svg>
          </div>
          <hr className="extremos" />
          <div className="cabezeraAsaid">
            <p className="perfil">USUARIO - PERFIL</p>
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
