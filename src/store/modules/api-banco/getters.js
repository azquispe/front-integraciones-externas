export const getDatosFinancieros = (state) => {
    let lstDatosFinancieros=[];
    lstDatosFinancieros.push(state.objDatosFinancieros);
    
    return lstDatosFinancieros; 
}
export const getDatosPersonas = (state) => {

    return state.lstDatosPersonas;
}