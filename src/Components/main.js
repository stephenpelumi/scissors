"use strict";
// @ts-ignore
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
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var react_2 = require("react");
var urlForm_1 = __importDefault(require("./urlForm"));
require("../Styles/main.css");
var Vector_6_png_1 = __importDefault(require("../Styles/assets/icons/Vector-6.png"));
var Vector_2_3_png_1 = __importDefault(require("../Styles/assets/icons/Vector 2-3.png"));
var Vector_copy_5_png_1 = __importDefault(require("../Styles/assets/icons/Vector copy 5.png"));
var Vector_3_png_1 = __importDefault(require("../Styles/assets/icons/Vector 3.png"));
var Vector_2_png_1 = __importDefault(require("../Styles/assets/icons/Vector 2.png"));
var Vector_2_png_2 = __importDefault(require("../Styles/assets/icons/Vector-2.png"));
var Vector_3_png_2 = __importDefault(require("../Styles/assets/icons/Vector-3.png"));
var Line_7_png_1 = __importDefault(require("../Styles/assets/icons/Line 7.png"));
var Rectangle_9_png_1 = __importDefault(require("../Styles/assets/icons/Rectangle 9.png"));
var Ellipse_1_png_1 = __importDefault(require("../Styles/assets/icons/Ellipse 1.png"));
var Line_70_1_png_1 = __importDefault(require("../Styles/assets/icons/Line 70-1.png"));
var Vector_copy_png_1 = __importDefault(require("../Styles/assets/icons/Vector copy.png"));
var Vector_1_copy_png_1 = __importDefault(require("../Styles/assets/icons/Vector-1 copy.png"));
var link_2_png_1 = __importDefault(require("../Styles/assets/icons/link-2.png"));
var grid_png_1 = __importDefault(require("../Styles/assets/icons/grid.png"));
var edit_copy_png_1 = __importDefault(require("../Styles/assets/icons/edit copy.png"));
var activity_png_1 = __importDefault(require("../Styles/assets/icons/activity.png"));
var Vector_2_copy_png_1 = __importDefault(require("../Styles/assets/icons/Vector-2 copy.png"));
var Vector_3_copy_png_1 = __importDefault(require("../Styles/assets/icons/Vector-3 copy.png"));
var Vector_copy_png_2 = __importDefault(require("../Styles/assets/icons/Vector copy.png"));
// import vector_A from "../Styles/assets/icons/Vector-8 copy.png";
// import vector_B from "../Styles/assets/icons/Vector-9 copy.png";
// import vector_C from "../Styles/assets/icons/vector 10.png";
// import arrow_down_img from "../Styles/assets/icons/Vector copy 2.png";
// import button_image from "../Styles/assets/icons/Vector 1 copy.png";
// import vector_D from "../Styles/assets/icons/footer 1.png";
// import vector_E from "../Styles/assets/icons/footer 2.png";
var Vector_2_copy_2_png_1 = __importDefault(require("../Styles/assets/icons/Vector-2 copy 2.png"));
var Vector_1_copy_2_png_1 = __importDefault(require("../Styles/assets/icons/Vector-1 copy 2.png"));
var Vector_copy_3_png_1 = __importDefault(require("../Styles/assets/icons/Vector copy 3.png"));
var Line_70_1_png_2 = __importDefault(require("../Styles/assets/icons/Line 70-1.png"));
var Vector_1_copy_3_png_1 = __importDefault(require("../Styles/assets/icons/Vector-1 copy 3.png"));
var Vector_4_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector 4.png"));
var icons8_plus_24_png_1 = __importDefault(require("../Styles/assets/icons/icons8-plus-24.png"));
var Vector_1_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-1.png"));
var Vector_2_png_3 = __importDefault(require("../Styles/assets/icons/more icons/Vector-2.png"));
var Vector_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector.png"));
var Vector_6_png_2 = __importDefault(require("../Styles/assets/icons/more icons/Vector-6.png"));
var Vector_7_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-7.png"));
var Vector_8_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-8.png"));
var Vector_3_png_3 = __importDefault(require("../Styles/assets/icons/more icons/Vector-3.png"));
var Vector_4_png_2 = __importDefault(require("../Styles/assets/icons/more icons/Vector-4.png"));
var Vector_5_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-5.png"));
var Vector_12_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-12.png"));
var Vector_13_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-13.png"));
var Vector_14_png_1 = __importDefault(require("../Styles/assets/icons/more icons/Vector-14.png"));
var Vector_7_png_2 = __importDefault(require("../Styles/assets/icons/Vector-7.png"));
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
var BurgerMenu = function () {
    var _a = (0, react_2.useState)(false), isNavVisible = _a[0], setIsNavVisible = _a[1];
    var toggleNav = function () {
        setIsNavVisible(!isNavVisible);
    };
    return (react_1.default.createElement("div", { className: "burger-menu-container" },
        react_1.default.createElement("button", { className: "js-fh5co-nav-toggle", onClick: toggleNav }, isNavVisible ? 'Close Menu' : 'Open Menu'),
        react_1.default.createElement("nav", { className: "ftco-nav ".concat(isNavVisible ? 'active' : '') })));
};
var Main = function () {
    var _a = (0, react_2.useState)(''), longUrl = _a[0], setLongUrl = _a[1];
    var _b = (0, react_2.useState)(''), domain = _b[0], setDomain = _b[1];
    var _c = (0, react_2.useState)(''), alias = _c[0], setAlias = _c[1];
    var _d = (0, react_2.useState)(''), shortenedUrl = _d[0], setShortenedUrl = _d[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('http://localhost:2000/shorten-url', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ longUrl: longUrl, domain: domain, alias: alias }),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    setShortenedUrl(data.shortenedUrl);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error shortening URL:', error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("header", { className: "hero_section" },
            react_1.default.createElement("div", { className: "scissors" },
                react_1.default.createElement("img", { className: "Hero_Logo", src: Vector_6_png_1.default, alt: "" }),
                react_1.default.createElement("img", { className: "Hero_Line", src: Vector_2_3_png_1.default, alt: "" }),
                react_1.default.createElement("div", null, "SCISSORS")),
            react_1.default.createElement("nav", { className: "all_navigator ftco-nav" },
                react_1.default.createElement("div", { className: "container_nav" },
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
                        react_1.default.createElement("button", { className: "hero_try_for_free" }, "Try for free"))))),
        react_1.default.createElement("main", null,
            react_1.default.createElement("article", null,
                react_1.default.createElement("section", { className: "content_for_central" },
                    react_1.default.createElement("p", { className: "Bolder_Text" },
                        "Optimize Your Online Experience with Our ",
                        react_1.default.createElement("br", null),
                        "Advanced",
                        react_1.default.createElement("b", { className: "url_text" },
                            " ",
                            "URL Shortening",
                            react_1.default.createElement("img", { className: "url_underline", src: Vector_3_png_1.default, alt: "" }),
                            " "),
                        "Solution"),
                    react_1.default.createElement("p", { className: "smaller_text" },
                        "Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, ",
                        react_1.default.createElement("br", null),
                        "branded links, and domain customization options to reinforce your brand presence and ",
                        react_1.default.createElement("br", null),
                        "enhance user engagement.")),
                react_1.default.createElement("section", { className: "button_signup_learnMore" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/SignUp", className: "button_signup" }, "Sign Up"),
                    react_1.default.createElement("button", { className: "button_learnmore" }, "Learn More")),
                react_1.default.createElement("section", null,
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("img", { className: "vector_one", src: Vector_2_png_1.default, alt: "" }),
                        react_1.default.createElement("div", { className: "transformation_container" },
                            react_1.default.createElement("div", { className: "the_vectors" },
                                react_1.default.createElement("img", { className: "vector_three", src: Vector_2_png_2.default, alt: "" }),
                                react_1.default.createElement("img", { className: "vector_two", src: Vector_3_png_2.default, alt: "" }),
                                react_1.default.createElement("img", { className: "vector_three", src: Vector_2_png_2.default, alt: "" }),
                                react_1.default.createElement("img", { className: "vector_two", src: Vector_3_png_2.default, alt: "" }),
                                react_1.default.createElement("img", { className: "vector_three", src: Vector_2_png_2.default, alt: "" }),
                                react_1.default.createElement("img", { className: "vector_two", src: Vector_3_png_2.default, alt: "" }),
                                react_1.default.createElement("img", { id: "arrow", src: Line_7_png_1.default, alt: "" }),
                                react_1.default.createElement("img", { className: "vector_three", src: Vector_2_png_2.default, alt: "" }),
                                react_1.default.createElement("img", { className: "vector_two", src: Vector_3_png_2.default, alt: "" })),
                            react_1.default.createElement("div", { className: "content_transform" },
                                react_1.default.createElement("p", null,
                                    "Seamlessly transform your long URLs into concise and ",
                                    react_1.default.createElement("br", null),
                                    "shareable links with just few clicks."))))),
                react_1.default.createElement("section", null,
                    react_1.default.createElement("div", { className: "elipse" },
                        react_1.default.createElement("img", { src: Ellipse_1_png_1.default, alt: "elispe" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("img", { className: "rectangle", src: Rectangle_9_png_1.default, alt: "" })),
                    react_1.default.createElement("div", { className: "Frame" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("p", { className: "metric_text" },
                                "One Stop.",
                                react_1.default.createElement("br", null),
                                "Four ",
                                react_1.default.createElement("b", { className: "possibilities" }, "Possibilities"),
                                ".")),
                        react_1.default.createElement("div", { className: "actual_metric" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("b", { className: "bold_metric" }, " 3M "),
                                react_1.default.createElement("p", { className: "small_metric" }, "Active user")),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("b", { className: "bold_metric" }, " 60M "),
                                react_1.default.createElement("p", { className: "small_metric" },
                                    "Links & QR ",
                                    react_1.default.createElement("br", null),
                                    "codes created")),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("b", { className: "bold_metric" }, " 1B "),
                                react_1.default.createElement("p", { className: "small_metric" },
                                    "Clicked & Scanned",
                                    react_1.default.createElement("br", null),
                                    "connections")),
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("b", { className: "bold_metric" }, " 300k "),
                                react_1.default.createElement("p", { className: "small_metric" }, "App Integrations")))))),
            react_1.default.createElement("article", { className: "whole_why_content" },
                react_1.default.createElement("section", null,
                    react_1.default.createElement("div", { className: "why_content" },
                        react_1.default.createElement("img", { src: Line_70_1_png_1.default, alt: "" }),
                        react_1.default.createElement("div", { className: "why_head" },
                            "Why choose ",
                            react_1.default.createElement("b", { className: "scissors_text" }, "Scissors"))),
                    react_1.default.createElement("p", { className: "actual_why_content" }, "Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none.")),
                react_1.default.createElement("section", null,
                    react_1.default.createElement("div", { className: "whole_URL" },
                        react_1.default.createElement("img", { className: "why_img", src: link_2_png_1.default, alt: "" }),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("b", { className: "URL" }, " URL Shortening "),
                            react_1.default.createElement("p", { className: "URL_content" }, "Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects."))),
                    react_1.default.createElement("div", { className: "whole_QR" },
                        react_1.default.createElement("img", { className: "why_img", src: grid_png_1.default, alt: "" }),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("b", { className: "QR" }, " QR Codes "),
                            react_1.default.createElement("p", { className: "QR_content" }, "Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.")))),
                react_1.default.createElement("section", null,
                    react_1.default.createElement("div", { className: "whole_custom" },
                        react_1.default.createElement("img", { className: "why_img", src: edit_copy_png_1.default, alt: "" }),
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("b", { className: "custom" }, " Custom URLs "),
                            react_1.default.createElement("p", { className: "custom_content" }, "With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.")),
                        react_1.default.createElement("div", { className: "whole_data" },
                            react_1.default.createElement("div", null,
                                react_1.default.createElement("img", { className: "why_img", src: activity_png_1.default, alt: "" })),
                            react_1.default.createElement("b", { className: "data" }, " Data Analytics "),
                            react_1.default.createElement("p", { className: "data_content" }, "Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress."))))),
            react_1.default.createElement("article", { className: "whole_pricing" },
                react_1.default.createElement("section", null,
                    react_1.default.createElement("div", { className: "price_heading" },
                        react_1.default.createElement("img", { src: Line_70_1_png_1.default, alt: "" }),
                        react_1.default.createElement("div", { className: "heading_word" },
                            "A ",
                            react_1.default.createElement("b", { className: "price_highlight" }, "price perfect"),
                            " for your needs.")),
                    react_1.default.createElement("p", { className: "price_content" },
                        "From catering for your personal, business, event, socials needs, you can be ",
                        react_1.default.createElement("br", null),
                        "rest assured we have you in mind in our pricing.")),
                react_1.default.createElement("section", { className: "the_whole_plan" },
                    react_1.default.createElement("div", { className: "basic_plan_container" },
                        react_1.default.createElement("div", { className: "basic_word" }, "Basic"),
                        react_1.default.createElement("p", { className: "free_content" },
                            react_1.default.createElement("b", { className: "free_word" }, "Free"),
                            react_1.default.createElement("br", null),
                            "Free plan for all users"),
                        react_1.default.createElement("ul", { className: "whole_thick" },
                            react_1.default.createElement("li", { className: "first_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_four", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Unlimited URL Shortening")),
                            react_1.default.createElement("li", { className: "second_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_four", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Basic Link Analytics")),
                            react_1.default.createElement("li", { className: "third_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_four", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Customizable Short Links")),
                            react_1.default.createElement("li", { className: "fourth_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_four", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Standard Support")),
                            react_1.default.createElement("li", { className: "fifth_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_four", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Ad-supported")))),
                    react_1.default.createElement("div", { className: "professional_container" },
                        react_1.default.createElement("div", { className: "professional_word" }, "Professional"),
                        react_1.default.createElement("p", { className: "month_content" },
                            react_1.default.createElement("b", { className: "month_word" }, "$15/month"),
                            react_1.default.createElement("br", null),
                            "Ideal for business creators"),
                        react_1.default.createElement("ul", { className: "whole_thick" },
                            react_1.default.createElement("li", { className: "first_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_2_copy_png_1.default, alt: "vector" }),
                                    react_1.default.createElement("img", { className: "vector_five", src: Vector_3_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Enhanced Link Analytics")),
                            react_1.default.createElement("li", { className: "second_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_2_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_five", src: Vector_3_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Custom Branded Domains")),
                            react_1.default.createElement("li", { className: "third_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_2_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_five", src: Vector_3_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Advanced Link Customization")),
                            react_1.default.createElement("li", { className: "fourth_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_2_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_five", src: Vector_3_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Priority Support")),
                            react_1.default.createElement("li", { className: "fifth_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_2_copy_png_1.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_five", src: Vector_3_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Ad-free Experience")))),
                    react_1.default.createElement("div", { className: "teams_plan_container" },
                        react_1.default.createElement("div", { className: "teams_word" }, "Teams"),
                        react_1.default.createElement("p", { className: "month_content" },
                            react_1.default.createElement("b", { className: "month_word" }, "$25/month"),
                            react_1.default.createElement("br", null),
                            "Share with up to 10 users"),
                        react_1.default.createElement("ul", { className: "whole_thick" },
                            react_1.default.createElement("li", { className: "first_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_2.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_six", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Team Collaboration")),
                            react_1.default.createElement("li", { className: "second_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_2.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_six", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "User Roles and Permissions")),
                            react_1.default.createElement("li", { className: "third_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_2.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_six", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Enhanced Security")),
                            react_1.default.createElement("li", { className: "fourth_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_2.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_six", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "API Access")),
                            react_1.default.createElement("li", { className: "fifth_thick" },
                                react_1.default.createElement("div", null,
                                    react_1.default.createElement("img", { src: Vector_copy_png_2.default, alt: "" }),
                                    react_1.default.createElement("img", { className: "vector_six", src: Vector_1_copy_png_1.default, alt: "" })),
                                react_1.default.createElement("div", null, "Dedicated Account Manager"))))),
                react_1.default.createElement("section", { className: "price_button" },
                    react_1.default.createElement("button", { className: "get_button" }, "Get Custom Pricing"),
                    react_1.default.createElement("button", { className: "select_button" }, "Select Pricing"))),
            react_1.default.createElement(urlForm_1.default, null),
            react_1.default.createElement("article", null,
                react_1.default.createElement("div", { className: "questioning_section" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("img", { className: "vector_F", src: Vector_2_copy_2_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { className: "vector_G", src: Vector_1_copy_2_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { className: "vector_H", src: Vector_copy_3_png_1.default, alt: "" })),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("div", { className: "FAQ_head" },
                            react_1.default.createElement("img", { src: Line_70_1_png_2.default, alt: "" }),
                            react_1.default.createElement("div", { className: "FAQ_word" }, "FAQs")),
                        react_1.default.createElement("section", { className: "whole_FAQ_content" },
                            react_1.default.createElement("div", { className: "how_FAQ" },
                                react_1.default.createElement("div", null, "How does URL shortening work?"),
                                react_1.default.createElement("img", { className: "minus", src: Vector_1_copy_3_png_1.default, alt: "" })),
                            react_1.default.createElement("div", { className: "how_FAQ_content" },
                                react_1.default.createElement("p", null, "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.")),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_one" },
                                react_1.default.createElement("div", null, "Is it necessary to create an account to use the URL shortening service?"),
                                react_1.default.createElement("img", { className: "plus", src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_two" },
                                react_1.default.createElement("div", null, "Are the shortened links permanent? Will they expire?"),
                                react_1.default.createElement("img", { src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_three" },
                                react_1.default.createElement("div", null, "Are there any limitations on the number of URLs I can shorten?"),
                                react_1.default.createElement("img", { src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_four" },
                                react_1.default.createElement("div", null, "Can I customize the shortened URLs to reflect my brand or content?"),
                                react_1.default.createElement("img", { src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_five" },
                                react_1.default.createElement("div", null, "Can I track the performance of my shortened URLs?"),
                                react_1.default.createElement("img", { src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_six" },
                                react_1.default.createElement("div", null,
                                    "How secure is the URL shortening service? Are the shortened links protected ",
                                    react_1.default.createElement("br", null),
                                    "against spam or malicious activity?"),
                                react_1.default.createElement("img", { className: "question_six_plus", src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_seven" },
                                react_1.default.createElement("div", null, "What is a QR code and what can it do?"),
                                react_1.default.createElement("img", { src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }),
                            react_1.default.createElement("div", { className: "question_eight" },
                                react_1.default.createElement("div", null,
                                    "Is there an API available for integrating the URL shortening service into my own ",
                                    react_1.default.createElement("br", null),
                                    "applications or websites?"),
                                react_1.default.createElement("img", { className: "question_eight_plus", src: icons8_plus_24_png_1.default, alt: "" })),
                            react_1.default.createElement("img", { className: "underline", src: Vector_4_png_1.default, alt: "" }))),
                    react_1.default.createElement("div", { className: "FAQ_vectors" },
                        react_1.default.createElement("img", { className: "FAQ_vector_one", src: Vector_1_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { className: "FAQ_vector_two", src: Vector_2_png_3.default, alt: "" }),
                        react_1.default.createElement("img", { className: "FAQ_vector_three", src: Vector_png_1.default, alt: "" })))),
            react_1.default.createElement("article", null,
                react_1.default.createElement("section", { className: "whole_revolution" },
                    react_1.default.createElement("div", { className: "upper_vector_revolution" },
                        react_1.default.createElement("img", { className: "uppervector_one", src: Vector_6_png_2.default, alt: "" }),
                        react_1.default.createElement("img", { className: "uppervector_two", src: Vector_7_png_1.default, alt: "" }),
                        react_1.default.createElement("img", { className: "uppervector_three", src: Vector_8_png_1.default, alt: "" })),
                    react_1.default.createElement("div", { className: "revolution_content" },
                        react_1.default.createElement("div", { className: "revolution_word" },
                            react_1.default.createElement("p", null, "Revolutionizing Link Optimization")),
                        react_1.default.createElement("button", { className: "get_started_button" }, "Get Started")),
                    react_1.default.createElement("div", { className: "lower_vector_revolution" },
                        react_1.default.createElement("img", { className: "uppervector_four", src: Vector_3_png_3.default, alt: "" }),
                        react_1.default.createElement("img", { className: "uppervector_five", src: Vector_4_png_2.default, alt: "" }),
                        react_1.default.createElement("img", { className: "uppervector_six", src: Vector_5_png_1.default, alt: "" }))))),
        react_1.default.createElement("div", { className: "main_footer" },
            react_1.default.createElement("div", { className: "footer_vector_one" },
                react_1.default.createElement("img", { className: "vector_A_footer", src: Vector_12_png_1.default, alt: "" }),
                react_1.default.createElement("img", { className: "vector_B_footer", src: Vector_13_png_1.default, alt: "" }),
                react_1.default.createElement("img", { className: "vector_C_footer", src: Vector_14_png_1.default, alt: "" })),
            react_1.default.createElement("footer", { className: "footer" },
                react_1.default.createElement("section", { className: "logo" },
                    react_1.default.createElement("div", { className: "footer_logo_scissors" },
                        react_1.default.createElement("img", { className: "actual_scissor_logo", src: Vector_7_png_2.default, alt: "" }),
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
                        react_1.default.createElement(react_router_dom_1.Link, { className: "contact-text", to: "Contact" },
                            "Contact ",
                            react_1.default.createElement("br", null)),
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
exports.default = Main;
