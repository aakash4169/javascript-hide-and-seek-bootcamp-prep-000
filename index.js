function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var art=document.querySelector('#nested div div div');
  return art;
}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('div');
  var i=0;
  for( i=0;i<lis.length;i++){
  }
  var test=lis[lis.length-1].querySelector("div");
  return test;
}