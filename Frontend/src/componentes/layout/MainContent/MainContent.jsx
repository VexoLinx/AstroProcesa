import Asaid from "../Asaid/Asaid";
import "./MainContent.css";
import Hr from "../../Hr/Hr";
import CardConfiguracion from "../../Cards/CardConfiguracion/CardConfiguracion";

function MainContent() {
  return (
    <>
      <Hr />
      <main className="main">
        <Asaid />
        <CardConfiguracion />
      </main>
    </>
  );
}
export default MainContent;
