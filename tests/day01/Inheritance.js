var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Browser1 = /** @class */ (function () {
    function Browser1() {
    }
    Browser1.prototype.browserType = function () {
        console.log("Browser");
    };
    Browser1.prototype.browserVersion = function () {
        console.log("134.56");
    };
    return Browser1;
}());
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chrome.prototype.launchBrowser = function () {
        console.log("Launched chrome broswer");
    };
    return Chrome;
}(Browser1));
var object = new Chrome();
object.browserType();
object.browserVersion();
object.launchBrowser();
