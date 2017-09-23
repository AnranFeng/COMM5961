
function mouse_over()
{
	var sidebar = document.getElementById('sidebar');
	sidebar.className = "newstyle"
	sidebar.innerHTML = '<h2>Go for it!</h2><p>Always aim for the best!</p>'

}

function mouse_out()
{
	var sidebar = document.getElementById('sidebar');
	sidebar.className = "nostyle";
	sidebar.innerHTML = "<h2>Be yourself</h2><p>see what can be shown here</p>"
}


function validateForm(){
	
	var x = document.forms["myForm"]["fname"].value;
	if (x==""){
		alert("Name must be filled out");
		return false;
	}
	document.getElementById("sidebar").className = "namestyle";
	document.getElementById("sidebar").innerHTML = "<h2>Welcome!</h2>" + x;
}
 