(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-043a5da4"],{"9d01":function(t,a,e){},a523:function(t,a,e){"use strict";e("4de4"),e("d3b7"),e("b64b"),e("2ca0"),e("99af"),e("20f6"),e("4b85"),e("498a"),e("a15b");var s=e("2b0e");function i(t){return s["default"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var s=e.props,i=e.data,o=e.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var n=i.attrs;if(n){i.attrs={};var r=Object.keys(n).filter((function(t){if("slot"===t)return!1;var a=n[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}));r.length&&(i.staticClass+=" ".concat(r.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),a(s.tag,i,o)}})}var o=e("d9f7");a["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,s=a.props,i=a.data,n=a.children,r=i.attrs;return r&&(i.attrs={},e=Object.keys(r).filter((function(t){if("slot"===t)return!1;var a=r[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}))),s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),t(s.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(e||[])}),n)}})},b73d:function(t,a,e){"use strict";var s=e("15fd"),i=e("5530"),o=(e("0481"),e("4069"),e("ec29"),e("9d01"),e("d3b7"),e("25f0"),e("4de4"),e("c37a")),n=e("5607"),r=e("2b0e"),l=r["default"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),c=e("8547"),d=e("58df");function u(t){t.preventDefault()}var v=Object(d["a"])(o["a"],l,c["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,a=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((function(e){return t.valueComparator(e,a)})):void 0===this.trueValue||void 0===this.falseValue?a?this.valueComparator(a,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=o["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:u},t):t},genInput:function(t,a){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},a),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var a=this.value,e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);var s=e.length;e=e.filter((function(e){return!t.valueComparator(e,a)})),e.length===s&&e.push(a)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:a?this.valueComparator(e,a)?null:a:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),h=e("c3f0"),p=e("0789"),f=e("490a"),g=e("80d2"),C=["title"];a["a"]=v.extend({name:"v-switch",directives:{Touch:h["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,a=(t.title,Object(s["a"])(t,C));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(i["a"])(Object(i["a"])({},this.attrs),a)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(i["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(p["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(f["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===g["t"].left&&this.isActive||t.keyCode===g["t"].right&&!this.isActive)&&this.onChange()}}})},c53c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("datosPersonaComponent")],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-card",{staticClass:"ma-5",attrs:{elevation:"4"}},[e("v-toolbar",{attrs:{dense:"",flat:""}},[e("v-toolbar-title",[e("span",{staticClass:"title verde_53A808--text"},[t._v(" OBTIENE DATOS PERSONA")])])],1),e("div",{staticClass:"pa-5"},[e("v-row",[e("v-row",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-switch",{staticClass:"pl-8",attrs:{dense:"",color:"primary",label:"CI",value:"CI"},model:{value:t.vTipoDoc,callback:function(a){t.vTipoDoc=a},expression:"vTipoDoc"}}),e("v-switch",{staticClass:"pl-8",attrs:{dense:"",color:"primary",label:"NIT",value:"NIT"},model:{value:t.vTipoDoc,callback:function(a){t.vTipoDoc=a},expression:"vTipoDoc"}})],1),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{ref:"refNroDoc",attrs:{outlined:"",dense:"",label:"Número Documento",clearable:"","hide-details":""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"tab",9,a.key,"Tab")?null:t.$refs.refComDoc.focus()}},model:{value:t.vNroDoc,callback:function(a){t.vNroDoc=a},expression:"vNroDoc"}})],1),"CI"===this.vTipoDoc?e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-text-field",{ref:"refComDoc",attrs:{maxlength:"3",outlined:"",dense:"",label:"Complemento",clearable:"","hide-details":""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"tab",9,a.key,"Tab")?null:t.$refs.refExtencion.focus()}},model:{value:t.vComplemento,callback:function(a){t.vComplemento=a},expression:"vComplemento"}})],1):t._e(),"CI"===this.vTipoDoc?e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-autocomplete",{ref:"refExtencion",attrs:{items:t.lstExtencion,"item-value":"value","item-text":"text",outlined:"",dense:"",label:"Extensión","hide-details":"",clearable:""},nativeOn:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"tab",9,a.key,"Tab")?null:t.$refs.refBtnObtenerDatosPersona.focus()}},model:{value:t.vExtencion,callback:function(a){t.vExtencion=a},expression:"vExtencion"}})],1):t._e(),e("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e("v-chip",{ref:"refBtnObtenerDatosPersona",staticClass:"ma-2",attrs:{color:"primary","text-color":"white"},on:{click:function(a){return t.clickObtenerDatosPersona()}}},[t._v(" Verificar ")])],1)],1),""!=t.smsError?e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("h3",[t._v("Mensaje de Error")]),e("v-alert",{attrs:{dense:"",text:"",type:"error"}},[t._v(" "+t._s(t.smsError)+" ")])],1)],1):t._e()],1),0!=Object.entries(t.objDatosPersona).length?e("v-container",{attrs:{fluid:"",row:""}},[e("v-card",{staticClass:"ma-2 pa-2",attrs:{outlined:"","max-width":"300"}},[e("span",{staticClass:"title rosa_FFB695--text"},[t._v("DATOS GENERALES")]),e("br"),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Nombre: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.nombre)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido Paterno: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.apellidoPaterno)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido Materno: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.apellidoMaterno)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido de Casado: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.apellidoDeCasada)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Sexo: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.sexo)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Fecha de Nacimiento: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.fechaDeNacimiento)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Correo Electrónico: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.correoElectronico)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Estado Civil: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.estadoCivil)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Nacionalidad: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.nacionalidad)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Redes Sociales: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.redesSociales)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Cantidad Hijos: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.cantidadHijos)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Ingreso Pesos: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.ingresoPesos)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Nivel Ingreso: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.nivelIngresos)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Nivel Educación: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.nivelEducacion)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Discapacitado: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.discapacitado)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Tipo de Vivienda: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.tipoDeVivienda)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Porcentaje Crédito Asumido: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.porcentajeCreditoAsumido)+" ")])])]),e("v-card",{staticClass:"ma-2 pa-2",attrs:{outlined:"","max-width":"300"}},[e("span",{staticClass:"title rosa_FFB695--text"},[t._v("INFORMACIÓN CONYUGUE")]),e("br"),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Nombre: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionDelConyuge.nombre)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido Paterno: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionDelConyuge.apellidoPaterno)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido Materno: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionDelConyuge.apellidoMaterno)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido de Casado: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionDelConyuge.apellidoDeCasada)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Sexo: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionDelConyuge.sexo)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Fecha de Nacimiento: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionDelConyuge.fechaDeNacimiento)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Correo Electrónico: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionDelConyuge.correoElectronico)+" ")])])]),e("v-card",{staticClass:"ma-2 pa-2",attrs:{outlined:"","max-width":"300"}},[e("span",{staticClass:"title rosa_FFB695--text"},[t._v("INFORMACIÓN DE RESIDENCIA")]),e("br"),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Pais de Residencia: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionDeResidencia.paisDeResidencia)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Dirección: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionDeResidencia.direccion)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Departamento: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionDeResidencia.departamento)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Ciudad: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionDeResidencia.ciudad)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Teléfono: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionDeResidencia.telefono)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Celular: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionDeResidencia.celular)+" ")])])]),e("v-card",{staticClass:"ma-2 pa-2",attrs:{outlined:"","max-width":"300"}},[e("span",{staticClass:"title rosa_FFB695--text"},[t._v("INFORMACIÓN LABORAL")]),e("br"),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Lugar de Trabajo: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionLaboral.lugarDeTrabajo)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Cargo: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.cargo)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Profesión: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.profesion)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Actividad Económica: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.objDatosPersona.informacionLaboral.actividadEconomica)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Fecha de ingreso a Trabajo: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.fechaDeIngresoAlTrabajo)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Domicilio Comercial: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.domicilioComercial)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Departamento: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.departamento)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Ciudad: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.ciudad)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Telefóno: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.telefono)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Correo Electrónico: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(t.objDatosPersona.informacionLaboral.correoElectronico)+" ")])])]),e("v-card",{staticClass:"ma-2 pa-2",attrs:{outlined:"","max-width":"300"}},[e("span",{staticClass:"title rosa_FFB695--text"},[t._v("REFERENCIAS")]),e("br"),t._l(t.objDatosPersona.referencias,(function(a){return e("div",{key:a,staticClass:"pa-0"},[e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Tipo: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.tipo)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Nombre: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.nombre)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido Paterno: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.apellidoPaterno)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido Materno: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.apellidoMaterno)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Apellido Casado: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.apellidoDeCasada)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Relación: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.relacion)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Teléfono: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.telefono)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Correo Electrónico: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(" "+t._s(a.correoElectronico)+" ")])]),e("div",[e("span",{staticClass:"font-weight-regular"},[t._v("Entidad: ")]),e("span",{staticClass:"font-weight-thin"},[t._v(t._s(a.entidad)+" ")])]),e("v-divider")],1)}))],2)],1):t._e()],1)],1)},n=[],r=e("1da1"),l=e("5530"),c=(e("96cf"),e("498a"),e("2f62")),d={data:function(){return{smsError:"",vExtencion:"",vNroDoc:"",vComplemento:"",vTipoDoc:"CI",lstExtencion:[{value:" ",text:"Sin Extensión"},{value:"SC",text:"SC"},{value:"LP",text:"LP"},{value:"CB",text:"CB"},{value:"OR",text:"OR"},{value:"TJ",text:"TJ"},{value:"BE",text:"BE"},{value:"CH",text:"CH"},{value:"PO",text:"PO"},{value:"PA",text:"PA"},{value:"PE",text:"PE"}],objDatosPersona:{},header_datos_persona:[{text:"Nombre",value:"nombre"},{text:"Apellido Paterno",value:"apellidoPaterno"},{text:"Apellido Materno ",value:"apellidoMaterno"},{text:"Apellido Casada ",value:"apellidoDeCasada"},{text:"Sexo ",value:"sexo"},{text:"Fecha de Nac. ",value:"fechaDeNacimiento"},{text:"Correo Electrónico ",value:"correoElectronico"},{text:"Estado Civil ",value:"estadoCivil"},{text:"Nacionalidad ",value:"nacionalidad"},{text:"Redes Sociales ",value:"redesSociales"},{text:"Cantidad Hijos ",value:"cantidadHijos"},{text:"Ingresos Pesos ",value:"ingresoPesos"},{text:"Nivel de Ingresos ",value:"nivelIngresos"},{text:"Nivel de Educación ",value:"nivelEducacion"},{text:"Discapacitado ",value:"discapacitado"},{text:"Tipo de Vivienda ",value:"tipoDeVivienda"},{text:"Porcentaje Crédito Asumido ",value:"porcentajeCreditoAsumido"},{text:"Información Conyuge ",value:"informacionDelConyuge"},{text:"Información Residencia ",value:"informacionDeResidencia"},{text:"Información Laboral ",value:"informacionLaboral"},{text:"Referencias ",value:"referencias"}]}},methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(c["d"])("utils",["setDialogProgress"])),Object(c["b"])("api_banco",["obtenerDatosPersona"])),{},{clickObtenerDatosPersona:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.smsError="",t.setDialogProgress({mostrar:!0,sms:"Verificando Datos Personas, espere..."}),t.objDatosPersona={},e={tipoDocumento:t.vTipoDoc.trim(),extension:"NIT"===t.vTipoDoc.trim()?"  ":t.vExtencion,numeroDocumento:t.vNroDoc.trim(),extDuplicado:t.vComplemento.trim()},a.next=6,t.obtenerDatosPersona(e);case 6:if(s=a.sent,!s.data||!s.data.statusCode){a.next=12;break}return t.$notify({title:"RESPUESTA DEL SERVICIO",text:"<b>statusCode</b>: "+s.data.statusCode+"<br> <b>Message:</b> "+s.data.message,duration:5e3,type:"error"}),t.smsError=s.data.message,t.setDialogProgress({mostrar:!1,sms:""}),a.abrupt("return");case 12:t.objDatosPersona=s.data,t.$notify({title:"Mensaje",text:"Busqueda Exitosa",duration:2e3,type:"success"}),t.setDialogProgress({mostrar:!1,sms:""});case 15:case"end":return a.stop()}}),a)})))()}})},u=d,v=e("2877"),h=e("6544"),p=e.n(h),f=e("0798"),g=e("c6a6"),C=e("b0af"),m=e("cc20"),_=e("62ad"),b=e("a523"),w=e("ce7e"),D=e("0fd9"),x=e("b73d"),P=e("8654"),j=e("71d9"),E=e("2a7f"),y=Object(v["a"])(u,o,n,!1,null,null,null),A=y.exports;p()(y,{VAlert:f["a"],VAutocomplete:g["a"],VCard:C["a"],VChip:m["a"],VCol:_["a"],VContainer:b["a"],VDivider:w["a"],VRow:D["a"],VSwitch:x["a"],VTextField:P["a"],VToolbar:j["a"],VToolbarTitle:E["a"]});var O={components:{datosPersonaComponent:A},data:function(){return{nroSolicitud:26655,lstDatosFinancieros:[]}},methods:{}},k=O,S=Object(v["a"])(k,s,i,!1,null,null,null);a["default"]=S.exports},ec29:function(t,a,e){}}]);
//# sourceMappingURL=chunk-043a5da4.bcf911cb.js.map