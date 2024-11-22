"use strict";(self.webpackChunkcalculator=self.webpackChunkcalculator||[]).push([[18],{3184:(e,a,t)=>{var r=t(8424),l=t(3776),c=t(7293),n=t(3259);const o="calculation";let i=function(e){return e.NUM0="0",e.NUM1="1",e.NUM2="2",e.NUM3="3",e.NUM4="4",e.NUM5="5",e.NUM6="6",e.NUM7="7",e.NUM8="8",e.NUM9="9",e.ADD="+",e.SUBTRACT="-",e.MULTIPLY="\xd7",e.DIVIDE="/",e.DECIMAL=".",e}({});const s=(0,n.createSlice)({name:o,initialState:{tape:"",result:null,decimalMode:!1},reducers:{push(e,a){null!==e.result&&(e.tape="",e.result=null),e.tape||[i.DECIMAL,i.ADD,i.SUBTRACT,i.MULTIPLY,i.DIVIDE].includes(a.payload)&&(e.tape="0"),a.payload===i.DECIMAL&&e.decimalMode||(e.tape+=a.payload,[i.ADD,i.SUBTRACT,i.MULTIPLY,i.DIVIDE].includes(a.payload)&&(e.decimalMode=!1))},clear(e){e.tape="",e.result=null,e.decimalMode=!1},calculate(e){if(e.tape){const a=e.tape.match(/(\d+|\+|\-|\xd7|\/)/g);if(!a)return void(e.result=0);const{total:t}=a.reduce(((e,a)=>{const t=Number(a);if(isNaN(t))return{total:e.total,currentOperation:a};switch(e.currentOperation){case"+":return{total:e.total+t,currentOperation:"+"};case"-":return{total:e.total-t,currentOperation:"-"};case"\xd7":return{total:e.total*t,currentOperation:"\xd7"};case"/":return{total:e.total/t,currentOperation:"/"};default:throw new EvalError(`Unknown operation ${e.currentOperation}`)}}),{total:0,currentOperation:"+"});e.result=t}}}}),u=s.reducer,m=s.actions,N=e=>e[o],d=(0,n.createSelector)(N,(e=>e.tape)),b=(0,n.createSelector)(N,(e=>e.result)),p=(0,n.configureStore)({reducer:{[o]:u},middleware:e=>e(),devTools:!0,enhancers:[]}),M="calculator_calculator__8UJM9",D="calculator_button-grid__Doh3X",E="calculator_clear-button__Yi7Qc";var U=t(493),f=t.n(U),h=t(3521),v=t.n(h),k=t(1365),C=t.n(k),y=t(1080),I="E:\\prj\\mfe-mono\\apps\\modules\\calculator\\src\\app\\components\\calculator\\calculator.tsx";const x=function(){const e=(0,c.useDispatch)(),a=(0,c.useSelector)(d),t=(0,c.useSelector)(b),l=[[i.NUM7,i.NUM8,i.NUM9,i.DIVIDE],[i.NUM4,i.NUM5,i.NUM6,i.MULTIPLY],[i.NUM1,i.NUM2,i.NUM3,i.SUBTRACT],[i.DECIMAL,i.NUM0,"=",i.ADD]],n=null!==t?t.toString():"";function o(a){switch(a){case"=":e(m.calculate());break;case"C":e(m.clear());break;default:e(m.push(a))}}return(0,r.useEffect)((()=>{function e(e){switch(e.key){case"=":case"Enter":o("=");break;case"Backspace":case"Clear":o("C");break;case"Decimal":case".":o(i.DECIMAL);break;case"Multiply":case"*":o(i.MULTIPLY);break;case"Add":case"+":o(i.ADD);break;case"Subtract":case"-":o(i.SUBTRACT);break;case"Divide":case"/":o(i.DIVIDE);break;case"0":o(i.NUM0);break;case"1":o(i.NUM1);break;case"2":o(i.NUM2);break;case"3":o(i.NUM3);break;case"4":o(i.NUM4);break;case"5":o(i.NUM5);break;case"6":o(i.NUM6);break;case"7":o(i.NUM7);break;case"8":o(i.NUM8);break;case"9":o(i.NUM9)}}return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[e]),(0,y.jsxDEV)("div",{className:M,children:(0,y.jsxDEV)(f(),{className:"user-select-none",children:[(0,y.jsxDEV)(f().Header,{children:"Calculator"},void 0,!1,{fileName:I,lineNumber:153,columnNumber:9},this),(0,y.jsxDEV)(f().Body,{children:(0,y.jsxDEV)("div",{className:"d-flex flex-column gap-3",children:[(0,y.jsxDEV)(v().Control,{className:"text-end",type:"text",value:a,readOnly:!0},void 0,!1,{fileName:I,lineNumber:156,columnNumber:13},this),(0,y.jsxDEV)(v().Control,{className:"text-end",type:"text",size:"lg",value:n,readOnly:!0},void 0,!1,{fileName:I,lineNumber:157,columnNumber:13},this),(0,y.jsxDEV)("div",{className:D,children:[l.map((e=>e.map((e=>(0,y.jsxDEV)(C(),{variant:"secondary",onClick:()=>o(e),children:e},e,!1,{fileName:I,lineNumber:161,columnNumber:19},this))))),(0,y.jsxDEV)(C(),{variant:"danger",className:E,onClick:()=>o("C"),children:"Clear"},void 0,!1,{fileName:I,lineNumber:166,columnNumber:15},this)]},void 0,!0,{fileName:I,lineNumber:158,columnNumber:13},this)]},void 0,!0,{fileName:I,lineNumber:155,columnNumber:11},this)},void 0,!1,{fileName:I,lineNumber:154,columnNumber:9},this)]},void 0,!0,{fileName:I,lineNumber:152,columnNumber:7},this)},void 0,!1,{fileName:I,lineNumber:151,columnNumber:5},this)};var L="E:\\prj\\mfe-mono\\apps\\modules\\calculator\\src\\app\\app.tsx";const _=function(){return(0,y.jsxDEV)(c.Provider,{store:p,children:(0,y.jsxDEV)(x,{},void 0,!1,{fileName:L,lineNumber:10,columnNumber:7},this)},void 0,!1,{fileName:L,lineNumber:9,columnNumber:5},this)};var T="E:\\prj\\mfe-mono\\apps\\modules\\calculator\\src\\bootstrap.tsx";l.createRoot(document.getElementById("root")).render((0,y.jsxDEV)(r.StrictMode,{children:(0,y.jsxDEV)(_,{},void 0,!1,{fileName:T,lineNumber:11,columnNumber:5},void 0)},void 0,!1,{fileName:T,lineNumber:10,columnNumber:3},void 0))},3776:(e,a,t)=>{var r=t(1840),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;a.createRoot=function(e,a){l.usingClientEntryPoint=!0;try{return r.createRoot(e,a)}finally{l.usingClientEntryPoint=!1}},a.hydrateRoot=function(e,a,t){l.usingClientEntryPoint=!0;try{return r.hydrateRoot(e,a,t)}finally{l.usingClientEntryPoint=!1}}}}]);