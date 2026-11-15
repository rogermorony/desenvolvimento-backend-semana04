import mongoose from "mongoose";

const conexao = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "semana04"
});

console.log("Conectado ao MongoDB!");

export default conexao;