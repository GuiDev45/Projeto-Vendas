import axios from "axios";

export const axiosData = async (inicio: string, final: string) => {
  try {
    const response = await axios.get(
      `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw error; // Você pode optar por relançar o erro para que o chamador possa lidar com isso, se necessário.
  }
};
