const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const Tabelas = require("./infraestrutura/tabelas");

conexao.connect((error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Conectado com sucesso");

  Tabelas.init(conexao);

  const app = customExpress();

  app.listen(5001, () => console.log("listening in 5001"));
});
