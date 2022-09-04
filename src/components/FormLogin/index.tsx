import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { RegisterContext } from "../../contexts/RegisterProvider";
import Input from "../InputRegister";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Back, ButtonSend, DivGeneral, Form } from "./styles";
import { schema } from "../../validator";

interface IFormInputs {
  email: string;
  password: number;
}

const FormLogin = () => {
  const { signIn } = useContext(RegisterContext);

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Form onSubmit={handleSubmit(signIn)}>
        <h1>Entrar</h1>
        <DivGeneral>
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
        </DivGeneral>
        <ButtonSend type="submit">Entrar</ButtonSend>
        <div>
          <p>
            Ainda não tem conta?
            <Back onClick={() => Navigate("/register", { replace: true })}>
              Cadastre-se
            </Back>
          </p>
        </div>
      </Form>
    </>
  );
};

export default FormLogin;
