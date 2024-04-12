(function(){

    console.log('JS file is connected.');

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");
    
    let searchBut = document.querySelector("#searchBarBut");
    let searchCon = document.querySelector("#searchExtend");
    
    const buttons = document.querySelectorAll("#download-gallery li");
    const changeImg = document.querySelector("#img");
    
    const lightBox = document.getElementById("lightbox");
    const links = document.querySelectorAll(".burple-products a")
    
    


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

    function lightboxBgImg() {
        let flavor = this.getAttribute('data-flavor');
        let imageUrl = 'images/label_' + flavor + '.png';
        lightBox.style.backgroundImage = 'url(' + imageUrl +')';
    }



    
    links.forEach(link => link.addEventListener("click", lightboxBgImg));
	button.addEventListener("click", hamburgerMenu);	
    searchBut.addEventListener("click", searchBar);
    buttons.forEach(button => button.addEventListener("click", changePic));

    
})();