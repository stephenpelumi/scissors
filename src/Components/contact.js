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
require("../Styles/contact.css");
var react_1 = __importStar(require("react"));
var Vector_6_png_1 = __importDefault(require("../Styles/assets/icons/Vector-6.png"));
var Vector_2_3_png_1 = __importDefault(require("../Styles/assets/icons/Vector 2-3.png"));
var Vector_copy_5_png_1 = __importDefault(require("../Styles/assets/icons/Vector copy 5.png"));
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
var unsplash_Evp4iNF3DHQ_png_1 = __importDefault(require("../Styles/assets/images/unsplash_Evp4iNF3DHQ.png"));
var Untitled_1_2_png_1 = __importDefault(require("../Styles/assets/images/Untitled-1 2.png"));
var react_router_dom_1 = require("react-router-dom");
var styles = {
    background: "url(".concat(unsplash_Evp4iNF3DHQ_png_1.default, "), url(").concat(Untitled_1_2_png_1.default, ")"),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
var CountryDropdown = function () {
    var _a = (0, react_1.useState)([]), countries = _a[0], setCountries = _a[1];
    var fetchCountries = function () { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://restcountries.com/v3.1/all")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.log("Error fetching countries:", error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var populateCountries = function (countriesData) {
        countriesData.sort(function (a, b) {
            var countryA = a.name.common.toUpperCase();
            var countryB = b.name.common.toUpperCase();
            if (countryA < countryB)
                return -1;
            if (countryA > countryB)
                return 1;
            return 0;
        });
        setCountries(countriesData);
    };
    (0, react_1.useEffect)(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var countriesData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchCountries()];
                    case 1:
                        countriesData = _a.sent();
                        populateCountries(countriesData);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, []);
    return (react_1.default.createElement("select", { id: "countrySelect" },
        react_1.default.createElement("option", { value: "", disabled: true, selected: true }, "Please Select"),
        countries.map(function (country) { return (react_1.default.createElement("option", { key: country.alpha3Code, value: country.alpha3Code }, country.name.common)); })));
};
function LoginPage() {
    return (react_1.default.createElement("div", { className: "container", style: styles },
        react_1.default.createElement("header", { className: "hero_section" },
            react_1.default.createElement("div", { className: "scissors" },
                react_1.default.createElement("img", { className: "Hero_Logo", src: Vector_6_png_1.default, alt: "" }),
                react_1.default.createElement("img", { className: "Hero_Line", src: Vector_2_3_png_1.default, alt: "" }),
                react_1.default.createElement("div", null, "SCISSORS")),
            react_1.default.createElement("nav", { className: "all_navigator" },
                react_1.default.createElement("ul", { className: "Hero_Nav" },
                    react_1.default.createElement("li", { className: "hero_url" }, "My URLs"),
                    react_1.default.createElement("li", null,
                        "Features",
                        react_1.default.createElement("img", { className: "hero_features", src: Vector_copy_5_png_1.default, alt: "" })),
                    react_1.default.createElement("li", null, "Pricing"),
                    react_1.default.createElement("li", null, "Analytics"),
                    react_1.default.createElement("li", null, "FAQs")),
                react_1.default.createElement("div", { className: "hero_button" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/login", className: "hero_login" }, "Log in"),
                    react_1.default.createElement("button", { className: "hero_try_for_free" }, "Try for free")))),
        react_1.default.createElement("div", { className: "Header" },
            react_1.default.createElement("p", null, "Let's get in touch")),
        react_1.default.createElement("main", { className: "main_contact" },
            react_1.default.createElement("form", { className: "form" },
                react_1.default.createElement("section", { className: "first_section" },
                    react_1.default.createElement("div", { className: "first_name" },
                        react_1.default.createElement("div", { className: "fname" }, "First Name*"),
                        react_1.default.createElement("input", { type: "text", className: "input-field fname", name: "fname", required: true })),
                    react_1.default.createElement("div", { className: "last_name" },
                        react_1.default.createElement("div", { className: "lname" }, "Last Name*"),
                        react_1.default.createElement("input", { type: "text", className: "input-field lname", name: "lname", required: true }))),
                react_1.default.createElement("section", { className: "second_section" },
                    react_1.default.createElement("div", { className: "Company" },
                        react_1.default.createElement("div", { className: "company_name" }, "Company Name*"),
                        react_1.default.createElement("input", { type: "text", name: "cname", className: "input-field cname", required: true }))),
                react_1.default.createElement("section", { className: "third_section" },
                    react_1.default.createElement("div", { className: "Businessname" },
                        react_1.default.createElement("div", { className: "business_name" }, "Business Email Address*"),
                        react_1.default.createElement("input", { type: "email", name: "bname", className: "input-field bname", required: true }))),
                react_1.default.createElement("section", { className: "fourth_section" },
                    react_1.default.createElement("div", { className: "phone_number" },
                        react_1.default.createElement("div", { className: "Phone" }, "Phone Number*"),
                        react_1.default.createElement("input", { type: "number", className: "input-field pname", required: true }))),
                react_1.default.createElement("section", { className: "fifth_section" },
                    react_1.default.createElement("div", { className: "job" },
                        react_1.default.createElement("div", { className: "job_title" }, "Job Title*"),
                        react_1.default.createElement("select", { name: "job_level", className: "select-field job_level", id: "activity", required: true },
                            react_1.default.createElement("option", { value: "", disabled: true, selected: true, hidden: true }, "Please Select"),
                            react_1.default.createElement("option", { value: "Analyst" }, "Analyst"),
                            react_1.default.createElement("option", { value: "Associate" }, "Associate"),
                            react_1.default.createElement("option", { value: "Team Lead" }, "Team Lead"),
                            react_1.default.createElement("option", { value: "Manager" }, "Manager"),
                            react_1.default.createElement("option", { value: "Director" }, "Director"),
                            react_1.default.createElement("option", { value: "Vice President" }, "Vice President"),
                            react_1.default.createElement("option", { value: "President" }, "President"),
                            react_1.default.createElement("option", { value: "CEO" }, "CEO")))),
                react_1.default.createElement("section", { className: "sixth_section" },
                    react_1.default.createElement("div", { className: "Company_Size" },
                        react_1.default.createElement("div", { className: "company_size_option" }, "Company Size*"),
                        react_1.default.createElement("select", { name: "company_size", className: "select-field csize", required: true },
                            react_1.default.createElement("option", { value: "", disabled: true, selected: true, hidden: true }, "Please Select"),
                            react_1.default.createElement("option", { value: "1-99" }, "1-100"),
                            react_1.default.createElement("option", { value: "100-1,000" }, "100-1,000"),
                            react_1.default.createElement("option", { value: "1,001-10,000" }, "1,000-10,000"),
                            react_1.default.createElement("option", { value: "10,000 and above" }, "10,000 and above")))),
                react_1.default.createElement("section", { className: "seventh_section" },
                    react_1.default.createElement("div", { className: "use_case" },
                        react_1.default.createElement("div", { className: "usecase" },
                            " ",
                            "Primary Use Case*"),
                        react_1.default.createElement("select", { className: "select-field usecase", required: true },
                            react_1.default.createElement("option", { value: "", disabled: true, selected: true, hidden: true }, "Please Select"),
                            react_1.default.createElement("option", { value: "Self" }, "Self"),
                            react_1.default.createElement("option", { value: "For Business" }, "For Business"),
                            react_1.default.createElement("option", { value: "For Education" }, "For Education")))),
                react_1.default.createElement("section", { className: "eight_section" },
                    react_1.default.createElement("div", { className: "countries" },
                        react_1.default.createElement("div", { className: "country_option" }, "Select your Country*"),
                        react_1.default.createElement(CountryDropdown, null))),
                react_1.default.createElement("p", { className: "checklist" }, "Scissor requires the contact information you provide in order to reach out to you regarding our products and services. You have the option to unsubscribe from these communications whenever you wish. To learn more about how to unsubscribe, our privacy practices, and our dedication to safeguarding your privacy, please refer to our Privacy Policy."),
                react_1.default.createElement("button", { className: "Submit" }, "Submit"))),
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
}
exports.default = LoginPage;
