import axios from "axios";

/*
    devemos passar um objeto para a função create que serão as configs do
    nosso axios. Podemos definir a seguinte propriedade:
    => baseURL: é o endereço base onde nosso servidor ficará rodando.
*/ 
export const api = axios.create({
    baseURL: "https://rocketnotes-api-6xwu.onrender.com"
})