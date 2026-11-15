import express from "express";
import Instrumento from "./models/Instrumento.js";

const app = express();
const PORT = 3000;

// Configuração do Express e EJS
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Página inicial
app.get("/", (req, res) => {
    res.redirect("/instrumento/lst");
});

// Rota para listar instrumentos
app.get("/instrumento/lst", async (req, res) => {
    const instrumentos = await Instrumento.find();
    res.render("instrumento/lst", { instrumentos });
});

app.get("/instrumento/add", (req, res) => {
    res.render("instrumento/add");
});

app.post("/instrumento/add/ok", async (req, res) => {
    try {
        const { nome, fabricante, preco, tipo } = req.body;

        await Instrumento.create({
            nome,
            fabricante,
            preco,
            tipo
        });

        res.render("instrumento/addok", { nome });
    } catch (erro) {
        res.send("Erro ao cadastrar instrumento: " + erro.message);
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});