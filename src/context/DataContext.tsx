import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { axiosData } from "../services/DataService";

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  inicio: string;
  final: string;
  setInicio: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
};

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: string;
  parcelas: number | null;
};

export const DataContext = createContext<IDataContext | null>(null);

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(14));
  const [final, setFinal] = useState(getDate(0));
  const [data, setData] = useState<IVenda[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromService = async () => {
      setLoading(true);
      try {
        const result = await axiosData(inicio, final);
        setData(result);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setError("Ocorreu um erro ao buscar os dados. Tente novamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromService();
  }, [inicio, final]);

  return (
    <DataContext.Provider
      value={{ data, loading, inicio, setInicio, final, setFinal }}
    >
      {children}
      {error && <p>{error}</p>}
    </DataContext.Provider>
  );
};
