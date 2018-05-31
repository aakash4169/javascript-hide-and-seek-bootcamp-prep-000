function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  var art=document.querySelector('#nested div div div');
  return art;
}

function deepestChild(){
  const lis = document.getElementById('grand-node').querySelectorAll('div');
  for(let i=0;i<lis.length;i++){
    
  }
  
  return lis;
}