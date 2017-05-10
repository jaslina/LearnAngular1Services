(function (){
  var app = angular.module("contactApp");
  app.controller("ContactCtrl",ContactCtrl);


  function ContactCtrl(ContactDataSvc,$http){

    var self = this;

    ContactDataSvc.getContacts().then(function(data){
      self.contacts = data;
    })

    // $http.get("http://localhost:3000/contacts")
    // .then(function(response){
    //   self.contacts = response.data;
    // });
    //this.contacts =ContactDataSvc.contacts;
    //this.selectedContact = self.contacts[0];


    this.selectContact = function(index){
      this.selectedContact = this.contacts[index];
    }


  }
})();
