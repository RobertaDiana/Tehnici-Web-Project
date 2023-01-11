function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Adresa de mail corecta");
document.form1.text1.focus();
localStorage.setItem("autentificat", inputText.value)
document.getElementsByTagName('h2')[0].innerHTML=localStorage.getItem("autentificat")
return true;
}
else
{
alert("Nu este o adresa de mail valida");
document.form1.text1.focus();
return false;
}
}


function CheckPassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Corect')
return true;
}
else
{ 
alert('Gresit!')
return false;
}
}

if (!localStorage.getItem("autentificat"))
localStorage.setItem("autentificat", "neconectat")
document.getElementsByTagName('h2')[0].innerHTML=localStorage.getItem("autentificat")
document.getElementsByTagName('h2')[0].addEventListener("click", ()=> {
   localStorage.setItem("autentificat" , "neconectat")
   document.getElementsByTagName('h2')[0].innerHTML=localStorage.getItem("autentificat")
})
