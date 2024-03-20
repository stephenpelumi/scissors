"use strict";
// @ts-ignore
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var app_1 = __importDefault(require("firebase/compat/app"));
require("firebase/compat/firestore");
require("../Styles/main.css");
var Vector_8_copy_png_1 = __importDefault(require("../Styles/assets/icons/Vector-8 copy.png"));
var Vector_9_copy_png_1 = __importDefault(require("../Styles/assets/icons/Vector-9 copy.png"));
var vector_10_png_1 = __importDefault(require("../Styles/assets/icons/vector 10.png"));
var Vector_copy_2_png_1 = __importDefault(require("../Styles/assets/icons/Vector copy 2.png"));
var Vector_1_copy_png_1 = __importDefault(require("../Styles/assets/icons/Vector 1 copy.png"));
var footer_1_png_1 = __importDefault(require("../Styles/assets/icons/footer 1.png"));
var footer_2_png_1 = __importDefault(require("../Styles/assets/icons/footer 2.png"));
var UrlForm = function () {
    var _a = (0, react_1.useState)(''), url = _a[0], setUrl = _a[1];
    var _b = (0, react_1.useState)(''), domain = _b[0], setDomain = _b[1];
    var _c = (0, react_1.useState)(''), alias = _c[0], setAlias = _c[1];
    var handleChange = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        if (name === 'url') {
            setUrl(value);
        }
        else if (name === 'domain') {
            setDomain(value);
        }
        else if (name === 'alias') {
            setAlias(value);
        }
    };
    var handleSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var shortenedUrl, db, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    if (!url || !domain) {
                        alert('URL and Domain are required');
                        return [2 /*return*/];
                    }
                    shortenedUrl = "http://".concat(domain, "/").concat(alias || generateRandomAlias());
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    db = app_1.default.firestore();
                    return [4 /*yield*/, db.collection('shortened_urls').add({
                            originalUrl: url,
                            shortenedUrl: shortenedUrl,
                            createdAt: app_1.default.firestore.FieldValue.serverTimestamp()
                        })];
                case 2:
                    _a.sent();
                    console.log('URL successfully saved to Firebase');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error saving URL to Firebase: ', error_1);
                    alert('Failed to save URL to Firebase');
                    return [2 /*return*/];
                case 4:
                    // Redirect
                    window.location.href = shortenedUrl;
                    return [2 /*return*/];
            }
        });
    }); };
    var generateRandomAlias = function () {
        // Generate a random alias here
        return Math.random().toString(36).substring(7);
    };
    return (react_1.default.createElement("form", { className: "url_form_background", onSubmit: handleSubmit },
        react_1.default.createElement("div", { className: "vector_design_form" },
            react_1.default.createElement("img", { className: "vector_A", src: Vector_8_copy_png_1.default, alt: "" }),
            react_1.default.createElement("img", { className: "vector_B", src: Vector_9_copy_png_1.default, alt: "" }),
            react_1.default.createElement("img", { className: "vector_C", src: vector_10_png_1.default, alt: "" })),
        react_1.default.createElement("section", { className: "actual_form" },
            react_1.default.createElement("div", { className: "url" },
                react_1.default.createElement("input", { className: "url_input", type: "text", name: "url", style: { "--placeholder-color": "#3284FF" }, placeholder: "Paste URL here...", 
                    // style={{ "--placeholder-color": "#3284FF" }}
                    value: url, onChange: handleChange, required: true })),
            react_1.default.createElement("div", { className: "floated_input" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("select", { style: { "--placeholder-color": "#3284FF" }, name: "domain", className: "domain_input", value: domain, onChange: handleChange, required: true },
                        react_1.default.createElement("option", { value: "", disabled: true }, "Choose Domain"),
                        react_1.default.createElement("option", { value: "scissors.com" }, "scissors.com"),
                        react_1.default.createElement("option", { value: "scissors.ng" }, "scissors.ng")),
                    react_1.default.createElement("img", { className: "arrow_down_img", src: Vector_copy_2_png_1.default, alt: "" })),
                react_1.default.createElement("div", { className: "alias" },
                    react_1.default.createElement("input", { className: "alias_input", type: "text", name: "alias", placeholder: "Type Alias here", style: { "--placeholder-color": "#3284FF" }, value: alias, onChange: handleChange }))),
            react_1.default.createElement("button", { type: "submit", className: "trim_url_button" },
                "Trim URL",
                react_1.default.createElement("img", { className: "button_image", src: Vector_1_copy_png_1.default, alt: "" })),
            react_1.default.createElement("div", { className: "form_text" },
                react_1.default.createElement("a", { className: "text_content_form", href: "#" },
                    "By clicking TrimURL, I agree to the",
                    react_1.default.createElement("b", null, " Terms of Service, Privacy Policy"),
                    " and Use of Cookies."))),
        react_1.default.createElement("div", { className: "lower_vector_form" },
            react_1.default.createElement("img", { className: "vector_D", src: footer_1_png_1.default, alt: "" }),
            react_1.default.createElement("img", { className: "vector_E", src: footer_2_png_1.default, alt: "" }))));
};
exports.default = UrlForm;
