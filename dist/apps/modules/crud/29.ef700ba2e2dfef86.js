"use strict";(self.webpackChunkcrud=self.webpackChunkcrud||[]).push([[29],{6064:(e,i,l)=>{var n=l(8424),r=l(3776),t=l(14),m=l(7293),a=l(3259),u=l(1359);const o="item",s=new u.ItemService("http://localhost:8080/api"),d=(0,a.createEntityAdapter)(),c=(0,a.createAsyncThunk)("item/fetchStatus",(async(e={},i)=>{const{keyword:l,page:n,pageSize:r}=e;return(await s.getItems(l,n,r)).data})),N=(0,a.createAsyncThunk)("item/fetchOneStatus",(async(e,i)=>(await s.getItem(e)).data)),b=(0,a.createAsyncThunk)("item/addStatus",(async(e,i)=>(await s.createItem(e)).data)),h=(0,a.createAsyncThunk)("item/updateStatus",(async(e,i)=>(await s.updateItem(e.id,{name:e.name,description:e.description})).data)),f=(0,a.createAsyncThunk)("item/deleteStatus",(async(e,i)=>(await s.deleteItem(e)).data)),v=d.getInitialState({loadingStatus:"not loaded",error:null,searchQuery:"",currentPage:1,totalPages:0}),E=(0,a.createSlice)({name:o,initialState:v,reducers:{setSeatchQuery:(e,i)=>{e.searchQuery=i.payload},setCurrentPage:(e,i)=>{e.currentPage=i.payload}},extraReducers:e=>{e.addCase(c.pending,(e=>{e.loadingStatus="loading"})).addCase(c.fulfilled,((e,i)=>{d.setAll(e,i.payload.data),e.loadingStatus="loaded",e.totalPages=Math.ceil(i.payload.count/10)})).addCase(c.rejected,((e,i)=>{e.loadingStatus="error",e.error=i.error.message})).addCase(N.pending,(e=>{e.loadingStatus="loading"})).addCase(N.fulfilled,((e,i)=>{e.loadingStatus="loaded",i.payload&&d.upsertOne(e,i.payload)})).addCase(N.rejected,((e,i)=>{e.loadingStatus="error",e.error=i.error.message||"fetch failed"})).addCase(b.pending,(e=>{e.loadingStatus="loading"})).addCase(b.fulfilled,((e,i)=>{e.loadingStatus="loaded",d.addOne(e,i.payload)})).addCase(b.rejected,((e,i)=>{e.loadingStatus="error",e.error=i.error.message||"fetch failed"})).addCase(h.pending,(e=>{e.loadingStatus="loading"})).addCase(h.fulfilled,((e,i)=>{e.loadingStatus="loaded",d.upsertOne(e,i.payload)})).addCase(h.rejected,((e,i)=>{e.loadingStatus="error",e.error=i.error.message||"fetch failed"})).addCase(f.pending,(e=>{e.loadingStatus="loading"})).addCase(f.fulfilled,((e,i)=>{e.loadingStatus="loaded",d.removeOne(e,i.payload)})).addCase(f.rejected,((e,i)=>{e.loadingStatus="error",e.error=i.error.message||"fetch failed"}))}}),x=E.reducer,j=E.actions,{selectAll:p,selectEntities:D,selectById:V}=d.getSelectors(),g=e=>e[o],y=(0,a.createSelector)(g,p),S=((0,a.createSelector)(g,D),e=>(0,a.createSelector)(g,(i=>V(i,e)))),C=(0,a.createSelector)(g,(e=>e.currentPage)),k=(0,a.createSelector)(g,(e=>e.totalPages)),w=(0,a.createSelector)(g,(e=>e.searchQuery)),I=(0,a.createSelector)(g,(e=>e.loadingStatus)),R=(0,a.createSelector)(g,(e=>e.error)),P=(0,a.configureStore)({reducer:{[o]:x},middleware:e=>e(),devTools:!0,enhancers:[]}),T={};var O=l(493),B=l.n(O),_=l(3521),A=l.n(_),L=l(1365),H=l.n(L),Q=l(7119),Y=l.n(Q),F=l(4821),U=l.n(F),$=l(1080),z="E:\\prj\\mfe-mono\\apps\\modules\\crud\\src\\app\\components\\crud-table\\crud-table.tsx";const G=function(){const e=(0,m.useDispatch)(),i=(0,m.useSelector)(y),l=(0,m.useSelector)(C),r=(0,m.useSelector)(k),a=(0,m.useSelector)(w),u=(0,t.useNavigate)();function o(){e(c({keyword:a,page:l,pageSize:10}))}function s(){e(j.setCurrentPage(1)),o()}function d(i){e(j.setCurrentPage(i)),o()}return(0,n.useEffect)((()=>{o()}),[l]),(0,$.jsxDEV)("div",{className:T.container,children:(0,$.jsxDEV)(B(),{children:[(0,$.jsxDEV)(B().Header,{children:"Items CRUD"},void 0,!1,{fileName:z,lineNumber:57,columnNumber:9},this),(0,$.jsxDEV)(B().Body,{children:[(0,$.jsxDEV)("div",{className:"d-flex mb-3 gap-3",children:[(0,$.jsxDEV)(A().Control,{type:"text",placeholder:"Search ...",value:a,onChange:function(i){e(j.setSeatchQuery(i.target.value))},onKeyDown:e=>"Enter"===e.key&&s(),className:"flex-grow-1"},void 0,!1,{fileName:z,lineNumber:62,columnNumber:13},this),(0,$.jsxDEV)(H(),{type:"button",onClick:s,children:(0,$.jsxDEV)("i",{className:"bi bi-search"},void 0,!1,{fileName:z,lineNumber:71,columnNumber:15},this)},void 0,!1,{fileName:z,lineNumber:70,columnNumber:13},this)]},void 0,!0,{fileName:z,lineNumber:61,columnNumber:11},this),(0,$.jsxDEV)(Y(),{striped:!0,bordered:!0,hover:!0,children:[(0,$.jsxDEV)("thead",{children:(0,$.jsxDEV)("tr",{children:[(0,$.jsxDEV)("th",{children:"Id"},void 0,!1,{fileName:z,lineNumber:77,columnNumber:17},this),(0,$.jsxDEV)("th",{children:"Name"},void 0,!1,{fileName:z,lineNumber:78,columnNumber:17},this),(0,$.jsxDEV)("th",{children:"Description"},void 0,!1,{fileName:z,lineNumber:79,columnNumber:17},this),(0,$.jsxDEV)("th",{children:(0,$.jsxDEV)(H(),{onClick:()=>u("./new"),children:[(0,$.jsxDEV)("i",{className:"bi bi-plus"},void 0,!1,{fileName:z,lineNumber:82,columnNumber:21},this),"New"]},void 0,!0,{fileName:z,lineNumber:81,columnNumber:19},this)},void 0,!1,{fileName:z,lineNumber:80,columnNumber:17},this)]},void 0,!0,{fileName:z,lineNumber:76,columnNumber:15},this)},void 0,!1,{fileName:z,lineNumber:75,columnNumber:13},this),(0,$.jsxDEV)("tbody",{children:i.map((e=>(0,$.jsxDEV)("tr",{children:[(0,$.jsxDEV)("td",{children:e.id},void 0,!1,{fileName:z,lineNumber:91,columnNumber:19},this),(0,$.jsxDEV)("td",{children:e.name},void 0,!1,{fileName:z,lineNumber:92,columnNumber:19},this),(0,$.jsxDEV)("td",{children:e.description||""},void 0,!1,{fileName:z,lineNumber:93,columnNumber:19},this),(0,$.jsxDEV)("td",{children:(0,$.jsxDEV)(U(),{children:[(0,$.jsxDEV)(H(),{onClick:()=>u(`./${e.id}/details`),children:(0,$.jsxDEV)("i",{className:"bi bi-info-circle"},void 0,!1,{fileName:z,lineNumber:97,columnNumber:25},this)},void 0,!1,{fileName:z,lineNumber:96,columnNumber:23},this),(0,$.jsxDEV)(H(),{onClick:()=>u(`./${e.id}/edit`),children:(0,$.jsxDEV)("i",{className:"bi bi-pencil"},void 0,!1,{fileName:z,lineNumber:100,columnNumber:25},this)},void 0,!1,{fileName:z,lineNumber:99,columnNumber:23},this),(0,$.jsxDEV)(H(),{onClick:()=>u(`./${e.id}/delete`),children:(0,$.jsxDEV)("i",{className:"bi bi-trash"},void 0,!1,{fileName:z,lineNumber:103,columnNumber:25},this)},void 0,!1,{fileName:z,lineNumber:102,columnNumber:23},this)]},void 0,!0,{fileName:z,lineNumber:95,columnNumber:21},this)},void 0,!1,{fileName:z,lineNumber:94,columnNumber:19},this)]},e.id,!0,{fileName:z,lineNumber:90,columnNumber:17},this)))},void 0,!1,{fileName:z,lineNumber:88,columnNumber:13},this)]},void 0,!0,{fileName:z,lineNumber:74,columnNumber:11},this)]},void 0,!0,{fileName:z,lineNumber:60,columnNumber:9},this),(0,$.jsxDEV)(B().Footer,{children:(0,$.jsxDEV)("div",{className:"d-flex justify-content-center",children:(0,$.jsxDEV)(U(),{children:[(0,$.jsxDEV)(H(),{onClick:()=>d(l-1),disabled:1===l,children:(0,$.jsxDEV)("i",{className:"bi bi-arrow-left"},void 0,!1,{fileName:z,lineNumber:116,columnNumber:17},this)},void 0,!1,{fileName:z,lineNumber:115,columnNumber:15},this),(0,$.jsxDEV)(H(),{disabled:!0,children:["Page ",l," of ",r]},void 0,!0,{fileName:z,lineNumber:118,columnNumber:15},this),(0,$.jsxDEV)(H(),{onClick:()=>d(l+1),disabled:l===r,children:(0,$.jsxDEV)("i",{className:"bi bi-arrow-right"},void 0,!1,{fileName:z,lineNumber:122,columnNumber:17},this)},void 0,!1,{fileName:z,lineNumber:121,columnNumber:15},this)]},void 0,!0,{fileName:z,lineNumber:114,columnNumber:13},this)},void 0,!1,{fileName:z,lineNumber:113,columnNumber:11},this)},void 0,!1,{fileName:z,lineNumber:112,columnNumber:9},this)]},void 0,!0,{fileName:z,lineNumber:56,columnNumber:7},this)},void 0,!1,{fileName:z,lineNumber:55,columnNumber:5},this)},M={};var q="E:\\prj\\mfe-mono\\apps\\modules\\crud\\src\\app\\components\\crud-form\\crud-form.tsx";const K=function(){const{itemId:e}=(0,t.useParams)(),i=(0,m.useDispatch)(),l=(0,m.useSelector)((i=>e?S(e)(i):null)),r=(0,m.useSelector)(I),a=((0,m.useSelector)(R),null!=e),u=(0,t.useNavigate)();return(0,n.useEffect)((()=>{!l&&e&&i(N(e))}),[i,l,e]),(0,$.jsxDEV)("div",{className:M.container,children:(0,$.jsxDEV)(B(),{children:[(0,$.jsxDEV)(B().Header,{children:(0,$.jsxDEV)(B().Title,{children:[a?"Edit":"Create"," Item"]},void 0,!0,{fileName:q,lineNumber:63,columnNumber:11},this)},void 0,!1,{fileName:q,lineNumber:62,columnNumber:9},this),(0,$.jsxDEV)(B().Body,{children:(0,$.jsxDEV)(A(),{onSubmit:async function(l){l.preventDefault();const n=l.currentTarget,r=n.elements.namedItem("name"),t=n.elements.namedItem("description"),m=a?h({id:e,name:r.value,description:t.value||null}):b({name:r.value,description:t.value||null});await i(m).unwrap()&&u(a?"../..":"..",{replace:!0})},children:[(0,$.jsxDEV)(A().Group,{className:"mb-3",controlId:"name",children:[(0,$.jsxDEV)(A().Label,{children:"Name"},void 0,!1,{fileName:q,lineNumber:68,columnNumber:15},this),(0,$.jsxDEV)(A().Control,{type:"text",name:"name",defaultValue:l?.name,required:!0},void 0,!1,{fileName:q,lineNumber:69,columnNumber:15},this)]},void 0,!0,{fileName:q,lineNumber:67,columnNumber:13},this),(0,$.jsxDEV)(A().Group,{className:"mb-3",controlId:"description",children:[(0,$.jsxDEV)(A().Label,{children:"Description"},void 0,!1,{fileName:q,lineNumber:72,columnNumber:15},this),(0,$.jsxDEV)(A().Control,{as:"textarea",name:"description",defaultValue:l?.description||""},void 0,!1,{fileName:q,lineNumber:73,columnNumber:15},this)]},void 0,!0,{fileName:q,lineNumber:71,columnNumber:13},this)]},void 0,!0,{fileName:q,lineNumber:66,columnNumber:11},this)},void 0,!1,{fileName:q,lineNumber:65,columnNumber:9},this),(0,$.jsxDEV)(B().Footer,{children:(0,$.jsxDEV)("div",{className:"d-flex justify-content-end gap-3",children:[(0,$.jsxDEV)(H(),{variant:"primary",type:"submit",disabled:"loading"===r,children:"Submit"},void 0,!1,{fileName:q,lineNumber:79,columnNumber:13},this),(0,$.jsxDEV)(H(),{variant:"secondary",onClick:()=>u(-1),children:"Cancel"},void 0,!1,{fileName:q,lineNumber:82,columnNumber:13},this)]},void 0,!0,{fileName:q,lineNumber:78,columnNumber:11},this)},void 0,!1,{fileName:q,lineNumber:77,columnNumber:9},this)]},void 0,!0,{fileName:q,lineNumber:61,columnNumber:7},this)},void 0,!1,{fileName:q,lineNumber:60,columnNumber:5},this)},W={};var J=l(6925),X=l.n(J),Z=l(6067),ee=l.n(Z),ie="E:\\prj\\mfe-mono\\apps\\modules\\crud\\src\\app\\components\\crud-detail\\crud-detail.tsx";const le=function({mode:e="view"}){const{itemId:i}=(0,t.useParams)(),l=(0,m.useDispatch)(),r=(0,m.useSelector)((e=>i?S(i)(e):null)),a=(0,m.useSelector)(I),u=(0,m.useSelector)(R),o=(0,t.useNavigate)();function s(){o(-1)}switch((0,n.useEffect)((()=>{!r&&i&&l(N(i))}),[l,r,i]),a){case"loading":return(0,$.jsxDEV)(X(),{animation:"border",role:"status",children:(0,$.jsxDEV)("span",{className:"visually-hidden",children:"Loading..."},void 0,!1,{fileName:ie,lineNumber:53,columnNumber:11},this)},void 0,!1,{fileName:ie,lineNumber:52,columnNumber:9},this);case"error":return(0,$.jsxDEV)(ee(),{variant:"danger",children:[(0,$.jsxDEV)(ee().Heading,{children:"Oh snap! You got an error!"},void 0,!1,{fileName:ie,lineNumber:60,columnNumber:11},this),(0,$.jsxDEV)("p",{children:u},void 0,!1,{fileName:ie,lineNumber:61,columnNumber:11},this),(0,$.jsxDEV)(ee().Link,{onClick:s,children:"Back"},void 0,!1,{fileName:ie,lineNumber:62,columnNumber:11},this)]},void 0,!0,{fileName:ie,lineNumber:59,columnNumber:9},this);case"not loaded":return(0,$.jsxDEV)(ee(),{variant:"warning",children:[(0,$.jsxDEV)(ee().Heading,{children:"Oh snap! You got an error!"},void 0,!1,{fileName:ie,lineNumber:69,columnNumber:11},this),(0,$.jsxDEV)("p",{children:"Could not load item"},void 0,!1,{fileName:ie,lineNumber:70,columnNumber:11},this),(0,$.jsxDEV)(ee().Link,{onClick:s,children:"Back"},void 0,!1,{fileName:ie,lineNumber:71,columnNumber:11},this)]},void 0,!0,{fileName:ie,lineNumber:68,columnNumber:9},this);default:return r?(0,$.jsxDEV)("div",{className:W.container,children:(0,$.jsxDEV)(B(),{children:[(0,$.jsxDEV)(B().Header,{children:(0,$.jsxDEV)(B().Title,{children:r.name},void 0,!1,{fileName:ie,lineNumber:89,columnNumber:15},this)},void 0,!1,{fileName:ie,lineNumber:88,columnNumber:13},this),(0,$.jsxDEV)(B().Body,{children:(0,$.jsxDEV)(B().Text,{children:(0,$.jsxDEV)("pre",{children:r.description},void 0,!1,{fileName:ie,lineNumber:93,columnNumber:17},this)},void 0,!1,{fileName:ie,lineNumber:92,columnNumber:15},this)},void 0,!1,{fileName:ie,lineNumber:91,columnNumber:13},this),(0,$.jsxDEV)(B().Footer,{children:"delete"===e?(0,$.jsxDEV)("div",{className:"d-flex justify-content-between",children:[(0,$.jsxDEV)("span",{children:"Are you sure you want to delete this item?"},void 0,!1,{fileName:ie,lineNumber:99,columnNumber:19},this),(0,$.jsxDEV)("div",{className:"d-flex justify-content-end gap-3",children:[(0,$.jsxDEV)(H(),{type:"button",onClick:async function(){r&&(await l(f(r.id)).unwrap(),o("../../",{replace:!0}))},children:"Yes"},void 0,!1,{fileName:ie,lineNumber:101,columnNumber:21},this),(0,$.jsxDEV)(H(),{type:"button",onClick:s,children:"No"},void 0,!1,{fileName:ie,lineNumber:102,columnNumber:21},this)]},void 0,!0,{fileName:ie,lineNumber:100,columnNumber:19},this)]},void 0,!0,{fileName:ie,lineNumber:98,columnNumber:17},this):(0,$.jsxDEV)("div",{className:"d-flex justify-content-end gap-3",children:[(0,$.jsxDEV)(H(),{type:"button",onClick:s,children:"Back"},void 0,!1,{fileName:ie,lineNumber:107,columnNumber:19},this),(0,$.jsxDEV)(H(),{type:"button",onClick:()=>o("./../edit"),children:"Edit"},void 0,!1,{fileName:ie,lineNumber:108,columnNumber:19},this),(0,$.jsxDEV)(H(),{type:"button",onClick:()=>o("./../delete"),children:"Delete"},void 0,!1,{fileName:ie,lineNumber:109,columnNumber:19},this)]},void 0,!0,{fileName:ie,lineNumber:106,columnNumber:17},this)},void 0,!1,{fileName:ie,lineNumber:96,columnNumber:13},this)]},void 0,!0,{fileName:ie,lineNumber:87,columnNumber:11},this)},void 0,!1,{fileName:ie,lineNumber:86,columnNumber:9},this):(0,$.jsxDEV)(ee(),{variant:"warning",children:[(0,$.jsxDEV)(ee().Heading,{children:"Oh snap! You got an error!"},void 0,!1,{fileName:ie,lineNumber:79,columnNumber:13},this),(0,$.jsxDEV)("p",{children:"Item not found"},void 0,!1,{fileName:ie,lineNumber:80,columnNumber:13},this),(0,$.jsxDEV)(ee().Link,{onClick:s,children:"Back"},void 0,!1,{fileName:ie,lineNumber:81,columnNumber:13},this)]},void 0,!0,{fileName:ie,lineNumber:78,columnNumber:11},this)}};var ne="E:\\prj\\mfe-mono\\apps\\modules\\crud\\src\\app\\app.tsx";const re=function(){return(0,$.jsxDEV)(m.Provider,{store:P,children:(0,$.jsxDEV)(t.Routes,{children:[(0,$.jsxDEV)(t.Route,{path:"/",element:(0,$.jsxDEV)(G,{},"table",!1,{fileName:ne,lineNumber:14,columnNumber:34},this)},void 0,!1,{fileName:ne,lineNumber:14,columnNumber:9},this),(0,$.jsxDEV)(t.Route,{path:"new",element:(0,$.jsxDEV)(K,{},"form-new",!1,{fileName:ne,lineNumber:15,columnNumber:36},this)},void 0,!1,{fileName:ne,lineNumber:15,columnNumber:9},this),(0,$.jsxDEV)(t.Route,{path:":itemId/details",element:(0,$.jsxDEV)(le,{mode:"view"},"view",!1,{fileName:ne,lineNumber:16,columnNumber:48},this)},"view",!1,{fileName:ne,lineNumber:16,columnNumber:9},this),(0,$.jsxDEV)(t.Route,{path:":itemId/edit",element:(0,$.jsxDEV)(K,{},"form-edit",!1,{fileName:ne,lineNumber:17,columnNumber:45},this)},"edit",!1,{fileName:ne,lineNumber:17,columnNumber:9},this),(0,$.jsxDEV)(t.Route,{path:":itemId/delete",element:(0,$.jsxDEV)(le,{mode:"delete"},"delete",!1,{fileName:ne,lineNumber:18,columnNumber:47},this)},"delete",!1,{fileName:ne,lineNumber:18,columnNumber:9},this)]},void 0,!0,{fileName:ne,lineNumber:13,columnNumber:7},this)},void 0,!1,{fileName:ne,lineNumber:12,columnNumber:5},this)};var te="E:\\prj\\mfe-mono\\apps\\modules\\crud\\src\\bootstrap.tsx";r.createRoot(document.getElementById("root")).render((0,$.jsxDEV)(n.StrictMode,{children:(0,$.jsxDEV)(t.BrowserRouter,{children:(0,$.jsxDEV)(re,{},void 0,!1,{fileName:te,lineNumber:13,columnNumber:7},void 0)},void 0,!1,{fileName:te,lineNumber:12,columnNumber:5},void 0)},void 0,!1,{fileName:te,lineNumber:11,columnNumber:3},void 0))},3776:(e,i,l)=>{var n=l(1840),r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;i.createRoot=function(e,i){r.usingClientEntryPoint=!0;try{return n.createRoot(e,i)}finally{r.usingClientEntryPoint=!1}},i.hydrateRoot=function(e,i,l){r.usingClientEntryPoint=!0;try{return n.hydrateRoot(e,i,l)}finally{r.usingClientEntryPoint=!1}}}}]);