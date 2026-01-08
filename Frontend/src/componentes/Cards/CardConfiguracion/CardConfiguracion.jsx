import Dropdown from "../../DropDown/DropDown";
import Hr from "../../Hr/Hr";
import "./CardConfiguracion.css";
import lingoteDePlata from "./../../../assets/lingote-de-plata.png";

function CardConfiguracion() {
  return (
    <>
      <div className="borde-precision">
        <div className="p1"></div>
        <div className="p2"></div>

        <div className="headerCard">
          <div className="bar-box-card"></div>
          <p>CONFIGURACION</p>
        </div>
        <div className="workOrder">
          <p>ORDEN DE TRABAJO</p>
          <p>0</p>
        </div>
        <Hr />
        <div className="numOrder">
          <p className="cardTitle">// MATERIAS PRIMAS</p>
          <p>01</p>
        </div>
        <div className="cantidades">
          <div className="manifiesto">
            <p className="cantidadesText">// EN MANIFIESTO</p>
            <p className="center">1700</p>
          </div>
          <div className="paraRefinar">
            <p className="cantidadesText">// PARA REFINAR</p>
            <p className="center">0</p>
          </div>
        </div>
        <Hr />
        <div className="numOrder">
          <p className="cardTitle">// SELECCIÓN DE PROCESAMIENTO, RENDIMIENTO Y COSTOS</p>
          <p>02</p>
        </div>
        <Dropdown />
        <p className="textCenter">ALTA VELOCIDAD // COSTO MODERADO // BAJO RENDIMIENTO</p>

        <div className="materialsSelectedSection">
          <div className="materialsSelectedHeader">
            <span>MATERIALS SELECTED</span>
            <span className="textCenter">QTY</span>
            <span className="textCenter">YIELD</span>
            <span className="textCenter">REFINE</span>
          </div>

          {/* LISTA DE MATERIALES */}
          <div className="materialsList">
            <div className="materialRow">
              <div className="materialName">
                <img src={lingoteDePlata} alt="" />
                Quartz (Raw)
              </div>
              <div className="materialQty">30</div>
              <div className="materialYield">- -</div>
              <div className="materialRefine">
                <div className="checkbox-apple">
                  <input type="checkbox" id="refine-1" />
                  <label htmlFor="refine-1"></label>
                </div>
              </div>
            </div>

            <hr />

            <div className="materialRow">
              <div className="materialName">
                <img src={lingoteDePlata} alt="" />
                Quantainium (Raw)
              </div>
              <div className="materialQty">3169</div>
              <div className="materialYield">- -</div>
              <div className="materialRefine">
                <div className="checkbox-apple">
                  <input type="checkbox" id="refine-2" />
                  <label htmlFor="refine-2"></label>
                </div>
              </div>
            </div>

            <hr />

            <div className="materialRow">
              <div className="materialName">
                <img src={lingoteDePlata} alt="" />
                Inert Materials
              </div>
              <div className="materialQty">1</div>
              <div className="materialYield">0</div>
              <div className="materialRefine">
                <div className="checkbox-apple">
                  <input type="checkbox" id="refine-3" />
                  <label htmlFor="refine-3"></label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE INFERIOR PEGADO AL FONDO */}
        <div className="cardBottom">

          <div className="totalCost">
            <span>TOTAL COST</span>
            <span>- - aUEC</span>
          </div>

          <div className="processingLine">
            <span>// PROCESSING</span>
            <span>03</span>
          </div>

          <div className="processingTime">
            <span>PROCESSING TIME</span>
            <span>- -</span>
          </div>

          <div className="cardActions">
            <button className="btnCancel">CANCEL</button>
            <button className="btnPrimary">GET QUOTE</button>
          </div>

        </div>


      </div>
    </>
  );
}

export default CardConfiguracion;