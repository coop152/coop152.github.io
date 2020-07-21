function updTime() 
{
	const days = 1000 * 60 * 60 * 24
	let infoElem = document.getElementById("info")
	let dateElem = document.getElementById("dateDisplay")
	let now = new Date();
	let then = new Date(2020, 6, 20);
	let diff = now - then;
	diff = diff / days
	if (diff % 2 < 1) 
	{
		infoElem.innerHTML = "YES";
		infoElem.style.color = "red";
	}
	else 
	{
		infoElem.innerHTML = "NO";
		infoElem.style.color = "green";
	}
	dateElem.innerHTML = "(on " + moment().format("Do [of] MMMM, YYYY") + ")";
}
updTime();