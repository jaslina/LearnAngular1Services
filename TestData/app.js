
var app = angular.module("contactApp",[]);
app.controller("ContactCtrl",ContactCtrl);

app.controller("HeaderController",HeaderController);
app.controller("FooterController",FooterController);

app.value("AppNameSvc","My new contact App");
function prepareConfig(AppNameSvc){

  var value = {};
  value.name=AppNameSvc;
  value.author="Jaslina";
  value.buildDate = new Date().toDateString();
  return value;
}

//constructor mode function
function AppConfig(AppNameSvc){
  // var this={};

    this.name=AppNameSvc;
    this.author="Jaslina";
    this.buildDate = new Date().toDateString();

  // return this;
}
  //prepare config is called as pure js funcitons
  app.value("AppDataSvc", prepareConfig());

  app.value("LoggingSvc",function(){
    console.log("Hello from LoggingSvc");
  })
  //prepareConfig is executed by Angular
  app.factory("AppFactorySvc", prepareConfig);
  app.service("AppDataServiceSvc",AppConfig);




  function ContactCtrl(){
    this.contacts =[
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "romain",
          "last": "hoogmoed"
        },
        "location": {
          "street": "1861 jan pieterszoon coenstraat",
          "city": "maasdriel",
          "state": "zeeland",
          "postcode": 69217
        },
        "email": "romain.hoogmoed@example.com",
        "login": {
          "username": "lazyduck408",
          "password": "jokers",
          "salt": "UGtRFz4N",
          "md5": "6d83a8c084731ee73eb5f9398b923183",
          "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
          "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
        },
        "dob": "1983-07-14 07:29:45",
        "registered": "2010-09-24 02:10:42",
        "phone": "(656)-976-4980",
        "cell": "(065)-247-9303",
        "id": {
          "name": "BSN",
          "value": "04242023"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/83.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
        },
        "nat": "NL"
      },
      {
        "gender": "female",
        "name": {
          "title": "mrs",
          "first": "Jaslina",
          "last": "kalai kuni"
        },
        "location": {
          "street": "24 skytop gardens",
          "city": "parlin",
          "state": "nj",
          "postcode": 69217
        },
        "email": "romain.hoogmoed@example.com",
        "login": {
          "username": "lazyduck408",
          "password": "jokers",
          "salt": "UGtRFz4N",
          "md5": "6d83a8c084731ee73eb5f9398b923183",
          "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
          "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
        },
        "dob": "1983-07-14 07:29:45",
        "registered": "2010-09-24 02:10:42",
        "phone": "(656)-976-4980",
        "cell": "(065)-247-9303",
        "id": {
          "name": "BSN",
          "value": "04242023"
        },
        "picture": {
          "large":"https://randomuser.me/api/portraits/men/12.jpg",
          "medium":"https://randomuser.me/api/portraits/med/men/12.jpg",
          "thumbnail":"https://randomuser.me/api/portraits/thumb/men/12.jpg"
        },
        "nat": "NL"
      },
      {
        "gender": "male",
        "name": {
          "title": "mr",
          "first": "bajal",
          "last": "mohiyudeen"
        },
        "location": {
          "street": "1861 port authority",
          "city": "new york",
          "state": "new york",
          "postcode": 69217
        },
        "email": "romain.hoogmoed@example.com",
        "login": {
          "username": "lazyduck408",
          "password": "jokers",
          "salt": "UGtRFz4N",
          "md5": "6d83a8c084731ee73eb5f9398b923183",
          "sha1": "cb21097d8c430f2716538e365447910d90476f6e",
          "sha256": "5a9b09c86195b8d8b01ee219d7d9794e2abb6641a2351850c49c309f1fc204a0"
        },
        "dob": "1983-07-14 07:29:45",
        "registered": "2010-09-24 02:10:42",
        "phone": "(656)-976-4980",
        "cell": "(065)-247-9303",
        "id": {
          "name": "BSN",
          "value": "04242023"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/83.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
        },
        "nat": "NL"
      },

    ];
    this.selectedContact = this.contacts[0];
    this.selectContact = function(index){
      this.selectedContact = this.contacts[index];
    }


  }
  // function HeaderController(AppDataSvc,LoggingSvc,AppFactorySvc){
  //   this.appTitle = AppFactorySvc.name;
  //   LoggingSvc();
  //
  // }
  // function FooterController(AppDataSvc,LoggingSvc,AppFactorySvc){
  //   this.appTitle = AppDataSvc.name;
  //   LoggingSvc();
  //   console.log(AppFactorySvc);
  // }
  function HeaderController(AppFactorySvc){
    this.appTitle = AppFactorySvc.name;


  }
  function FooterController(AppDataServiceSvc){
    this.appTitle = AppDataServiceSvc.name;
    this.buildDate= AppDataServiceSvc.buildDate;
  }
