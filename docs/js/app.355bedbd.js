(function(e){function t(t){for(var o,a,s=t[0],c=t[1],u=t[2],p=0,l=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-4dc024d7":"ed2d8bd8","chunk-27abd509":"d4bcdd62","chunk-043a5da4":"bcf911cb","chunk-1c285413":"e926bf8d","chunk-6608a98e":"642477ef","chunk-9d5b0044":"b2f4e8e5","chunk-ec450f5e":"2a28fc25","chunk-2d0d3fd9":"f5a256c7","chunk-3245db41":"87069ae6","chunk-81552422":"cacdf25a"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4dc024d7":1,"chunk-27abd509":1,"chunk-043a5da4":1,"chunk-1c285413":1,"chunk-6608a98e":1,"chunk-9d5b0044":1,"chunk-ec450f5e":1,"chunk-3245db41":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-4dc024d7":"037c557d","chunk-27abd509":"8ebfa251","chunk-043a5da4":"4c5a29c7","chunk-1c285413":"4c5a29c7","chunk-6608a98e":"4c5a29c7","chunk-9d5b0044":"4c5a29c7","chunk-ec450f5e":"2090ba31","chunk-2d0d3fd9":"31d6cfe0","chunk-3245db41":"8ad0bb85","chunk-81552422":"31d6cfe0"}[e]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===o||p===r))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],p=u.getAttribute("data-href");if(p===o||p===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=r[e]=[t,n]}));t.push(o[2]=i);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(e);var l=new Error;u=function(t){p.onerror=p.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var d=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3659:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=n("ee98"),r=n.n(a);o["default"].use(r.a)},"56d7":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"getDatosFinancieros",(function(){return $})),n.d(o,"getDatosPersonas",(function(){return U}));var a={};n.r(a),n.d(a,"setDatosFinancieros",(function(){return G})),n.d(a,"setDatosPersonas",(function(){return q}));var r={};n.r(r),n.d(r,"obtenerDatosFinancieros",(function(){return R})),n.d(r,"obtenerDatosPersona",(function(){return Y})),n.d(r,"obtenerCumulo",(function(){return z})),n.d(r,"verificarListaNegra",(function(){return Q})),n.d(r,"pruebaSsl",(function(){return W})),n.d(r,"obtieneDatosCuenta",(function(){return X})),n.d(r,"obtenerDatosLinea",(function(){return Z}));var i={};n.r(i),n.d(i,"consultaSegip",(function(){return se}));var s={};n.r(s),n.d(s,"getDialogProgress",(function(){return pe}));var c={};n.r(c),n.d(c,"setDialogProgress",(function(){return le}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var u=n("2b0e"),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-dialog",{attrs:{persistent:"",width:"300"},model:{value:e.getDialogProgress.mostrar,callback:function(t){e.$set(e.getDialogProgress,"mostrar",t)},expression:"getDialogProgress.mostrar"}},[o("v-card",{attrs:{color:"primary",dark:""}},[o("v-card-text",[e._v(" "+e._s(e.getDialogProgress.sms)+" "),o("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),o("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[o("v-list-group",{attrs:{value:!0,"prepend-icon":"mdi-cloud-outline"},scopedSlots:e._u([{key:"activator",fn:function(){return[o("v-list-item-title",[e._v("Integraciones"),o("br"),e._v(" Banco")])]},proxy:!0}])},[o("v-list-group",{attrs:{value:!0,"no-action":"","sub-group":""},scopedSlots:e._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",[e._v("Consultas Generales")])],1)]},proxy:!0}])},[o("v-list-item",{attrs:{link:"",to:{name:"pruebaApisMultiple"}}},[o("span",{staticClass:"caption",domProps:{textContent:e._s("Consultas Múltiples")}})])],1),o("v-list-group",{attrs:{"no-action":"","sub-group":""},scopedSlots:e._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",[e._v("Consultas Individuales")])],1)]},proxy:!0}])},[o("v-list-item",{attrs:{link:"",to:{name:"pruebaApiDatosPersona"}}},[o("span",{staticClass:"caption",domProps:{textContent:e._s("Datos Persona")}})]),o("v-list-item",{attrs:{link:"",to:{name:"pruebaApiDatosCuenta"}}},[o("span",{staticClass:"caption",domProps:{textContent:e._s("Datos Cuenta")}})]),o("v-list-item",{attrs:{link:"",to:{name:"pruebaApiListaNegra"}}},[o("span",{staticClass:"caption",domProps:{textContent:e._s("Listas Negras")}})]),o("v-list-item",{attrs:{link:"",to:{name:"pruebaApiDatosFinancieros"}}},[o("span",{staticClass:"caption",domProps:{textContent:e._s("Datos Financiero")}})]),o("v-list-item",{attrs:{link:"",to:{name:"pruebaApiCumulo"}}},[o("span",{staticClass:"caption",domProps:{textContent:e._s("Cúmulo")}})]),o("v-list-item",{attrs:{link:"",to:{name:"pruebaApiDatosLinea"}}},[o("span",{staticClass:"caption",domProps:{textContent:e._s("Datos Línea")}})])],1)],1),o("v-list-group",{attrs:{value:!0,"prepend-icon":"mdi-cloud-outline"},scopedSlots:e._u([{key:"activator",fn:function(){return[o("v-list-item-title",[e._v("Integraciones"),o("br"),e._v(" Ganatech")])]},proxy:!0}])},[o("v-list-item",{attrs:{link:"",to:{name:"pruebaApiConsultaSegip"}}},[o("v-list-item-title",{staticClass:"pl-12",domProps:{textContent:e._s("Segip")}})],1)],1)],1)],1),o("notifications",{attrs:{position:"bottom right"}}),o("v-app-bar",{attrs:{dense:"","clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"primary"}},[o("v-app-bar-nav-icon",{attrs:{dark:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),o("div",{staticClass:"d-flex align-center"},[o("img",{attrs:{src:n("9758"),height:"40",width:"200"}})]),o("v-spacer")],1),o("v-main",{staticStyle:{"background-color":"#eceff1"}},[o("router-view")],1)],1)},l=[],d=n("5530"),m=n("2f62"),f={name:"App",data:function(){return{drawer:null}},computed:Object(d["a"])({},Object(m["c"])("utils",["getDialogProgress"])),methods:{}},h=f,b=n("2877"),g=n("6544"),v=n.n(g),k=n("7496"),D=n("40dc"),P=n("5bc1"),y=n("b0af"),C=n("99d9"),_=n("169a"),w=n("8860"),x=n("56b0"),A=n("da13"),F=n("5d23"),S=n("f6c4"),L=n("f774"),j=n("8e36"),O=n("2fa4"),V=Object(b["a"])(h,p,l,!1,null,"4ec22f7d",null),T=V.exports;v()(V,{VApp:k["a"],VAppBar:D["a"],VAppBarNavIcon:P["a"],VCard:y["a"],VCardText:C["a"],VDialog:_["a"],VList:w["a"],VListGroup:x["a"],VListItem:A["a"],VListItemContent:F["a"],VListItemTitle:F["b"],VMain:S["a"],VNavigationDrawer:L["a"],VProgressLinear:j["a"],VSpacer:O["a"]});n("d3b7"),n("3ca3"),n("ddb0");var E=n("8c4f");u["default"].use(E["a"]);var N=[{path:"/prueba-apis-multiple",name:"pruebaApisMultiple",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-27abd509"),n.e("chunk-9d5b0044")]).then(n.bind(null,"696e"))}},{path:"/prueba-api-datos-persona",name:"pruebaApiDatosPersona",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-27abd509"),n.e("chunk-043a5da4")]).then(n.bind(null,"c53c"))}},{path:"/prueba-api-cumulo",name:"pruebaApiCumulo",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-27abd509"),n.e("chunk-1c285413")]).then(n.bind(null,"ce18"))}},{path:"/prueba-api-listanegra",name:"pruebaApiListaNegra",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-2d0d3fd9")]).then(n.bind(null,"5eb5"))}},{path:"/prueba-api-datos-financieros",name:"pruebaApiDatosFinancieros",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-3245db41")]).then(n.bind(null,"520b"))}},{path:"/prueba-api-datos-cuenta",name:"pruebaApiDatosCuenta",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-27abd509"),n.e("chunk-6608a98e")]).then(n.bind(null,"68e2"))}},{path:"/prueba-api-datos-linea",name:"pruebaApiDatosLinea",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-81552422")]).then(n.bind(null,"a011"))}},{path:"/prueba-api-consulta-segip",name:"pruebaApiConsultaSegip",component:function(){return Promise.all([n.e("chunk-4dc024d7"),n.e("chunk-27abd509"),n.e("chunk-ec450f5e")]).then(n.bind(null,"b5ae"))}}],B=new E["a"]({mode:"history",base:"/",routes:N}),M=B,I={lstDatosFinancieros:{},lstDatosPersonas:[]},$=function(e){return e.lstDatosFinancieros},U=function(e){return e.lstDatosPersonas},G=function(e,t){e.lstDatosFinancieros=t},q=function(e,t){e.lstDatosPersonas=t},J=n("bc3a"),H=J.create({auth:{username:"TOP1",password:"SYSTEMS1"},headers:{}}),K="https://msganaseguros.dev.bg.com.bo/ganaseguros",R=function(e,t){e.commit;return new Promise((function(e,n){H.get(K+"/v1/datos-financieros/obtener",{params:{numerosolicitud:t}}).then((function(t){e(t)})).catch((function(t){e(t.response)}))}))},Y=function(e,t){e.commit;return new Promise((function(e,n){H.get(K+"/v1/datos-persona/obtener",{params:{tipoDocumento:t.tipoDocumento,extension:t.extension,numeroDocumento:t.numeroDocumento,extDuplicado:t.extDuplicado}}).then((function(t){e(t)})).catch((function(t){e(t.response)}))}))},z=function(e,t){e.commit;return new Promise((function(e,n){H.get(K+"/v1/datos-cumulo/obtener",{params:{tipoDocumento:t.tipoDocumento,extension:t.extension,numeroDocumento:t.numeroDocumento,extDuplicado:t.extDuplicado,tipoproducto:t.tipoproducto,jts:t.jts,tipooperacion:t.tipooperacion,codmoneda:t.codmoneda}}).then((function(t){e(t)})).catch((function(t){e(t.response)}))}))},Q=function(e,t){e.commit;return new Promise((function(e,n){H.get(K+"/v1/uif/validalistanegra?nombreCompleto="+t).then((function(t){e(t)})).catch((function(t){e(t.response)}))}))},W=function(e,t){e.commit;return new Promise((function(e,t){H.get("https://springboot-firmador-heroku-v2.herokuapp.com/api/firma/v1/prueba").then((function(t){e(t)}))}))},X=function(e,t){e.commit;return new Promise((function(e,n){H.get(K+"/v1/datos-cuenta/obtener",{params:{tipoDocumento:t.tipoDocumento,extension:t.extension,numeroDocumento:t.numeroDocumento,extDuplicado:t.extDuplicado}}).then((function(t){e(t)})).catch((function(t){e(t.response)}))}))},Z=function(e,t){e.commit;return new Promise((function(e,n){H.get(K+"/v1/datos-linea/obtener",{params:{numerosolicitud:t}}).then((function(t){e(t)})).catch((function(t){e(t.response)}))}))},ee={namespaced:!0,state:I,getters:o,mutations:a,actions:r},te={objDatosPersonaSegip:{}},ne=n("d3a4"),oe=n("c9ef"),ae=n("bc3a"),re=ae.create({headers:{"Content-Type":"application/json"}}),ie="https://integraciones-externas.herokuapp.com",se=function(e,t){e.commit;return new Promise((function(e,n){re.post(ie+"/api/ganatech/v1/consulta-segip",t).then((function(t){e(t)})).catch((function(t){e(t.response)}))}))},ce={namespaced:!0,state:te,getters:ne,mutations:oe,actions:i},ue={dialogProgress:{sms:"Procesando espere...",mostrar:!1}},pe=function(e){return e.dialogProgress},le=function(e,t){e.dialogProgress.sms=t.sms,e.dialogProgress.mostrar=t.mostrar},de={namespaced:!0,state:ue,getters:s,mutations:c};u["default"].use(m["a"]);var me=new m["a"].Store({state:{},mutations:{},actions:{},modules:{api_banco:ee,api_heroku:ce,utils:de}}),fe=n("f309");u["default"].use(fe["a"]);var he=new fe["a"]({theme:{themes:{light:{primary:"#6FBF31",secondary:"#B7DF98",accent:"#D4ECC1",blanco:"#FFFFFF",rosa_FFB695:"FFB695",verde_00521A:"00521A",verde_01827D:"#01827D",verde_53A808:"#53A808",plomo_333333:"#333333",plomo_868686:"#868686",plomo_D3D3D3:"D3D3D3",plomo_DFDFDF:"DFDFDF"}}}});n("d435"),n("3659"),u["default"].config.productionTip=!1,new u["default"]({router:M,store:me,vuetify:he,render:function(e){return e(T)}}).$mount("#app")},9758:function(e,t,n){e.exports=n.p+"img/logo_ganaseguros3.c585e0d6.jpg"},c9ef:function(e,t){},d3a4:function(e,t){},d435:function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=n("bc3a"),r=n.n(a),i=n("130e"),s="https://springboot-firmador-heroku.herokuapp.com/api/firma";r.a.defaults.baseURL=s,o["default"].use(i["a"],r.a)}});
//# sourceMappingURL=app.355bedbd.js.map