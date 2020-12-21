var bannerList = [
{	id: 1,
	imagePath: "images/banner1.png"
},{
	id:2,
	imagePath: "images/banner2.png"
},{
	id: 3,
	imagePath: "images/banner3.png"
},{
	id: 4,
	imagePath: "images/banner4.png"
}
];

var zipcodeList = ['13201', '13202', '13203', '13204', '13205', '13206', '13207', '13208'];

function showRandomBanner3() {
	//pick a random banner image
	var id = randomNum(bannerList.length);
	var ban = bannerList[id];

	//create banner div
	var banDiv = document.createElement("div");
	banDiv.setAttribute("class", "banner");
	
	var banImg = document.createElement("img");
	banImg.setAttribute("id", "banImg");

	if (banImg != null) {
		banImg.src = ban.imagePath;
	}
	if (banDiv != null) {
		banDiv.appendChild(banImg);
	}
	
	var banClose = document.createElement("span");
	banClose.setAttribute("class", "close");
	banClose.innerHTML = "x";
	banDiv.appendChild(banClose);
	
	banClose.addEventListener("click", function(){
		this.parentElement.remove();
	})
	
	var myhead = document.getElementsByTagName("header")[0];
	myhead.appendChild(banDiv);
	//setTimeout(showRandomBanner1, 2000);
}

function showRandomBanner1(){
	// pick a random banner
	var id = randomNum(bannerList.length);
	var ban = bannerList[id];
	
	// banner img
	var img = document.getElementById("banImg");
	if (img != null) {
		img.src = ban.imagePath;
	}
	console.log(ban);
}

function randomNum(max) { 
	return Math.floor(Math.random() * max); 
};

var zipcodeBtn = document.getElementById("goBtn");

zipcodeBtn.addEventListener("click", function zipChecker() {
	
	// to prevent button from submitting the form. otherwise the messagees will not be displayed 
	event.preventDefault();
	
	var msg = document.getElementById("message");
	var result = zipcodeList.find(checkCode);
	console.log("result: " + result);
	
	if (result != null) {
		msg.innerText = "We have got your area covered!";
		msg.style.color = "green";
	} else { 
		msg.innerText = "Sorry, we have not expanded to that area yet.";
		msg.style.color = "red";
	}
});

function checkCode(code) {
  return (code == document.getElementById("zip-input").value);
}

function myFunction() {
  
}

setTimeout(showRandomBanner3, 5000);