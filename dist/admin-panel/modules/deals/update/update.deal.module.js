angular.module("updateDealModule",["ui.select","ngSanitize","ui.bootstrap","toastr"]).controller("updateDealCtrl",["$scope",function(e){e.currentPage=1,e.pageSize=10,e.drinks=[];for(var r=["coke","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach"],a=1;a<=20;a++){var n=r[Math.floor(Math.random()*r.length)];e.drinks.push("drink "+a+": "+n)}e.pageChangeHandler=function(e){console.log("drinks page changed to "+e)}}]).filter("propsFilter",function(){return function(e,r){var a=[];if(angular.isArray(e)){var n=Object.keys(r);e.forEach(function(e){for(var o=!1,t=0;t<n.length;t++){var i=n[t],l=r[i].toLowerCase();if(-1!==e[i].toString().toLowerCase().indexOf(l)){o=!0;break}}o&&a.push(e)})}else a=e;return a}});