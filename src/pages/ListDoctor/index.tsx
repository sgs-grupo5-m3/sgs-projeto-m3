import ContentDashboardDoctor from "../../components/ContentDashboardDoctor";

import Profile from "../../assets/ProfileTest.svg";

import { Form, MainDashboard } from "./styles";

const ListDoctor = () => {
  return (
    <ContentDashboardDoctor>
      <Form className="content__main__form">
        <input
          className="form__input"
          type="text"
          placeholder="Insira o cpf do paciente"
        />
        <button className="form__button">Buscar</button>
      </Form>
      <MainDashboard className="main__dashboard">
        <div className="dashboard__container--profile">
          <figure className="container__containerImg">
            <img className="containerImg__img" src={Profile} alt="" />
          </figure>
          <h1 className="container__name">Joãzin da Silva</h1>
        </div>
        <ul className="dashboard__historic">
          <li className="historic__type">Alergias</li>
          <li className="historic__type">Doenças</li>
          <li className="historic__type">Exames</li>
          <li className="historic__type">Remédios</li>
        </ul>
      </MainDashboard>
    </ContentDashboardDoctor>
  );
};

export default ListDoctor;