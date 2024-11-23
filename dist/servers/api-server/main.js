/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const config_1 = __webpack_require__(7);
const path_1 = __webpack_require__(8);
const typeorm_1 = __webpack_require__(9);
const modules_1 = __webpack_require__(10);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: (0, path_1.join)(__dirname, '../../../../.env'),
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: ':memory:',
                synchronize: true,
                logging: true,
                autoLoadEntities: true,
            }),
            modules_1.ItemModule,
            modules_1.AuthModule,
            modules_1.UsersModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = exports.AuthModule = exports.ItemModule = void 0;
var item_module_1 = __webpack_require__(11);
Object.defineProperty(exports, "ItemModule", ({ enumerable: true, get: function () { return item_module_1.ItemModule; } }));
var auth_module_1 = __webpack_require__(20);
Object.defineProperty(exports, "AuthModule", ({ enumerable: true, get: function () { return auth_module_1.AuthModule; } }));
var users_module_1 = __webpack_require__(26);
Object.defineProperty(exports, "UsersModule", ({ enumerable: true, get: function () { return users_module_1.UsersModule; } }));


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const item_service_1 = __webpack_require__(12);
const item_controller_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(9);
const item_entity_1 = __webpack_require__(13);
let ItemModule = class ItemModule {
};
exports.ItemModule = ItemModule;
exports.ItemModule = ItemModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([item_entity_1.Item])],
        controllers: [item_controller_1.ItemController],
        providers: [item_service_1.ItemService],
    })
], ItemModule);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const typeorm_1 = __webpack_require__(9);
const item_entity_1 = __webpack_require__(13);
const typeorm_2 = __webpack_require__(14);
let ItemService = class ItemService {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    async onApplicationBootstrap() {
        await this.itemRepository.save([
            { name: 'Item 1', description: 'Item 1 description' },
            { name: 'Item 2', description: 'Item 2 description' },
            { name: 'Item 3', description: 'Item 3 description' },
        ]);
    }
    create(createItemDto) {
        return this.itemRepository.save(createItemDto);
    }
    findAll(keyword, page = 1, limit = 10) {
        return this.itemRepository.findAndCount({
            where: keyword ? [
                { name: (0, typeorm_2.ILike)(`%${keyword}%`) },
                { description: (0, typeorm_2.ILike)(`%${keyword}%`) },
            ] : undefined,
            skip: (page - 1) * limit,
            take: limit,
        });
    }
    findOne(id) {
        return this.itemRepository.findOneBy({ id });
    }
    async update(id, updateItemDto) {
        const result = await this.itemRepository.update(id, updateItemDto);
        if (!result.affected) {
            throw new Error('Item not found');
        }
        return this.itemRepository.findOneBy({ id });
    }
    async remove(id) {
        const result = await this.itemRepository.delete(id);
        if (!result.affected) {
            throw new Error('Item not found');
        }
        return id;
    }
};
exports.ItemService = ItemService;
exports.ItemService = ItemService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(item_entity_1.Item)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ItemService);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Item = void 0;
const tslib_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(14);
let Item = class Item {
};
exports.Item = Item;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50 }),
    tslib_1.__metadata("design:type", String)
], Item.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    tslib_1.__metadata("design:type", Object)
], Item.prototype, "description", void 0);
exports.Item = Item = tslib_1.__decorate([
    (0, typeorm_1.Entity)('item')
], Item);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ItemController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const item_service_1 = __webpack_require__(12);
const create_item_dto_1 = __webpack_require__(16);
const update_item_dto_1 = __webpack_require__(18);
const base_response_model_1 = __webpack_require__(19);
let ItemController = class ItemController {
    constructor(itemService) {
        this.itemService = itemService;
    }
    async create(createItemDto) {
        const result = await this.itemService.create(createItemDto);
        return new base_response_model_1.BaseResponse('Item created', result);
    }
    async findAll(query, page = '1', limit = '10') {
        const [data, count] = await this.itemService.findAll(query, Number(page), Number(limit));
        return new base_response_model_1.BaseResponse('Items found', { data, count });
    }
    async findOne(id) {
        const item = await this.itemService.findOne(id);
        if (!item) {
            throw new common_1.HttpException('Item not found', common_1.HttpStatus.NOT_FOUND);
        }
        return new base_response_model_1.BaseResponse('Item found', item);
    }
    async update(id, updateItemDto) {
        const result = await this.itemService.update(id, updateItemDto);
        return new base_response_model_1.BaseResponse('Item updated', result);
    }
    async remove(id) {
        const result = await this.itemService.remove(id);
        return new base_response_model_1.BaseResponse('Item deleted', result);
    }
};
exports.ItemController = ItemController;
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof create_item_dto_1.CreateItemDto !== "undefined" && create_item_dto_1.CreateItemDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__param(0, (0, common_1.Query)('q')),
    tslib_1.__param(1, (0, common_1.Query)('page')),
    tslib_1.__param(2, (0, common_1.Query)('limit')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_c = typeof update_item_dto_1.UpdateItemDto !== "undefined" && update_item_dto_1.UpdateItemDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ItemController.prototype, "remove", null);
