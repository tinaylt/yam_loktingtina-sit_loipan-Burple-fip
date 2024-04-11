(function(){

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");
    
    let searchBut = document.querySelector("#searchBarBut");
    let searchCon = document.querySelector("#searchExtend");
    
    const buttons = document.querySelectorAll("#download-gallery li");
    const changeImg = document.querySelector("#img");
    

	function hamburgerMenu() {
		// burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
        burgerCon.classList.toggle("hidden");

	};

    function searchBar() {
        searchCon.classList.toggle("hidden");
    };

    function changePic(e) {	
        changeImg.src=`images/${e.currentTarget.dataset.downloads}.jpg`	
    };	
    

	button.addEventListener("click", hamburgerMenu);	
    searchBut.addEventListener("click", searchBar);
    buttons.forEach(button => button.addEventListener("click", changePic));

    
})();