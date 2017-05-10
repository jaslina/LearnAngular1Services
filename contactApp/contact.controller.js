(function (){
  var app = angular.module("contactApp");
  app.controller("ContactCtrl",ContactCtrl);


  function ContactCtrl(ContactDataSvc,$http){

    var self = this;
    self.editMode = false;
    self.addMode = false;

    ContactDataSvc.getContacts().then(function(data){
      self.contacts = data;
    })

    this.selectContact = function(index){
      this.selectedContact = this.contacts[index];
      self.successMessage = undefined;
      self.errorMessage = undefined;
    }

    this.toggleEditMode = function(){
      this.editMode = !this.editMode;
    }

    this.saveUser = function(){
      this.toggleEditMode();
      var userData = this.selectedContact;
      if(this.addMode){
        ContactDataSvc.createUser(userData).then(function(){
          self.successMessage = "Data Successfully Added";
        },function(){
          self.errorMessage = "There was an error. Please try again!";
        }

      );
      this.addMode = false;
      }
      else{
        ContactDataSvc.saveUser(userData).then(function(){
          self.successMessage = "Data Successfully Updated";
        },function(){
          self.errorMessage = "There was an error. Please try again!";
        }

      );
    }
  }
  this.addUser = function(){
    this.addMode = true;
    this.selectedContact = {
      "id" : new Date().toDateString()
    }
    this.editMode = true;
  }

}
})();
