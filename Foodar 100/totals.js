var form = document.getElementById("requestForm");
form.addEventListener("change", calculateTotal);
			
function calculateTotal() {
				
	var result = 0;
	//style
	var styleRadios = document.getElementsByClassName("food-style");
	for (var i = 0; i < styleRadios.length; i++) {
		if (styleRadios[i].checked) {
			result = Number(styleRadios[i].value);
		}
	}
	//tip
	var styleRadios = document.getElementsByClassName("food-tip");
	for (var i = 0; i < styleRadios.length; i++) {
		if (styleRadios[i].checked && result > 0) {
			result *= (1 + styleRadios[i].value / 100);
		}
	}			
	// keep only two decimal values
	result = result.toFixed(2);
				
	var priceElem = document.getElementById("totalprice");
	priceElem.innerHTML = result;
}		
				