

function displayDate()
{
	document.getElementById('demo').innerHTML=Date();
}

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

function mouse_over_article()
{
	document.getElementById('a1').style.backgroundColor = "#D3D3D3";
	document.getElementById("picture").src= "http://www.mbfte.org/images/MissionVision/mission.jpg"
	
	
}

function mouse_out_article()
{
	document.getElementById('a1').style.backgroundColor = "white";
	document.getElementById("picture").src= "http://www.oneilllogistics.com/content/images/news.png"
}