
function getMS(ms) {
  ms = ms.toString();
  if(ms.length == 1){
    return '00' + ms;
  }else if (ms.length == 2){
    return '0' + ms;
  }else if (ms.length == 3){
    return ms;
  }else {
    return ms.substr(ms.length - 3);
  }
}

console.log(getMS(1111123123))
