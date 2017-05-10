(function() {
  var app = angular.module("contactApp");
  app.service("AppDataServiceSvc",function (AppNameSvc){
    this.name=AppNameSvc;
    this.author="Jaslina";
    this.buildDate = new Date().toDateString();
});
})();
