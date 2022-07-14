import Vue from 'vue'
let url = "http://172.16.1.155:8000/ganaseguros";
    //let url = "https://msganaseguros.dev.bg.com.bo/ganaseguros";
export const obtenerDatosFinancieros = ({commit},pNroSolicitud)=>{
    return new Promise ((resolve,reject)=>{
        
        Vue.axios.get(url+"/v1/datos-financieros/obtener?numerosolicitud="+pNroSolicitud,{
            auth: {
                username: "TOP1",
                password: "SYSTEMS1",
              },
              headers: {
                "Topaz-User": "TOP1",
                "Topaz-Branch": "701",
                "Topaz-Company": "1",
                "Topaz-Channel": "1",
              },
        }).then(r=>{
            commit('setDatosFinancieros', r.data);
            resolve(r);
        })
    })
}
export const obtenerDatosPersona = ({commit},objParam)=>{
    return new Promise ((resolve,reject)=>{
        
        Vue.axios.get(url+"/v1/datos-persona/obtener?tipoDocumento="+objParam.tipoDocumento+
        "&extension="+objParam.extension+"&numeroDocumento="+objParam.numeroDocumento,{
            auth: {
                username: "TOP1",
                password: "SYSTEMS1",
              },
              headers: {
                "Topaz-User": "TOP1",
                "Topaz-Branch": "701",
                "Topaz-Company": "1",
                "Topaz-Channel": "1",
              },
        }).then(r=>{
            resolve(r);
        })
    })
}