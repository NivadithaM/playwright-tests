var Browser = /** @class */ (function () {
    function Browser() {
        //Properties
        this.browserType = 'Chrome';
        this.browserVersion = 136.4;
    }
    //method
    Browser.prototype.launch = function () {
        console.log("Launch the browser");
    };
    Browser.prototype.close = function () {
        console.log("Close the browser");
    };
    return Browser;
}());
//create the object and call the methods and properties
var obj = new Browser();
console.log(obj.browserType);
console.log(obj.browserVersion);
obj.launch();
obj.close();
//for execution -- first convert it to js file and then execute
//tsc Class.ts
//node Class.js
