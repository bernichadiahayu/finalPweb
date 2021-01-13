function validasi(){
	var Name = document.getElementById("Name").value;
	var Email = document.getElementById("Email").value;
	var Username = document.getElementById("Username").value;
	var Password = document.getElementById("Password").value;

	if(Name!="" && Email!="" && Username!="" && Password!=""){
		return true;
	}else{
		alert("Anda harus mengisi form ini");
	}
}