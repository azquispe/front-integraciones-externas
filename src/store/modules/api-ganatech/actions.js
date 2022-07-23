import Vue from 'vue'
//import * as  https from 'https' 

var axios = require("axios");

const axiosInstance = axios.create({
    headers: {
        "Content-Type":"application/json"
    }
});

let url = "https://api.bg.com.bo/openapi-stage/v1";
//let url = "  http://localhost:8080/openapi-stage/v1";



export const autenticacion = ({ commit }) => {
    return new Promise((resolve, reject) => {
        axiosInstance.post(url + "/auth",
            {
                data: {
                    client_key: "$2a$10$Ft6UCTo6ovMcGD/d5uJF.eq3uTqeiU0V.VRtHpWRjceNKHw9o01CO",
                    access_code: "Ganaseguros"
                },
                risk: {}

            },
            { useCredentails: true }
            ).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}
export const consultaSegip = ({ commit }, objParam) => {
    return new Promise((resolve, reject) => {

        axiosInstance.post(url + "/accounts/validations/segip",
            {
                data: {
                    ci: "9133040",
                    documentCity: "",
                    birthdate: "22/06/1988"
                }
            }).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}


