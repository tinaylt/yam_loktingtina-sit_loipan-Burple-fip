(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");
    
    const buttons = document.querySelectorAll("#download-gallery li");
    const changeImg = document.querySelector("#img");
    
	function hamburgerMenu() {
		// burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
        burgerCon.classList.toggle("hidden");

        window.addEventListener("beforeunload", function() {
            // Close the burger menu
            button.classList.remove("expanded");
            burgerCon.classList.add("hidden");
        });
	};

    function changePic(e) {	
        changeImg.src=`images/${e.currentTarget.dataset.downloads}.jpg`	
    }	
    



	button.addEventListener("click", hamburgerMenu);	
    buttons.forEach(button => button.addEventListener("click", changePic));

    
})();