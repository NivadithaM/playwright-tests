class Browser1{

      browserType(){
        console.log("Browser")
      }

      browserVersion(){
        console.log("134.56")
      }

}

class Chrome extends Browser1{

    launchBrowser(){
        console.log("Launched chrome broswer")
    }

}
const object=new Chrome()
    object.browserType()
    object.browserVersion()
    object.launchBrowser()
