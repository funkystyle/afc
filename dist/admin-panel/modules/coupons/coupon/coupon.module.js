angular.module("couponModule",["angularUtils.directives.dirPagination","storeServiceModule"]).controller("couponCtrl",["$scope","storeFactory",function(e,a){e.currentPage=1,e.pageSize=10,e.drinks=[];for(var i=["coke","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach","melange","chai latte","almdudler","beer","vodka","coconut milk","orange juice","wine","whisky","sex on the beach"],n=1;n<=i.length;n++){var o=i[Math.floor(Math.random()*i.length)];e.drinks.push("drink "+n+": "+o)}e.pageChangeHandler=function(e){console.log("drinks page changed to "+e)},e.toggleSidebar=function(){"0px"==$("#sidebar-affix").css("right")?$("#sidebar-affix").animate({right:"-1000",display:"none"},500):$("#sidebar-affix").animate({right:"0",display:"block"},500)}}]);