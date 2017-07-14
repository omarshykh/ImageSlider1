var index = 1;
slides(index);
function slides(ind) {
    var slides = document.getElementsByClassName('slides');
    if (ind > slides.length) {
        index = 1;
    }
    if (ind < 1) {
        index = slides.length;
    }
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // console.log(index - 1)
    slides[index - 1].style.display = 'block';
}
	function incrementIndex() {
	    index++;
    	slides(index)
}

function decrementIndex() {
    index--;
    slides(index)
}
//setInterval(incrementIndex, 1000)
