import Vue from 'vue'
export const obtenerDatosFinancieros = ({commit},pNroSolicitud)=>{
    return new Promise ((resolve,reject)=>{
        
        //const url =  "http://172.16.1.155:8000/ganaseguros/v1/datos-financieros/obtener?numerosolicitud="+pNroSolicitud;
        const url =  "https://msganaseguros.dev.bg.com.bo/ganaseguros/v1/datos-financieros/obtener?numerosolicitud="+pNroSolicitud;
        Vue.axios.get(url,{
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