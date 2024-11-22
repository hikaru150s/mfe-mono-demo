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

// libs/auth/src/index.ts
var src_exports = {};
__export(src_exports, {
  Auth: () => Auth
});
module.exports = __toCommonJS(src_exports);

// libs/auth/src/lib/exception/session-storage-unavailable.exception.ts
var SessionStorageUnavailableException = class _SessionStorageUnavailableException extends Error {
  constructor() {
    super("Session storage is not available.");
    this.name = "SessionStorageUnavailableException";
    Object.setPrototypeOf(this, _SessionStorageUnavailableException.prototype);
  }
};

// libs/auth/src/lib/exception/empty-token.exception.ts
var EmptyTokenException = class _EmptyTokenException extends Error {
  constructor() {
    super("No token found");
    this.name = "NoTokenException";
    Object.setPrototypeOf(this, _EmptyTokenException.prototype);
  }
};

// libs/auth/src/lib/driver/base-driver.abstract.ts
var import_jose = require("jose");
var BaseDriver = class {
  decodeToken(token) {
    return (0, import_jose.decodeJwt)(token);
  }
  getTokenData() {
    try {
      return this.getTokenDataOrFail();
    } catch {
      return null;
    }
  }
  getTokenDataOrFail() {
    const token = this.getToken();
    if (!token) {
      throw new EmptyTokenException();
    }
    const decoded = this.decodeToken(token);
    return decoded.user;
  }
};

// libs/auth/src/lib/driver/session-storage.driver.ts
var SessionStorageDriver = class _SessionStorageDriver extends BaseDriver {
  constructor(storage = sessionStorage) {
    super();
    this.storage = storage;
    if (!this.storage) {
      throw new SessionStorageUnavailableException();
    }
  }
  static {
    this.key = "STG_TOKEN";
  }
  setToken(token) {
    this.storage.setItem(_SessionStorageDriver.key, token);
  }
  getToken() {
    return this.storage.getItem(_SessionStorageDriver.key);
  }
  clearToken() {
    this.storage.removeItem(_SessionStorageDriver.key);
  }
  isTokenValid() {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const { exp } = this.decodeToken(token);
    if (exp === void 0) {
      return true;
    }
    return exp > Date.now() / 1e3;
  }
};

// libs/auth/src/lib/auth.ts
var Auth = class {
  constructor(driver = new SessionStorageDriver()) {
    this.driver = driver;
  }
  setToken(token) {
    this.driver.setToken(token);
  }
  getToken() {
    return this.driver.getToken();
  }
  clearToken() {
    this.driver.clearToken();
  }
  isTokenValid() {
    return this.driver.isTokenValid();
  }
  getTokenData() {
    return this.driver.getTokenData();
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Auth
});
