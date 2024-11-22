"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// libs/api/src/index.ts
var src_exports = {};
__export(src_exports, {
  AuthService: () => AuthService,
  ItemService: () => ItemService
});
module.exports = __toCommonJS(src_exports);

// libs/api/src/lib/utils/parse-parameter.util.ts
var import_path_to_regexp = require("path-to-regexp");
function parseParameter(parameters, values) {
  return (0, import_path_to_regexp.compile)(parameters)(values);
}

// libs/api/src/lib/abstracts/rest-client.abstract.ts
var RestClientAbstract = class {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  async client(method, url, options = {}) {
    const address = new URL(this.baseUrl + parseParameter(url, options.params || {}));
    if (options.query) {
      for (const [key, value] of Object.entries(options.query)) {
        address.searchParams.set(key, value);
      }
    }
    const headers = {
      "Content-Type": "application/json",
      ...options.headers || {}
    };
    const response = await fetch(address.toString(), {
      method,
      ...options.body ? { body: JSON.stringify(options.body) } : {},
      headers
    });
    return await response.json();
  }
  async get(url, options = {}) {
    return this.client("GET", url, options);
  }
  async post(url, options = {}) {
    return this.client("POST", url, options);
  }
  async put(url, options = {}) {
    return this.client("PUT", url, options);
  }
  async delete(url, options = {}) {
    return this.client("DELETE", url, options);
  }
  async patch(url, options = {}) {
    return this.client("PATCH", url, options);
  }
};

// libs/api/src/lib/services/auth.service.ts
var AuthService = class extends RestClientAbstract {
  constructor(baseUrl) {
    super(baseUrl);
  }
  async login(username, password) {
    return this.post("/auth/login", { body: { username, password } });
  }
};

// libs/api/src/lib/services/item.service.ts
var ItemService = class extends RestClientAbstract {
  constructor(baseUrl) {
    super(baseUrl);
  }
  getItems(keywords, page = 1, limit = 10) {
    return this.get("/item", {
      query: {
        q: keywords || "",
        page: page.toString(),
        limit: limit.toString()
      }
    });
  }
  getItem(id) {
    return this.get("/item/:id", { params: { id } });
  }
  async createItem(item) {
    return this.post("/item", { body: item });
  }
  async updateItem(id, item) {
    return this.put("/item/:id", { params: { id }, body: item });
  }
  async deleteItem(id) {
    return this.delete("/item/:id", { params: { id } });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AuthService,
  ItemService
});
