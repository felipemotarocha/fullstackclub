const fs = require("fs");
const path = require("path");

// Criar uma pasta em um diretório
fs.mkdir(path.join(__dirname, "new-folder"), (error) => {});

// Criar um arquivo nessa nova pasta
fs.writeFile(path.join(__dirname, "new-folder", "new-file.txt"), "Hello from FSC!", (error) => {});

// Adicionar conteúdo a um arquivo
fs.appendFile(path.join(__dirname, "new-folder", "new-file.txt"), "\nHello World!", (error) => {});

let fileContent = "hello";

// Ler um arquivo
fs.readFile(path.join(__dirname, "new-folder", "new-file.txt"), "utf-8", (error, data) => {
  fileContent = data;

  console.log("Conteúdo do arquivo:", fileContent);
});
