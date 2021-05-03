var a;
function showHide(){
    if(a==1){
        document.getElementById("passChecker").style.display="flex";
        return a=0;
    }
    else{
        document.getElementById("passChecker").style.display="none";
        return a=1;
    }
}

function _id(name){
    return document.getElementById(name);
}

function _class(name){
    return document.getElementsByClassName(name);
}

_class("togglePassword")[0].addEventListener("click",function(){
    _class("togglePassword")[0].classList.toggle("active");
    if(_id("passwordSpace").getAttribute("type")=="password"){
        _id("passwordSpace").setAttribute("type","text")
    } else{
        _id("passwordSpace").setAttribute("type","password")
    }
});


_id("passwordSpace").addEventListener("focus",function(){
    _class("passPolicies")[0].classList.add("active");
  });
  _id("passwordSpace").addEventListener("blur",function(){
    _class("passPolicies")[0].classList.remove("active");
  });
  
  _id("passwordSpace").addEventListener("keyup",function(){
    let password = _id("passwordSpace").value;
    
    if(/[A-Z]/.test(password)){
      _class("polUppercase")[0].classList.add("active");
    } else {
      _class("polUppercase")[0].classList.remove("active");
    }
    if(/[a-z]/.test(password)){
        _class("polLowercase")[0].classList.add("active");
      } else {
        _class("polLowercase")[0].classList.remove("active");
      }
    
    if(/[0-9]/.test(password)){
      _class("polNumber")[0].classList.add("active");
    } else {
      _class("polNumber")[0].classList.remove("active");
    }
    
    if(/[^A-Za-z0-9]/.test(password)){
      _class("polSpecial")[0].classList.add("active");
    } else {
      _class("polSpecial")[0].classList.remove("active");
    }
    
    if(password.length > 7){
      _class("polLength")[0].classList.add("active");
    } else {
      _class("polLength")[0].classList.remove("active");
    }
  });