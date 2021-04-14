function validation(){
    var user=document.getElementById('user').value;
     if(user==""){
         document.getElementById('msg').innerHTML="please enter name";
         return false;
     }
     if(user.length < 3 ){
        document.getElementById('msg').innerHTML="Please Enter More than 3 Alphabets";
        return false;
     }
     var x = document.getElementById("myCheck").checked;
    if(x==false){
        document.getElementById('agree_check').innerHTML="Pleas accept terms";
        return false;
    }
        return true;               
    
   
}
