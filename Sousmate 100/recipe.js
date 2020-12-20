// List of recipe objects
var rcpList = [
{	id: 1,
	name: "Chicken stew",
	category: "poltry",
    synopsis: "a great summer recipe",
	instructions: ["Chop the onion and fry it in the pan", 
				   "Put chicken pieces on the onions",
				   "Add salt, pepper and other spices of your choice",
				    "Add 1/2 cup hot water",
					"Let it cook for an hour"],
	prepTime: 15,
	cookTime: 60,
	yield: "4 people",
	level: 2,
	ingredients: ["1/2 lb chicken", "1 medium onion", "1/2cup olive oil", "salt and pepper"],
	author: "Sahar",
	imagePath: "images/chicken.jpg"
},{
	id:2,
	name: "Gheyme",
	category: "Beef",
    synopsis: "Family recipe",
	instructions: ["Chop the onion and fry it in the pan", 
				   "Add chopped beef to the onion and fry it",
				   "Add lentil and 1 cup of boiling water",
				   "Let it cook until beef is tender",
				   "Add salt and pepper"],
	prepTime: 15,
	cookTime: 120,
	yield: "4 people",
	level: 3,
	ingredients: ["1 medium onion", "1 lb beef", "1 cup lentil", "salt and pepper"],
	author: "Sahar",
	imagePath: "images/gheyme.jpg"
},{
	id: 3,
	name: "Fried Fish",
	category: "seafood",
    synopsis: "a great beach recipe",
	instructions: ["Lightly oil a medium size pan and let it warm",
				   "Cut the Salmon, pinch salt and pepper on it and put it in the pan",
				   "Turn the Salmon over after 10 minutes"],
	prepTime: 10,
	cookTime: 20,
	yield: "2 people",
	level: 1,
	ingredients: ["1 lb Salmon", "salt", "butter"],
	author: "Sahar",
	imagePath: "images/salmon.jpg"
}
];

createRecipes(rcpList);

function createRecipes() {
	
	// creating list of recipes
	var listDiv = getElem("list", 1);
	var recipeList = createRcpList(listDiv);
	listDiv.appendChild(recipeList);
	
	//creating recipe div for each recipe and populating the info
	var mainRcpdiv = document.getElementById("instructions");
	
	for (i = 0; i < rcpList.length; i++) {
		
		// get the recipe object
		var rcp = rcpList[i];
		
		// create the recipe div
		var itemDiv = createRcpDiv(rcp);

		//add recipe details to recipe div
		//recipe name
		createSubDiv(itemDiv, "h3", "innerHTML", rcp.name);

		//prep time
		createSubDiv(itemDiv, "span", "innerHTML", "Prep Time:");
		createSubDiv(itemDiv, "span", "innerHTML", rcp.prepTime + 'min');

        var br = document.createElement("br");
		itemDiv.appendChild(br);

		// cook time
		createSubDiv(itemDiv, "span", "innerHTML", "Cook Time:");
		createSubDiv(itemDiv, "span", "innerHTML", rcp.cookTime + 'min');

		br = document.createElement("br");
		itemDiv.appendChild(br);

        // ingredients	
		createSubDivArray(itemDiv, "h4", "innerHTML", 'Ingredients', "ul", rcp.ingredients);
			
        // instructions
		createSubDivArray(itemDiv, "h4", "innerHTML", 'Instructions', "ol", rcp.instructions);
		
		// timer
		var btn = document.createElement("button");
		btn.setAttribute('id', 'btn' + rcp.id);
		btn.setAttribute('class', 'button');
		btn.innerHTML = 'Start Timer';
		itemDiv.appendChild(btn);
		
		bindTimer(btn, rcp);
		
		var timeText = document.createElement("span");
		
		timeText.setAttribute("id", 'txt' + rcp.id);
		timeText.setAttribute('class', 'timer');
		timeText.display = 'none';
		itemDiv.appendChild(timeText);
		
		mainRcpdiv.appendChild(itemDiv);
	}
}


function getElem(handle, code) {
	if (code == 1) {
		return document.getElementById(handle);
	} else if (code == 2) {
		return document.getElementsByTagName(handle);
	} else {
		return document.getElementsByClassName(handle);
	}
}

function addAtribute(elem, attr, value) {
	if (attr == "innerHTML") {
		elem.innerHTML = value;
	} else {
		elem.setAttribute(attr, value);
	}
}

function createRcpList(list) {
	
	var innerElem = document.createElement("ol");
	
	for (i = 0; i < rcpList.length; i++) {
		var rcp = rcpList[i];
		var item = document.createElement("li");
		item.setAttribute("id", 'item' + rcp.id);
		var a = document.createElement("a");
		var link = document.createTextNode(rcp.name);
		a.appendChild(link); 
		a.href = '#rcp' + rcp.id;
		item.appendChild(a);
		innerElem.appendChild(item);	
		list.appendChild(innerElem);
	}
	return innerElem; 
}

function createRcpDiv(rcp) {
	var rcpDiv = document.createElement("div");
	rcpDiv.setAttribute('id', 'rcp' + rcp.id);
	rcpDiv.setAttribute('class', "rcpDetail");
	return rcpDiv;
}

function createSubDiv(parentDiv, elem, childAttribute, content) {
	var child = document.createElement(elem);
	if (childAttribute == "innerHTML") {
		child.innerHTML = content;
	} else {
		child.setAttribute(childAttribute, content);
	}
	parentDiv.appendChild(child);
}

function createSubDivArray(parentDiv, elem, childAttribute, content, sublistType, array) {
	var child = document.createElement(elem);
	if (childAttribute == "innerHTML") {
		child.innerHTML = content;
	} else {
		child.setAttribute(childAttribute, content);
	}
	var str = content;
	child.setAttribute("id", str.toLowerCase());
	
	if (array.length > 0) {
		var sublist = document.createElement(sublistType);
		for (j = 0; j < array.length; j++) {
			var listItem = document.createElement("li");
			listItem.innerHTML = array[j];
			sublist.appendChild(listItem);
		}
		child.appendChild(sublist);
	}
    parentDiv.appendChild(child);	
}

function bindTimer(elem, rcp) {
	var count = rcp.cookTime;
	var seconds = count * 60;
	var myInterval = -1;
	var buttonWidth = elem.style.width;
	
	if (seconds > 0) {
		elem.addEventListener("click", function(){
		// if paused, start
			if (myInterval == -1) {
				elem.style.width = `${buttonWidth}px`;
				elem.innerHTML = "Pasue";
				var timeText = getElem('txt'+ rcp.id, 1);
				
				myInterval = setInterval(function() {
					timeText.display = 'inline-block';
					timeText.innerHTML = secondsToString(seconds);
					timeText.style.backgroundColor = "purple";
					timeText.style.padding = "10px";
					seconds--;
				}, 1000);
			} else {
				elem.innerHTML = "Start Timer";
				clearInterval(myInterval);
				myInterval = -1;
			}
		});
	} 
}

function secondsToString(seconds) {
	var sec = seconds % 60;
	var min = Math.floor(seconds / 60);
    if (sec < 10) {
		sec = "0" + sec;
	} 
	if (min < 10) {
		min = "0" + min;
	}
	return (min + ":" + sec);
}