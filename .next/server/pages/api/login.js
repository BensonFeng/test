"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "@magic-sdk/admin":
/*!***********************************!*\
  !*** external "@magic-sdk/admin" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@magic-sdk/admin");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "(api)/./lib/magic.js":
/*!**********************!*\
  !*** ./lib/magic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"magicAdmin\": () => (/* binding */ magicAdmin)\n/* harmony export */ });\nconst { Magic  } = __webpack_require__(/*! @magic-sdk/admin */ \"@magic-sdk/admin\");\nconst magicAdmin = new Magic(process.env.MAGIC_SECRET_KEY);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvbWFnaWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQyxDQUFDLENBQUNBLEtBQUssRUFBQyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsMENBQWtCO0FBRXJDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1uZXRmbGl4LXZpZGVvLy4vbGliL21hZ2ljLmpzP2EyNzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNYWdpYyB9ID0gcmVxdWlyZShcIkBtYWdpYy1zZGsvYWRtaW5cIik7XHJcblxyXG5leHBvcnQgY29uc3QgbWFnaWNBZG1pbiA9IG5ldyBNYWdpYyhwcm9jZXNzLmVudi5NQUdJQ19TRUNSRVRfS0VZKTtcclxuIl0sIm5hbWVzIjpbIk1hZ2ljIiwicmVxdWlyZSIsIm1hZ2ljQWRtaW4iLCJwcm9jZXNzIiwiZW52IiwiTUFHSUNfU0VDUkVUX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/magic.js\n");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _lib_magic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/magic */ \"(api)/./lib/magic.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function login(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const auth = req.headers.authorization;\n            const didToken = auth ? auth.substr(7) : \"\";\n            // const hello = await magic.token.validate(didToken);\n            // console.log({ hello });\n            console.log(\"copy this didToken\", didToken);\n            const metadata = await _lib_magic__WEBPACK_IMPORTED_MODULE_0__.magicAdmin.users.getMetadataByToken(didToken);\n            console.log({\n                metadata\n            });\n            const { issuer , publicAddress , email  } = metadata;\n            const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n                issuer,\n                publicAddress,\n                email,\n                iat: Math.floor(Date.now() / 1000),\n                exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),\n                \"https://hasura.io/jwt/claims\": {\n                    \"x-hasura-allowed-roles\": [\n                        \"user\",\n                        \"admin\"\n                    ],\n                    \"x-hasura-default-role\": \"user\",\n                    \"x-hasura-user-id\": `${metadata.issuer}`\n                }\n            }, process.env.SECRET_PHRASE);\n            console.log({\n                token\n            });\n            res.status(200).json({\n                done: true\n            });\n        } catch (error) {\n            console.error(\"Something went wrong loggin in\", error);\n            res.status(500).json({\n                done: false\n            });\n        }\n    } else {\n        res.send({\n            done: false\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUNkO0FBRWYsZUFBZUUsS0FBSyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQzdDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLElBQUksR0FBR0gsR0FBRyxDQUFDSSxPQUFPLENBQUNDLGFBQWE7WUFDdEMsS0FBSyxDQUFDQyxRQUFRLEdBQUdILElBQUksR0FBR0EsSUFBSSxDQUFDSSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUU7WUFDM0MsRUFBc0Q7WUFDdEQsRUFBMEI7WUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQW9CLHFCQUFFSCxRQUFRO1lBQzFDLEtBQUssQ0FBQ0ksUUFBUSxHQUFHLEtBQUssQ0FBQ2IsMkVBQW1DLENBQUNTLFFBQVE7WUFDbkVFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7Z0JBQUNDLFFBQVE7WUFBQyxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUNHLE1BQU0sR0FBRUMsYUFBYSxHQUFFQyxLQUFLLEVBQUMsQ0FBQyxHQUFHTCxRQUFRO1lBQ2pELEtBQUssQ0FBQ00sS0FBSyxHQUFHbEIsd0RBQVEsQ0FDcEIsQ0FBQztnQkFDQ2UsTUFBTTtnQkFDTkMsYUFBYTtnQkFDYkMsS0FBSztnQkFDTEcsR0FBRyxFQUFFQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLEtBQUssSUFBSTtnQkFDakNDLEdBQUcsRUFBRUosSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxLQUFLLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO2dCQUNwRCxDQUE4QiwrQkFBRSxDQUFDO29CQUMvQixDQUF3Qix5QkFBRSxDQUFDO3dCQUFBLENBQU07d0JBQUUsQ0FBTztvQkFBQSxDQUFDO29CQUMzQyxDQUF1Qix3QkFBRSxDQUFNO29CQUMvQixDQUFrQixzQkFBS1osUUFBUSxDQUFDRyxNQUFNO2dCQUN4QyxDQUFDO1lBQ0gsQ0FBQyxFQUNEVyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsYUFBYTtZQUUzQmxCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7Z0JBQUNPLEtBQUs7WUFBQyxDQUFDO1lBQ3JCZixHQUFHLENBQUMwQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsSUFBSSxFQUFFLElBQUk7WUFBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBRSxDQUFDO1lBQ2Z0QixPQUFPLENBQUNzQixLQUFLLENBQUMsQ0FBZ0MsaUNBQUVBLEtBQUs7WUFDckQ3QixHQUFHLENBQUMwQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsSUFBSSxFQUFFLEtBQUs7WUFBQyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDLE1BQU0sQ0FBQztRQUNONUIsR0FBRyxDQUFDOEIsSUFBSSxDQUFDLENBQUM7WUFBQ0YsSUFBSSxFQUFFLEtBQUs7UUFBQyxDQUFDO0lBQzFCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1uZXRmbGl4LXZpZGVvLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFnaWNBZG1pbiB9IGZyb20gXCIuLi8uLi9saWIvbWFnaWNcIjtcclxuaW1wb3J0IGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsb2dpbihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYXV0aCA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb247XHJcbiAgICAgIGNvbnN0IGRpZFRva2VuID0gYXV0aCA/IGF1dGguc3Vic3RyKDcpIDogXCJcIjtcclxuICAgICAgLy8gY29uc3QgaGVsbG8gPSBhd2FpdCBtYWdpYy50b2tlbi52YWxpZGF0ZShkaWRUb2tlbik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHsgaGVsbG8gfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiY29weSB0aGlzIGRpZFRva2VuXCIsIGRpZFRva2VuKTtcclxuICAgICAgY29uc3QgbWV0YWRhdGEgPSBhd2FpdCBtYWdpY0FkbWluLnVzZXJzLmdldE1ldGFkYXRhQnlUb2tlbihkaWRUb2tlbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHsgbWV0YWRhdGEgfSk7XHJcbiAgICAgIGNvbnN0IHsgaXNzdWVyLCBwdWJsaWNBZGRyZXNzLCBlbWFpbCB9ID0gbWV0YWRhdGE7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gand0LnNpZ24oXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNzdWVyLFxyXG4gICAgICAgICAgcHVibGljQWRkcmVzcyxcclxuICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgaWF0OiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSxcclxuICAgICAgICAgIGV4cDogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCArIDcgKiAyNCAqIDYwICogNjApLFxyXG4gICAgICAgICAgXCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zXCI6IHtcclxuICAgICAgICAgICAgXCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzXCI6IFtcInVzZXJcIiwgXCJhZG1pblwiXSxcclxuICAgICAgICAgICAgXCJ4LWhhc3VyYS1kZWZhdWx0LXJvbGVcIjogXCJ1c2VyXCIsXHJcbiAgICAgICAgICAgIFwieC1oYXN1cmEtdXNlci1pZFwiOiBgJHttZXRhZGF0YS5pc3N1ZXJ9YCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcm9jZXNzLmVudi5TRUNSRVRfUEhSQVNFXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHsgdG9rZW4gfSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZG9uZTogdHJ1ZSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyBsb2dnaW4gaW5cIiwgZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGRvbmU6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2VuZCh7IGRvbmU6IGZhbHNlIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsibWFnaWNBZG1pbiIsImp3dCIsImxvZ2luIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYXV0aCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiZGlkVG9rZW4iLCJzdWJzdHIiLCJjb25zb2xlIiwibG9nIiwibWV0YWRhdGEiLCJ1c2VycyIsImdldE1ldGFkYXRhQnlUb2tlbiIsImlzc3VlciIsInB1YmxpY0FkZHJlc3MiLCJlbWFpbCIsInRva2VuIiwic2lnbiIsImlhdCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJleHAiLCJwcm9jZXNzIiwiZW52IiwiU0VDUkVUX1BIUkFTRSIsInN0YXR1cyIsImpzb24iLCJkb25lIiwiZXJyb3IiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();