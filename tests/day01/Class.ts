class Browser{

    //Properties

    browserType:String='Chrome'
    browserVersion:Number=136.4
    //method

    launch(){
        console.log("Launch the browser")
    }

    close(){
        console.log("Close the browser")
    }

}
//create the object and call the methods and properties

const obj=new Browser()

console.log(obj.browserType)
console.log(obj.browserVersion)

obj.launch()
obj.close()

//for execution -- first convert it to js file and then execute
           //tsc Class.ts
           //node Class.js

