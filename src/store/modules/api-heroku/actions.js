var axios = require("axios");

const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json"
    }
});

let url = "https://api-integraciones-externas.azurewebsites.net";


export const consultaSegip = ({ commit }, objParam) => {
    return new Promise((resolve, reject) => {

        axiosInstance.post(url + "/api/ganatech/v1/consulta-segip", objParam).then(r => {
            resolve(r);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}


