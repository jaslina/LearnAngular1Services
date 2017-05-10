# Angular Services

1. Services are reusable elements in angular codes.
2. can be values,objects,constants and funcitons

### Setting up
1. **Node.js**
2. **Http-server** : a node js application that starts a simple web server and host file from a directory .The files will then be accessible over the http:localhost...
3. **json server** : a nodejs application that lets you create a simple fake *REST API* endpint that serves data from  a json file

After Installing node.js
1. In command prompt
  * node -v
  * npm install http-server -g
  (npm is a command line package manager utility that lets you install node packages and programs into your computer.  -g => to install globally)
  * npm install json-server -g


### Running your application

1. Go to the the dir in cmd
2. Http-server
3. get the address:port and use it in the browser. server takes index.html as the base file to open

---
The API http://api.randomuser.me is a fake user API that provides user object with some fake data.

### Value Services

1. Request angular to use a value that can be used in multiple places
2. 
``` app.value("appNameSvc","value of appName")

```
3. Inject the service to the controller.
``` function Samplecontroller(appNameSvc){}

```

### Constant Services
1. To define a constant value in an application.
2.
  app.constant("appDateSvc","value of appName")


3. Inject the service to the controller.
 function Samplecontroller(appDateSvc){}


4. Difference between *value and constant services* are in *app configuration* where you can use constant and not value

### Factory Service
1. A prepared object is the value of the factory services
2. 
 app.factory("AppFactorySvc",function(){return ...});


3. With a *factory* it is the *angular* that gets to call and execute the function. Which is why it can dependancy injectother services that you need.
``` app.value("AppNameSvc","My new contact App");
function prepareConfig(AppNameSvc){

  var value = {};
    value.name=AppNameSvc;
    value.author="Jaslina";
    value.buildDate = new Date().toDateString();
    return value;
  }

  //prepare config is called as pure js funcitons
  app.value("AppDataSvc", prepareConfig());

  //prepareConfig is executed by Angular
  app.factory("AppFactorySvc", prepareConfig);
  ```
### Service Services
1. The most common and typical use of Angular Services is to *share an object*. You would rarely share a primitive or functions.
2. *Constructors* in javascript are functions to construct objects.
3. when you write a funcion in constructor mode, the javascript engine injects the below lines hypothetically.
``` function AppConfig(AppNameSvc){
  // var this={};

    this.name=AppNameSvc;
    this.author="Jaslina";
    this.buildDate = new Date().toDateString();

  // return this;
}


//Way to call a function in constructor mode

new AppConfig();
```

4. Way to call a function in constructor mode

``` new AppConfig();
```
5. The way to call **Service** service is  
``` app.service("AppDataServiceSvc",AppConfig);  // new AppConfig()

```
6. This will call the *AppConfig* function in constructor mode rather than in **Factory** it is just the execution of the function.


### When to use Factory and Service Services
1. Try to use to Service service because angular 2 onwards use that method.
2. **Service** helps to plugin objects or classes to your js
3. **Factory** can be used if we want to return some values/Primitives. We have complete control over what we are returning.
4. **Service** only return an object (this).

### Best Practices.
1. Write different js for each controller
2. Write different js for each Services.
3. Name service js files like *appname.service.js*
4. We use IIFE ( Immediately invoked Function Expression) to encapsulate variables in a function scope.
``` (function() {
  var app = angular.module("contactApp");
  app.service("AppDataServiceSvc",function (AppNameSvc){
    this.name=AppNameSvc;
    this.author="Jaslina";
    this.buildDate = new Date().toDateString();
});
})();


```
5. Take data out of controller and keep it in a service

### Running a REST API
1. The built in Angular objects and functions have names begining **$** such as *$scope*,*$http*,*$rootScope* etc
2. To use *$http* inject it to the controller as done for other services.
3. USe JSon server to act as fake REST API which use json as backing
  * create a folder data
  * Create db.json file
  * Structure is json file .It should have unique ids
  * run json-server db.json
  * Go to the url we get.

### $http
1. To use get
  $http.get('http://my-api.com/api')


2. To use post
  $http.post('http://my-api.com/api',{'key':'value'})


3. To use put
  $http.put("http://localhost:3000/contacts/"+userData.id, userData)


4. What we get as return of these get and post. => We dont get the actual value. Because of the asynchronous nature of javascript.

### Asynchronous javascript
1. Javascript is usually Single threaded
2. Every operation needs to be non-blocking.
3. Traditionally handled through *callbacks* .
4. In Jquery :
``` $(document).ready(function(){});

```
  We call the ready function  of the jQuery with a function as argument on document object. ie When the document is ready call the function mentioned.
``` $("a").click(function(event){
  alert("You clicked on a link");
  });

```
 The function is executed asynchronously.
 5. The problem with call backs is :  It has a lot of callbacks in heavy application
 6. *$http* uses **Promises**

### Promises

1. A *Promise* represents an operation that hasn't completed yet and expected to be completed in the future.
2. The *then()* method returns a **Promise.** It takes *two arguments: callback functions for the success and failure cases of the Promise.*
3. The Promise object is used for deferred and asynchronous computations.
4. That is, the Promise acts as a placeholder for a value that is not yet computed, but shall be resolved in the future. And the .then() function is used to associate the functions to be invoked on the Promise when it is resolved - either as a success or a failure.
