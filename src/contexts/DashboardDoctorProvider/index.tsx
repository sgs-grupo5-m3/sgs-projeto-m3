import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

interface IDashboardDoctorProvider {
  children: ReactNode;
}

interface IHistoric {
  name: string;
  description: string;
}

interface IUser {
  cpf: string;
  email: string;
  id: number;
  name: string;
  password: string;
  type: string;
  alergias?: IHistoric[];
  doencas?: IHistoric[];
  remedios?: IHistoric[];
  exames?: IHistoric[];
}

interface IDashboardDoctorContext {
  searchPatient: (cpf: string) => void;
  cpf: string;
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
  userSearch: IUser | null;
}

export const DashboardDoctorContext = createContext(
  {} as IDashboardDoctorContext
);

const DashboardDoctorProvider = ({ children }: IDashboardDoctorProvider) => {
  const [cpf, setCpf] = useState("");
  const [userSearch, setUserSearch] = useState(null);

  const Navigate = useNavigate();

  const searchPatient = (cpf: string) => {
    const token = localStorage.getItem("@sgs:token");

    api
      .get(`/doctor/patient/${cpf}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.patient);
        setUserSearch({
          ...res.data.patient,
          alergias: res.data.patient.allergy,
          doencas: res.data.patient.disease,
          exames: res.data.patient.exam,
          remedios: res.data.patient.medicines,
        });

        if (res.data.patient.isDoctor === false) {
          Navigate("/dashboard/doctor/patient", { replace: true });
        } else {
          toast.error("CPF não encontrado");
          Navigate("/dashboard/doctor", { replace: true });
        }
      })
      .catch(() => {
        toast.error("Ops, algo deu errado :(");
      });

    setCpf("");
  };

  const logout = () => {
    Navigate("/", { replace: true });
    localStorage.clear();
  };

  return (
    <DashboardDoctorContext.Provider
      value={{ searchPatient, cpf, setCpf, logout, userSearch }}
    >
      {children}
    </DashboardDoctorContext.Provider>
  );
};

export default DashboardDoctorProvider;
