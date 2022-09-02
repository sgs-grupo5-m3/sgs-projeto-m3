import Image2 from "../../assets/FundoClaro.png";
import { Aside } from "./style";
import { GiExitDoor } from "react-icons/gi";

export const MenuAsidePacient = () => {
  return (
    <Aside Image={Image2}>
      <div className="div-logo">
        <img
          src={require("../../assets/LogoSGS.png")}
          alt=""
          className="logo"
        />
        <h2>S.G.S</h2>
      </div>
      <div className="div-central">
        <p className="p-alergias">Alergias</p>
        <p>Doenças</p>
        <p>Exames</p>
        <p>Remédios</p>
      </div>
      <div className="div-exit">
        <span>*Nome*</span>
        <button className="footer__button">
          <GiExitDoor />
          Sair
        </button>
      </div>
    </Aside>
  );
};