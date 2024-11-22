"use strict";(self.webpackChunkshell=self.webpackChunkshell||[]).push([[19],{3186:(e,a,r)=>{r.r(a),r.d(a,{default:()=>V});var t=r(6778),l=r(1334);const c="calculation";let n=function(e){return e.NUM0="0",e.NUM1="1",e.NUM2="2",e.NUM3="3",e.NUM4="4",e.NUM5="5",e.NUM6="6",e.NUM7="7",e.NUM8="8",e.NUM9="9",e.ADD="+",e.SUBTRACT="-",e.MULTIPLY="\xd7",e.DIVIDE="/",e.DECIMAL=".",e}({});const s=(0,l.createSlice)({name:c,initialState:{tape:"",result:null,decimalMode:!1},reducers:{push(e,a){null!==e.result&&(e.tape="",e.result=null),e.tape||[n.DECIMAL,n.ADD,n.SUBTRACT,n.MULTIPLY,n.DIVIDE].includes(a.payload)&&(e.tape="0"),a.payload===n.DECIMAL&&e.decimalMode||(e.tape+=a.payload,[n.ADD,n.SUBTRACT,n.MULTIPLY,n.DIVIDE].includes(a.payload)&&(e.decimalMode=!1))},clear(e){e.tape="",e.result=null,e.decimalMode=!1},calculate(e){if(e.tape){const a=e.tape.match(/(\d+|\+|\-|\xd7|\/)/g);if(!a)return void(e.result=0);const{total:r}=a.reduce(((e,a)=>{const r=Number(a);if(isNaN(r))return{total:e.total,currentOperation:a};switch(e.currentOperation){case"+":return{total:e.total+r,currentOperation:"+"};case"-":return{total:e.total-r,currentOperation:"-"};case"\xd7":return{total:e.total*r,currentOperation:"\xd7"};case"/":return{total:e.total/r,currentOperation:"/"};default:throw new EvalError(`Unknown operation ${e.currentOperation}`)}}),{total:0,currentOperation:"+"});e.result=r}}}}),o=s.reducer,i=s.actions,u=e=>e[c],N=(0,l.createSelector)(u,(e=>e.tape)),m=(0,l.createSelector)(u,(e=>e.result)),d=(0,l.configureStore)({reducer:{[c]:o},middleware:e=>e(),devTools:!0,enhancers:[]}),b="calculator_calculator__8UJM9",p="calculator_button-grid__Doh3X",M="calculator_clear-button__Yi7Qc";var U=r(1700),D=r.n(U),h=r(764),f=r.n(h),E=r(2388),k=r.n(E),v=r(6587),C=r(2207),x="E:\\prj\\mfe-mono\\apps\\modules\\calculator\\src\\app\\components\\calculator\\calculator.tsx";const I=function(){const e=(0,t.useDispatch)(),a=(0,t.useSelector)(N),r=(0,t.useSelector)(m),l=[[n.NUM7,n.NUM8,n.NUM9,n.DIVIDE],[n.NUM4,n.NUM5,n.NUM6,n.MULTIPLY],[n.NUM1,n.NUM2,n.NUM3,n.SUBTRACT],[n.DECIMAL,n.NUM0,"=",n.ADD]],c=null!==r?r.toString():"";function s(a){switch(a){case"=":e(i.calculate());break;case"C":e(i.clear());break;default:e(i.push(a))}}return(0,v.useEffect)((()=>{function e(e){switch(e.key){case"=":case"Enter":s("=");break;case"Backspace":case"Clear":s("C");break;case"Decimal":case".":s(n.DECIMAL);break;case"Multiply":case"*":s(n.MULTIPLY);break;case"Add":case"+":s(n.ADD);break;case"Subtract":case"-":s(n.SUBTRACT);break;case"Divide":case"/":s(n.DIVIDE);break;case"0":s(n.NUM0);break;case"1":s(n.NUM1);break;case"2":s(n.NUM2);break;case"3":s(n.NUM3);break;case"4":s(n.NUM4);break;case"5":s(n.NUM5);break;case"6":s(n.NUM6);break;case"7":s(n.NUM7);break;case"8":s(n.NUM8);break;case"9":s(n.NUM9)}}return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}}),[e]),(0,C.jsxDEV)("div",{className:b,children:(0,C.jsxDEV)(D(),{className:"user-select-none",children:[(0,C.jsxDEV)(D().Header,{children:"Calculator"},void 0,!1,{fileName:x,lineNumber:153,columnNumber:9},this),(0,C.jsxDEV)(D().Body,{children:(0,C.jsxDEV)("div",{className:"d-flex flex-column gap-3",children:[(0,C.jsxDEV)(f().Control,{className:"text-end",type:"text",value:a,readOnly:!0},void 0,!1,{fileName:x,lineNumber:156,columnNumber:13},this),(0,C.jsxDEV)(f().Control,{className:"text-end",type:"text",size:"lg",value:c,readOnly:!0},void 0,!1,{fileName:x,lineNumber:157,columnNumber:13},this),(0,C.jsxDEV)("div",{className:p,children:[l.map((e=>e.map((e=>(0,C.jsxDEV)(k(),{variant:"secondary",onClick:()=>s(e),children:e},e,!1,{fileName:x,lineNumber:161,columnNumber:19},this))))),(0,C.jsxDEV)(k(),{variant:"danger",className:M,onClick:()=>s("C"),children:"Clear"},void 0,!1,{fileName:x,lineNumber:166,columnNumber:15},this)]},void 0,!0,{fileName:x,lineNumber:158,columnNumber:13},this)]},void 0,!0,{fileName:x,lineNumber:155,columnNumber:11},this)},void 0,!1,{fileName:x,lineNumber:154,columnNumber:9},this)]},void 0,!0,{fileName:x,lineNumber:152,columnNumber:7},this)},void 0,!1,{fileName:x,lineNumber:151,columnNumber:5},this)};var L="E:\\prj\\mfe-mono\\apps\\modules\\calculator\\src\\app\\app.tsx";const V=function(){return(0,C.jsxDEV)(t.Provider,{store:d,children:(0,C.jsxDEV)(I,{},void 0,!1,{fileName:L,lineNumber:10,columnNumber:7},this)},void 0,!1,{fileName:L,lineNumber:9,columnNumber:5},this)}}}]);