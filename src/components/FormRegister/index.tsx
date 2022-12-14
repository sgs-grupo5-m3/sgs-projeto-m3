import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../InputRegister";
import api from "../../services/api";

import { RegisterContext } from "../../contexts/RegisterProvider";

import { Form, DivGeneral, Back, ButtonSend } from "./styles";

interface ISpecialties {
  doctor: object[];
  id: string;
  name: string;
}

const FormRegister = () => {
  const { errors, handleSubmit, register, registerUser, reset } =
    useContext(RegisterContext);

  const Navigate = useNavigate();

  const [verification, setVerification] = useState<string>(
    "paciente" as string
  );
  const [specialties, setSpecialties] = useState<ISpecialties[]>(
    [] as ISpecialties[]
  );

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    api
      .get("/doctor/specialties")
      .then((res) => {
        setSpecialties(res.data.specialties);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [verification]);

  return (
    <>
      <Form onSubmit={handleSubmit(registerUser)}>
        <h1>Cadastro de Usuário</h1>
        <DivGeneral>
          <Input
            label={"Nome"}
            register={register}
            id={"name"}
            error={errors?.name}
            placeholder={"Digite seu Nome"}
            type={"text"}
          />
           <Input
            label={"Data de Nascimento"}
            register={register}
            id={"birth_date"}
            error={errors?.birth_date}
            placeholder={"Digite sua data de nascimento"}
            type={"text"}
          />
          <Input
            label={"CPF"}
            register={register}
            id={"cpf"}
            error={errors?.cpf}
            placeholder={"Digite seu CPF"}
            type={"text"}
          />
          <Input
            label={"E-mail"}
            register={register}
            id={"email"}
            error={errors?.email}
            placeholder={"Digite seu E-mail"}
            type={"text"}
          />
          <Input
            label={"Senha"}
            register={register}
            id={"password"}
            error={errors?.password}
            placeholder={"Digite sua senha"}
            type={"password"}
          />
          <Input
            label={"Confirmar Senha"}
            register={register}
            id={"confirmPassword"}
            error={errors?.confirmPassword}
            placeholder={"Confirme sua senha"}
            type={"password"}
          />
          {verification === "paciente" ? (
            <></>
          ) : (
            <>
              <Input
                label={"CRM"}
                register={register}
                id={"crm"}
                error={errors?.confirmPassword}
                placeholder={"Confirme sua senha"}
                type={"text"}
              />
              <label>Especialidades</label>
              <select {...register("specialtie")}>
                {specialties.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </>
          )}
          <label>Tipo</label>
          <select
            {...register("type")}
            onChange={(event) => setVerification(event.target.value)}
          >
            <option value="paciente">Paciente</option>
            <option value="enfermeiro">Enfermeiro</option>
          </select>
        </DivGeneral>
        <ButtonSend type="submit">Cadastrar</ButtonSend>
        <Back onClick={() => Navigate("/", { replace: true })}>Voltar</Back>
      </Form>
    </>
  );
};

export default FormRegister;
