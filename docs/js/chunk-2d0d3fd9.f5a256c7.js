(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3fd9"],{"5eb5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("validaListasNegrasComponent")},s=[],o=a("b85c"),n=a("1da1"),c=a("5530"),i=(a("96cf"),a("498a"),a("2f62")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"ma-5",attrs:{elevation:"4"}},[a("v-toolbar",{attrs:{dense:"",flat:""}},[a("v-toolbar-title",[a("span",{staticClass:"verde_53A808--text"},[e._v(" VALIDA LISTAS NEGRAS DE UNA PERSONA")])])],1),a("div",{staticClass:"pa-5"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-text-field",{attrs:{outlined:"",dense:"",label:"Nombre Completo","hide-details":"",clearable:""},model:{value:e.vNombreCompleto,callback:function(t){e.vNombreCompleto=t},expression:"vNombreCompleto"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[a("v-chip",{staticClass:"ma-2",attrs:{color:"primary","text-color":"white"},on:{click:function(t){return e.clickVerificarListaNegra()}}},[e._v(" Verificar ")])],1)],1),""!=e.vRespuesta&&0==e.vResultadoEjecucion?a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-alert",{attrs:{dense:"",text:"",type:"success"}},[e._v(" "+e._s(e.vRespuesta)+" ")])],1)],1):e._e(),""!=e.vRespuesta&&-1===e.vResultadoEjecucion?a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-alert",{attrs:{dense:"",text:"",type:"error"}},[e._v(" "+e._s(e.vRespuesta)+" ")])],1)],1):e._e(),""!=e.vRespuesta&&e.vResultadoEjecucion>0?a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-alert",{attrs:{dense:"",text:"",type:"warning"}},[e._v(" "+e._s(e.vRespuesta)+" ")])],1)],1):e._e()],1)],1)],1)},u=[],d={data:function(){return{vNombreCompleto:"",vRespuesta:"",vResultadoEjecucion:0}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(i["b"])("api_banco",["verificarListaNegra"])),Object(i["d"])("utils",["setDialogProgress"])),{},{clickVerificarListaNegra:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.vRespuesta="",""!==e.vNombreCompleto.trim()){t.next=5;break}return e.$notify({title:"Mensaje",text:"Nombre completo es requerido",duration:2e3,type:"error"}),t.abrupt("return");case 5:return e.setDialogProgress({mostrar:!0,sms:"Verificando Listas Negras, espere..."}),t.next=8,e.verificarListaNegra(e.vNombreCompleto);case 8:a=t.sent,e.vRespuesta=a.data.mensajeEjecucion,e.vResultadoEjecucion=a.data.resultadoEjecucion,a.data.resultadoEjecucion>0||a.data.resultadoEjecucion<0?e.$notify({title:"Mensaje",text:a.data.mensajeEjecucion,duration:2e3,type:"error"}):e.$notify({title:"Mensaje",text:a.data.mensajeEjecucion,duration:2e3,type:"success"}),e.setDialogProgress({mostrar:!1,sms:""}),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),e.$notify({title:"Mensaje",text:t.t0,duration:2e3,type:"error"});case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}})},v=d,p=a("2877"),b=a("6544"),m=a.n(b),f=a("0798"),j=a("b0af"),x=a("cc20"),g=a("62ad"),R=a("0fd9"),h=a("8654"),w=a("71d9"),_=a("2a7f"),N=Object(p["a"])(v,l,u,!1,null,null,null),O=N.exports;m()(N,{VAlert:f["a"],VCard:j["a"],VChip:x["a"],VCol:g["a"],VRow:R["a"],VTextField:h["a"],VToolbar:w["a"],VToolbarTitle:_["a"]});var k={components:{validaListasNegrasComponent:O},data:function(){return{}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(i["b"])("api_banco",["obtenerDatosFinancieros","obtenerDatosPersona"])),Object(i["d"])("api_banco",["setDatosPersonas"])),{},{clickObtenerDatosFinancieros:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.obtenerDatosFinancieros(e.nroSolicitud);case 2:a=t.sent,console.log("dsdsd: "+a.data.deudores),r=[],s=Object(o["a"])(a.data.deudores),t.prev=6,s.s();case 8:if((n=s.n()).done){t.next=18;break}if(c=n.value,console.log(c),""==c.extensionIdentificacion.trim()){t.next=16;break}return t.next=14,e.obtenerDatosPersona({tipoDocumento:c.tipoIdentificacion,extension:c.extensionIdentificacion,numeroDocumento:c.numerodeIdentifiacion});case 14:i=t.sent,r.push(i.data);case 16:t.next=8;break;case 18:t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](6),s.e(t.t0);case 23:return t.prev=23,s.f(),t.finish(23);case 26:e.setDatosPersonas(r);case 28:case"end":return t.stop()}}),t,null,[[6,20,23,26]])})))()}})},C=k,E=Object(p["a"])(C,r,s,!1,null,null,null);t["default"]=E.exports}}]);
//# sourceMappingURL=chunk-2d0d3fd9.f5a256c7.js.map