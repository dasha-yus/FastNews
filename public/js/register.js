function isValid(form){
	var username = form.username.value;
	var password =  form.password.value;
	if(username == "") {
		alert("You did not enter username");
	} else if(password == "") {
		alert("You did not enter password");
	} else {
		form.submit();
	}				
}