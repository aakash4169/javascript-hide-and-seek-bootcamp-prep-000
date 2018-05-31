function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var art=document.querySelector('#nested div div div');
  return art;
}

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}

function increaseRankBy(n){
  var lis=document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for(let i=0;i<lis.length;i++){
    lis[i].i
  }
}