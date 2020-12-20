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
	ingredients: ["1/2 chicken", "1 medium onion", "1/2 cup olive oil", "salt", "pepper"],
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

function showRandomRecipe(){
	// pick a random recipe
	var id = randomNum(rcpList.length);
	console.log("id: " + id);
	var rcp = rcpList[id];
	
	console.log("recipe: " + rcp.imagePath);
	
	// show the recipe info in the feature div
	// recipe name
	var rcpName = document.getElementById("recipeName");
	rcpName.innerHTML = rcp.name;	
	// recipe synopsis
	var synop = document.getElementById("synopsis");
	if (synop != null) {
		synop.innerHTML = rcp.synopsis;
	}
	// recipe img
	var img = document.getElementById("rcpPicture");
	console.log("recipe: " + img);
	if (img != null) {
		img.src = rcp.imagePath;
	}
}

function randomNum(max) { 
	return Math.floor(Math.random() * max); 
};

showRandomRecipe();
