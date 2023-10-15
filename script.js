form.addEventListener("submit", getFormvalue);
function getFormvalue(event){
	// event.preventDefault();
	alert(this.fname.value+" "+this.lname.value)
}

