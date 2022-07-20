export const setDatosFinancieros = (state, lstDatosFinancieros) => {
    state.lstDatosFinancieros = lstDatosFinancieros;
}
export const setDatosPersonas = (state, lstDatosPersonas) => {
    state.lstDatosPersonas = lstDatosPersonas;
}

export const setDialogProgress= (state, objDialog)=>{
    state.dialogProgress.sms=objDialog.sms;
    state.dialogProgress.mostrar=objDialog.mostrar;
}


