"use strict";(self.webpackChunkcrud=self.webpackChunkcrud||[]).push([[21],{8764:(t,e,s)=>{s.r(e),s.d(e,{AuthService:()=>AuthService,ItemService:()=>ItemService});var r=s(4004);class RestClientAbstract{constructor(t){this.baseUrl=t}async client(t,e,s={}){const i=new URL(this.baseUrl+(n=e,c=s.params||{},(0,r.compile)(n)(c)));var n,c;if(s.query)for(const[r,o]of Object.entries(s.query))i.searchParams.set(r,o);const a={"Content-Type":"application/json",...s.headers||{}},u=await fetch(i.toString(),{method:t,...s.body?{body:JSON.stringify(s.body)}:{},headers:a});return await u.json()}async get(t,e={}){return this.client("GET",t,e)}async post(t,e={}){return this.client("POST",t,e)}async put(t,e={}){return this.client("PUT",t,e)}async delete(t,e={}){return this.client("DELETE",t,e)}async patch(t,e={}){return this.client("PATCH",t,e)}}class AuthService extends RestClientAbstract{constructor(t){super(t)}async login(t,e){return this.post("/auth/login",{body:{username:t,password:e}})}}class ItemService extends RestClientAbstract{constructor(t){super(t)}getItems(t,e=1,s=10){return this.get("/item",{query:{q:t||"",page:e.toString(),limit:s.toString()}})}getItem(t){return this.get("/item/:id",{params:{id:t}})}async createItem(t){return this.post("/item",{body:t})}async updateItem(t,e){return this.put("/item/:id",{params:{id:t},body:e})}async deleteItem(t){return this.delete("/item/:id",{params:{id:t}})}}}}]);