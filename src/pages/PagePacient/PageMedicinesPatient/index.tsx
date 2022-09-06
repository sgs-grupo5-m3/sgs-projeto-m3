import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useContext } from "react";

export const PageMedicinesPacient = () => {
  const { Medicines } = useContext(ModalContext);
  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          modalSent={Medicines}
          nameButton={"Informar Remédio"}
          title={"Informar Remédio"}
          labelName={"Remédio"}
          placeholderName={"Insira o remédio"}
          description={"Descrição"}
          placeholderDescription={"Descreva a situação"}
          sendButton={"Salvar Remédio"}
        />
        <button>Hisórico de Remédios</button>
      </DivButton>
    </ContentPagePacient>
  );
};