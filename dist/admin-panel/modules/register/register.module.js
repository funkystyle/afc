angular.module("registerModule",["ui.select","Directives","satellizer","ui.bootstrap","constantModule"]).controller("registerCtrl",["$scope","$http","mainURL","URL",function(e,t,o,l){console.log("registerctrl"),e.register={created_date:new Date,modified_date:new Date,status:"inactive",last_modified_by:["1"]},e.userLevels=[{level:"submitter"},{level:"editor"},{level:"admin"}],e.registerNow=function(e){e.city="s",e.age=45,e.gender="male",console.log(e),t({url:o+l.register,method:"POST",data:e}).then(function(e){console.log("asdasdasdass",e)},function(e){console.log("error",e)})}}]);