import Vue from 'vue'
//import * as  https from 'https' 

var axios = require("axios");

const axiosInstance = axios.create({
    auth: {
        username: "TOP1",
        password: "SYSTEMS1",
    },
    headers: {

        /*"Topaz-User": "TOP1",
        "Topaz-Branch": "701",
        "Topaz-Company": "1",
        "Topaz-Channel": "1",*/

    }
});


//let url = "http://172.16.1.155:8000/ganaseguros";
//let url = "  http://localhost:8080/ganaseguros";
//let url = "https://integraciones-ganaseguros.herokuapp.com/ganaseguros";
let url = "https://msganaseguros.dev.bg.com.bo/ganaseguros";
//let url = "http://192.168.27.232:5000";  // url de maquina local de cristhian


export const obtenerDatosFinancieros = ({ commit }, pNroSolicitud) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(url + "/v1/datos-financieros/obtener",
            {
                params: {
                    numerosolicitud: pNroSolicitud

                }
            }).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}
export const obtenerDatosPersona = ({ commit }, objParam) => {
    return new Promise((resolve, reject) => {

        axiosInstance.get(url + "/v1/datos-persona/obtener",
            {
                params: {
                    tipoDocumento: objParam.tipoDocumento,
                    extension: objParam.extension,
                    numeroDocumento: objParam.numeroDocumento,
                    extDuplicado:objParam.extDuplicado  

                }
            }).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}





export const obtenerCumuloOld = ({ commit }, objParam) => {
    return new Promise((resolve, reject) => {

        axiosInstance.get(url + "/v1/datos-cumulo/obtener",
            {
                params: {
                    tipoDocumento: objParam.tipoDocumento,
                    extension: objParam.extension,
                    numeroDocumento: objParam.numeroDocumento,
                    extDuplicado:objParam.extDuplicado  ,
                    tipoproducto: objParam.tipoproducto,
                    jts: objParam.jts,
                    tipooperacion: objParam.tipooperacion,
                    codmoneda:objParam.codmoneda
                }
            }).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}

export const obtenerCumulo = ({ commit }, objParam) => {
    return new Promise((resolve, reject) => {

        axiosInstance.get(url + "/v1/datos-cumulo/obtener",
            {
                params: {
                    tipoDocumento: objParam.tipoDocumento,
                    extension: objParam.extension,
                    numeroDocumento: objParam.numeroDocumento,
                    extDuplicado:objParam.extDuplicado  ,
                    tipoproducto: objParam.tipoproducto,
                    nroOperacionCancelar: objParam.nroOperacionCancelar,
                    tipooperacion: objParam.tipooperacion,
                    codmoneda:objParam.codmoneda
                }
            }).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}

export const verificarListaNegra = ({ commit }, vNombreCompleto) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(url + "/v1/uif/validalistanegra?nombreCompleto=" + vNombreCompleto).then(r => {
            resolve(r);
        }).catch((err) => {
            resolve(err.response);
        })
    })
}
export const pruebaSsl = ({ commit }, vNombreCompleto) => {
    return new Promise((resolve, reject) => {

        axiosInstance.get("https://springboot-firmador-heroku-v2.herokuapp.com/api/firma/v1/prueba").then(r => {
            resolve(r);
        })
    })
}

export const obtieneDatosCuenta = ({ commit }, objParam) => {
    return new Promise((resolve, reject) => {

        axiosInstance.get(url + "/v1/datos-cuenta/obtener", {
            params: {
                tipoDocumento: objParam.tipoDocumento,
                extension: objParam.extension,
                numeroDocumento: objParam.numeroDocumento,
                extDuplicado:objParam.extDuplicado  
            }
        }).then(r => {

            // temporal
            /*let lst=[];
            let perro = r.data;
            let claves = Object.keys(perro); 
            for(let i=0; i< claves.length; i++){
            let clave = claves[i];
                lst.push(perro[clave])
            }
            resolve({data:lst})*/


            //oficial
            resolve(r);
        }).catch((err) => {
            resolve(err.response);
        })

    })
}

export const obtenerDatosLinea = ({ commit }, pNroSolicitud) => {
    return new Promise((resolve, reject) => {
        axiosInstance.get(url + "/v1/datos-linea/obtener",
            {
                params: {
                    numerosolicitud: pNroSolicitud
                }
            }).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}
