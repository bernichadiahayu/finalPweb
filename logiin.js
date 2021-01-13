var username = document.forms['form']['user']
var password = document.forms['form']['pass']

var userError = document.getElementById('userError')
var passError = document.getElementById('passError')

function validasi(){
	if (username.value.length < 9){
		userError.style.display="block";
		username.focus();
		return false;
	}
	if (password.value.length < 6){
		passError.style.display = "block";
		password.focus();
		return false;
	}
}

function userVerifikasi(){
	if (username.value.length >= 8){
		userError.style.display ="none";
		return true;
	}
}

function passVerifikasi(){
	if (password.value.length >=8){
		passError.style.display ="none";
		return true;
	}
}

function addname(){
	var username = document.getElementById("user").value;
	console.log(username);
	if(!username|| !password){
		alert("Harap isi form ini")
	}
	else{
		alert(" Selamat Datang " +username)
	}
}

$(document).ready(function(){
	$('tampilkan').click(function(){
		if($(this).is(':checked')){
			$('password').attr('type','text');
		}
		else{
			$('password').attr('type','password');
		}
	})
})
