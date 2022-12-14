import Vue from 'vue'
//import * as  https from 'https' 

var axios = require("axios");




//let url = "http://192.168.100.22:8001/api";
let url = "https://api-movil-web.azurewebsites.net/";


export const registrarAviso = ({ commit }, obj) => {
    return new Promise((resolve, reject) => {
        axios.post(url + "/app-web/v1/registrar-aviso",obj).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}
export const registrarOferta = ({ commit }, obj) => {
    return new Promise((resolve, reject) => {
        axios.post(url + "/app-web/v1/registrar-ofertas",obj).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}
export const obtenerOfertasTodos = ({ commit }, ) => {
    return new Promise((resolve, reject) => {
        axios.get(url + "/app-web/v1/obtener-ofertas-todos").then(r => {
            console.log("obteniendo ofertas")
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}
export const obtenerAvisosTodos = ({ commit }, ) => {
    return new Promise((resolve, reject) => {
        axios.get(url + "/app-web/v1/obtener-avisos-todos").then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}

export const eliminarOferta= ({ commit }, id) => {
    return new Promise((resolve, reject) => {
        axios.delete(url + "/app-web/v1/eliminar-ofertas/"+id).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}

export const eliminarAviso = ({ commit }, id) => {
    return new Promise((resolve, reject) => {
        axios.delete(url + "/app-web/v1/eliminar-aviso/"+id).then(r => {
                resolve(r);
            }).catch((err) => {
                resolve(err.response);
            })
    })
}