exports.ItemController = ItemController = tslib_1.__decorate([
    (0, common_1.Controller)('item'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof item_service_1.ItemService !== "undefined" && item_service_1.ItemService) === "function" ? _a : Object])
], ItemController);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateItemDto = void 0;
const mapped_types_1 = __webpack_require__(17);
const item_entity_1 = __webpack_require__(13);
class CreateItemDto extends (0, mapped_types_1.OmitType)(item_entity_1.Item, ['id']) {
}
exports.CreateItemDto = CreateItemDto;


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateItemDto = void 0;
const mapped_types_1 = __webpack_require__(17);
const create_item_dto_1 = __webpack_require__(16);
class UpdateItemDto extends (0, mapped_types_1.PartialType)(create_item_dto_1.CreateItemDto) {
}
exports.UpdateItemDto = UpdateItemDto;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseResponse = void 0;
class BaseResponse {
    constructor(message, data) {
        this.message = message;
        this.data = data;
    }
}
exports.BaseResponse = BaseResponse;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_controller_1 = __webpack_require__(21);
const auth_service_1 = __webpack_require__(22);
const users_module_1 = __webpack_require__(26);
const jwt_1 = __webpack_require__(25);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: process.env.API_JWT_SECRET,
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService],
    })
], AuthModule);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const auth_service_1 = __webpack_require__(22);
const base_response_model_1 = __webpack_require__(19);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signIn(username, password) {
        if (!username || !password) {
            throw new common_1.BadRequestException();
        }
        const { accessToken } = await this.authService.signIn(username, password);
        return new base_response_model_1.BaseResponse('Login successful', accessToken);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    tslib_1.__param(0, (0, common_1.Body)('username')),
    tslib_1.__param(1, (0, common_1.Body)('password')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const users_service_1 = __webpack_require__(23);
const config_1 = __webpack_require__(7);
const crypto_1 = __webpack_require__(24);
const jwt_1 = __webpack_require__(25);
let AuthService = class AuthService {
    constructor(usersService, configService, jwtService) {
        this.usersService = usersService;
        this.configService = configService;
        this.jwtService = jwtService;
    }
    async signIn(username, password) {
        const user = await this.usersService.findOne(username);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const alg = this.configService.get('API_SERVER_ALG', 'sha3-512');
        const key = this.configService.get('API_SERVER_KEY', 'snowman');
        const hashed = (0, crypto_1.createHmac)(alg, key).update(password).digest('hex');
        if (user.password !== hashed) {
            throw new common_1.UnauthorizedException();
        }
        const payload = {
            sub: user.userId,
            username: user.username,
            user: {
                userId: user.userId,
                username: user.username,
            },
        };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object])
], AuthService);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                userId: '71453b47-350f-473b-b8b3-05c564db85d9',
                username: 'testbed',
                password: 'e4c8e93c2ee355413f92eb71369cf05b2dc5ab4ad9f8128fa7a6572a2fe581f48e93d3620b16162d3f6604a33d968f88c18f806b33e3762dab9e92770e7130bf',
            },
        ];
    }
    async findOne(username) {
        return this.users.find((user) => user.username === username);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], UsersService);


/***/ }),
/* 24 */
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const users_service_1 = __webpack_require__(23);
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const config_1 = __webpack_require__(7);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configSvc = app.get(config_1.ConfigService);
    const serverOrigins = configSvc.get('API_SERVER_ORIGINS', 'http://localhost:3000');
    const origins = serverOrigins.split(',').map(v => v.trim());
    common_1.Logger.log(`API_SERVER_ORIGINS: ${origins}`);
    app.enableCors({
        origin: serverOrigins === '*' ? true : origins,
    });
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = Number(configSvc.get('API_SERVER_PORT', '3000'));
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;