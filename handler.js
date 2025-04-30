exports.handler = async (event) => {
  console.log("🚀 Lambda executada com sucesso!");
  console.log("🔍 Evento recebido:", JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Olá do Lambda!" }),
  };
};
