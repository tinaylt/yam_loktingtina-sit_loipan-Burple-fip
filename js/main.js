(function(){

    console.log('JS file is connected.');

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");
    
    let searchBut = document.querySelector("#searchBarBut");
    let searchCon = document.querySelector("#searchExtend");
    
    const buttons = document.querySelectorAll("#download-gallery li");
    const changeImg = document.querySelector("#img");

    //option 3//
    const lemonProduct = document.getElementById('lemon');
    const orangeProduct = document.getElementById('orange');
    const appleProduct = document.getElementById('apple');
    const grapeProduct = document.getElementById('grape');
    const cherryProduct = document.getElementById('cherry');
    const peachProduct = document.getElementById('peach');

    //option 3//
    lemonProduct.addEventListener('click', function() {
        updateLightboxBackground('images/label1.png');
    });
    orangeProduct.addEventListener('click', function() {
        updateLightboxBackground('images/label2.png');
    });
    appleProduct.addEventListener('click', function() {
        updateLightboxBackground('images/label3.png');
    });
    grapeProduct.addEventListener('click', function() {
        updateLightboxBackground('images/label4.png');
    });
    cherryProduct.addEventListener('click', function() {
        updateLightboxBackground('images/label5.png');
    });
    peachProduct.addEventListener('click', function() {
        updateLightboxBackground('images/label6.png');
    });


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

    //lightbox//

    function updateLightboxBackground(imageUrl) {
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.backgroundImage = `url('${imageUrl}')`;
    }


    // links.forEach(link => link.addEventListener("click", changelabelImg));

	button.addEventListener("click", hamburgerMenu);	
    searchBut.addEventListener("click", searchBar);
    buttons.forEach(button => button.addEventListener("click", changePic));

    
})();