import RegisterUpdate from "@/components/Form/RegisterUpdate";

const getRegisterByID = async (id) => {
  try {
    const response = await fetch(`${process.env.HOST}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Falha ao obter dados!");
    }
    return response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    return console.error("Erro:", error);
  }
};

const Table = async ({ params }) => {
  const { id } = params;
  const register = await getRegisterByID(id);

  return <RegisterUpdate register={register} />;
};

export default Table;
