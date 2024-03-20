"use strict";
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
require("../Styles/main.css");
require("../Styles/login.css");
var react_1 = __importStar(require("react"));
var firebase_1 = require("../firebase");
var firebase_2 = require("../firebase");
var Vector_13_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-13.png"));
var Vector_14_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-14.png"));
var Vector_7_png_1 = __importDefault(require("../Styles/assets/icons/Vector-7.png"));
var Vector_2_2_png_1 = __importDefault(require("../Styles/assets/icons/Vector 2-2.png"));
var footer_7_png_1 = __importDefault(require("../Styles/assets/icons/footer 7.png"));
var icons8_instagram_50_png_1 = __importDefault(require("../Styles/assets/icons/icons8-instagram-50.png"));
var Vector_9_png_1 = __importDefault(require("../Styles/assets/icons/Vector-9.png"));
var Vector_10_png_1 = __importDefault(require("../Styles/assets/icons/Vector-10.png"));
var Vector_2_2_png_2 = __importDefault(require("../Styles/assets/icons/Vector 2-2.png"));
var icons8_c_32_png_1 = __importDefault(require("../Styles/assets/icons/icons8-c-32.png"));
var Vector_9_png_2 = __importDefault(require("../Styles/assets/icons/more icons/Vector-9.png"));
var Vector_10_png_2 = __importDefault(require("../Styles/assets/icons/more icons/Vector-10.png"));
var Vector_11_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-11.png"));
var Vector_12_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-12.png"));
var appleLogo_png_1 = __importDefault(require("../Styles/assets/icons/appleLogo.png"));
var logo_googleg_48dp_png_1 = __importDefault(require("../Styles/assets/icons/more icons/logo_googleg_48dp.png"));
var Vector__1__png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector (1).png"));
var react_router_dom_1 = require("react-router-dom");
var react_router_dom_2 = require("react-router-dom");
var auth_1 = require("firebase/auth");
var LoginPage = function () {
    var _a = (0, react_1.useState)(""), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var navigate = (0, react_router_dom_2.useNavigate)();
    var handleLogin = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, auth_1.signInWithEmailAndPassword)(firebase_1.auth, email, password)];
                case 2:
                    _a.sent();
                    navigate("/dashboard");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Login error:", error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handleGoogleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, firebase_1.signInWithGoogle)()];
                case 1:
                    _a.sent();
                    navigate("/dashboard");
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error("Google login error:", error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleAppleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, firebase_2.signInWithApple)()];
                case 1:
                    _a.sent();
                    navigate("/dashboard");
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error("Apple login error:", error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("main", { className: "main" },
            react_1.default.createElement("form", { onSubmit: handleLogin },
                react_1.default.createElement("p", { className: "login_name" }, "Log in with:"),
                react_1.default.createElement("div", { className: "google_and_apple" },
                    react_1.default.createElement("button", { className: "google", onClick: handleGoogleLogin },
                        " ",
                        react_1.default.createElement("img", { className: "google_img", alt: "", src: logo_googleg_48dp_png_1.default }),
                        " ",
                        react_1.default.createElement("div", null, " Google "),
                        " "),
                    react_1.default.createElement("button", { className: "Apple" },
                        " ",
                        react_1.default.createElement("img", { className: "Apple_img", onClick: handleAppleLogin, alt: "", src: appleLogo_png_1.default }),
                        " ",
                        react_1.default.createElement("div", null, "Apple"))),
                react_1.default.createElement("div", { className: "Or_Axis" },
                    react_1.default.createElement("div", { className: "lineOne" }),
                    react_1.default.createElement("div", { className: "Or_word" }, "Or"),
                    react_1.default.createElement("div", { className: "lineTwo" })),
                react_1.default.createElement("div", { className: "the_actual_login" },
                    react_1.default.createElement("div", { className: "Inputs" },
                        react_1.default.createElement("input", { className: "Email", type: "email", placeholder: "Email address", value: email, onChange: function (e) { return setEmail(e.target.value); }, required: true })),
                    react_1.default.createElement("div", { className: "whole_password" },
                        react_1.default.createElement("input", { className: "Password", type: "password", placeholder: "Password", value: password, onChange: function (e) { return setPassword(e.target.value); }, required: true }),
                        react_1.default.createElement("img", { className: "See_password", alt: "", src: Vector__1__png_1.default })),
                    react_1.default.createElement("div", { className: "forget_password" }, "Forgot your password?")),
                react_1.default.createElement("button", { className: "login_button", type: "submit" }, "Log in")),
            react_1.default.createElement("div", { className: "footer_question" },
                "Don't have an account?",
                " ",
                react_1.default.createElement(react_router_dom_1.Link, { to: "/SignUp", className: "Sign_up" }, "Sign up")),
            react_1.default.createElement("div", { className: "footer_paragraph" },
                " ",
                react_1.default.createElement("p", { className: "text_effect" }, "By signing in with an account, you agree to Sciccor's"),
                " ",
                "Terms of Service, Privacy Policy ",
                react_1.default.createElement("b", { className: "text_effect" }, " and"),
                " ",
                "Acceptable Use Policy.")),
        react_1.default.createElement("div", { className: "main_footer" },
            react_1.default.createElement("div", { className: "footer_vector_one" },
                react_1.default.createElement("img", { className: "vector_A_footer", src: Vector_12_png_1.default, alt: "" }),
                react_1.default.createElement("img", { className: "vector_B_footer", src: Vector_13_png_1.default, alt: "" }),
                react_1.default.createElement("img", { className: "vector_C_footer", src: Vector_14_png_1.default, alt: "" })),
            react_1.default.createElement("footer", { className: "footer" },
                react_1.default.createElement("section", { className: "logo" },
                    react_1.default.createElement("div", { className: "footer_logo_scissors" },
                        react_1.default.createElement("img", { className: "actual_scissor_logo", src: Vector_7_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { className: "actual_scissor_line", src: Vector_2_2_png_1.default, alt: "" }),
                        react_1.default.createElement("div", { className: "footer_scissors_word" },
                            react_1.default.createElement("p", null, "SCISSORS"))),
                    react_1.default.createElement("div", { className: "social_media_logo" },
                        react_1.default.createElement("img", { src: footer_7_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { src: icons8_instagram_50_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { src: Vector_9_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { src: Vector_10_png_1.default, alt: "" }))),
                react_1.default.createElement("section", { className: "sub_footer" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "why_head_footer" }, "Why Scissors?"),
                        react_1.default.createElement("p", null,
                            "Scissor 101",
                            react_1.default.createElement("br", null),
                            "Integrations & API ",
                            react_1.default.createElement("br", null),
                            "Pricing")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "resources_head_footer" }, "Resources"),
                        react_1.default.createElement("p", null,
                            "Blog ",
                            react_1.default.createElement("br", null),
                            "Resource Library ",
                            react_1.default.createElement("br", null),
                            "Developers ",
                            react_1.default.createElement("br", null),
                            "App Connectors ",
                            react_1.default.createElement("br", null),
                            "Support ",
                            react_1.default.createElement("br", null),
                            "Trust Center ",
                            react_1.default.createElement("br", null),
                            "Browser Extension ",
                            react_1.default.createElement("br", null),
                            "Mobile App"))),
                react_1.default.createElement("section", { className: "sub_footer_two" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "solution_head_footer" }, "Solutions"),
                        react_1.default.createElement("p", null,
                            "Social Media ",
                            react_1.default.createElement("br", null),
                            "Digital Marketing ",
                            react_1.default.createElement("br", null),
                            "Customer Service ",
                            react_1.default.createElement("br", null),
                            "For Developers")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "features_head_footer" }, "Features"),
                        react_1.default.createElement("p", null,
                            "Branded Links ",
                            react_1.default.createElement("br", null),
                            "Mobile Links ",
                            react_1.default.createElement("br", null),
                            "Campaign ",
                            react_1.default.createElement("br", null),
                            "Management & ",
                            react_1.default.createElement("br", null),
                            "Analytics ",
                            react_1.default.createElement("br", null),
                            "QR Code generation"))),
                react_1.default.createElement("section", { className: "sub_footer_three" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "products_head_footer" }, "Products"),
                        react_1.default.createElement("p", null,
                            "Link Management ",
                            react_1.default.createElement("br", null),
                            "QR Codes ",
                            react_1.default.createElement("br", null),
                            "Link-in-bio")),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "legal_head_footer" }, "Legal"),
                        react_1.default.createElement("p", null,
                            "Privacy Policy ",
                            react_1.default.createElement("br", null),
                            "Cookie Policy ",
                            react_1.default.createElement("br", null),
                            "Terms of Service ",
                            react_1.default.createElement("br", null),
                            "Acceptable Use Policy ",
                            react_1.default.createElement("br", null),
                            "Code of Conduct"))),
                react_1.default.createElement("section", { className: "sub_footer_four" },
                    react_1.default.createElement("h3", { className: "company_head_footer" }, "Company"),
                    react_1.default.createElement("p", null,
                        "About Scissor ",
                        react_1.default.createElement("br", null),
                        "Careers ",
                        react_1.default.createElement("br", null),
                        "Partners ",
                        react_1.default.createElement("br", null),
                        "Press ",
                        react_1.default.createElement("br", null),
                        "Contact ",
                        react_1.default.createElement("br", null),
                        "Reviews"))),
            react_1.default.createElement("section", { className: "Footer_terms" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("p", null, "Term of Service")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("img", { className: "line_footer", src: Vector_2_2_png_2.default, alt: "" })),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("p", null, "Security")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("img", { className: "line_footer", src: Vector_2_2_png_2.default, alt: "" })),
                react_1.default.createElement("div", { className: "c_scissors" },
                    react_1.default.createElement("img", { className: "c_img", src: icons8_c_32_png_1.default, alt: "" }),
                    react_1.default.createElement("p", null, "Scissor 2023"))),
            react_1.default.createElement("div", { className: "footer_vector_two" },
                react_1.default.createElement("img", { className: "vector_D_footer", src: Vector_9_png_2.default, alt: "" }),
                react_1.default.createElement("img", { className: "vector_E_footer", src: Vector_10_png_2.default, alt: "" }),
                react_1.default.createElement("img", { className: "vector_F_footer", src: Vector_11_png_1.default, alt: "" })))));
};
exports.default = LoginPage;
