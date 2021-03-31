let btn = document.querySelector(".btn");
let present = document.querySelector(".present");
btn.onclick = function() {
	present.classList.add("opened");
	setTimeout(function() {
			present.classList.remove("opened");	
	}, 20000)
}