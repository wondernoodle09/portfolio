//screenheight stuff

let screenHeight = window.innerHeight;
screenHeight = screenHeight * .92
const panels = document.getElementsByClassName("panel");
for (let i = 0; i < panels.length; i++) {
		panels[i].style.height =  screenHeight + "px";
}

//workSlide stuff

const titleEFTC = "OCxD: EF Training Classic";
const titleACWB = "Animal Crossing Weather Bot";
const titleDG = "Dog Gacha";
const titleDVNG = "Dog Visual Novel Game";
const titleOMW = "Other Minor Works";

const descEFTC = "Inspired by an app used for treatment in an OCD treatment center, EF Training Classic is an Exposure and Response Therapy based tool that can be used to improve OCD symptoms. EF Training Classic is a part of a bigger project in progress, OCxD. OCxD is a web app equipped with various Exposure and Response Therapy based tools and resources used to aid someone in treating their OCD.";
const descACWB = "This is about the Animal Crossing Weather Bot.";
const descDG = "This is about the Dog Gacha.";
const descDVNG = "This is about the Dog Visual Novel Game.";
const descOMW = "This is about other minor works.";

//displays first slide automatically

var workPanel1Theme = "EFTC";
var workPanel2Theme;
var slideNum = 1;
var newSlideNum;

document.getElementById("workDescTitle").innerHTML = titleEFTC;
document.getElementById("workDescDesc").innerHTML = descEFTC;

//Art Display

const davidAndLucy = {name: "David and Lucy", workType: "fan art", character: "David Martinez, Lucy", origin: "Cyberpunk Edgerunners", source:"assets/images/instagramArt/digital/davidAndLucy.png", medium:"Adobe Photoshop", date:"October 16, 2022"}
const friends = {name: "The Sauna Club", workType: "personal", origin: "n/a", character: "n/a", source:"assets/images/instagramArt/digital/friends.png", medium: "Adobe Photoshop", date: "August 23, 2021"}
const commissionDND = {name: "Commission for a DnD Character", workType: "commission", origin: "Original Character", character: "n/a",  source: "assets/images/instagramArt/digital/commissionDND.jpg", medium: "Adobe Photoshop CS6", date: "June 15, 2021"}
const zoe = {name: "Exe-CUTE!! Spirit Evolution", workType: "fan art", origin: "Digimon Frontier", character: "Zoe Orimoto", source: "assets/images/instagramArt/digital/zoe.jpg", medium: "Adobe Photoshop CS6", date:"June 9, 2021"}
const couple = {name:"Couple", workType:"personal", origin:"n/a", character: "n/a", source:"assets/images/instagramArt/digital/couple.jpeg", medium:"Adobe Photoshop CS6", date:"December 29, 2020"}
const inoriYuzuriha = {name:"Inori Yuzuriha", workType: "commission", origin: "Guilty Crown", character: "Inori Yuzuriha", source:"assets/images/instagramArt/digital/inoriYuzuriha.jpeg", medium: "Adobe Photoshop CS6", date:"April 6, 2020"}
const sombra = {name:"Sombra", workType:"fan art", origin:"Overwatch", character: "Sombra", source:"assets/images/instagramArt/digital/sombra.jpeg", medium:"Adobe Photoshop CS6", date: "April 6, 2020"}
const darling002 = {name:"002", workType:"personal", origin: "Darling In The FranXX", character: "002", source:"assets/images/instagramArt/digital/002.jpeg", medium:"Adobe Photoshop CS6", date:"April 4, 2020"}
const zelda = {name: "Zelda: Breath of the Wild", workType: "fan art", origin: "Breath of the Wild", character: "Princess Zelda", source:"assets/images/instagramArt/digital/zeldaBOTW.jpeg", medium:"Adobe Photoshop CS6", date:"November 26, 2019"}
const eugeniaCooney = {name: "Eugenia the Nobody", workType:"fan art", origin: "Influencer Eugenia Cooney, Kingdom Hearts", character: "(inspired by) Organization XIII members", source:"assets/images/instagramArt/digital/eugeniaCooney.jpeg", medium:"Adobe Photoshop CS6", date: "November 26, 2019"}

const cyberpunkJudy = {name:"Judy", workType: "fan art", origin: "Cyberpunk 2077", character: "Judy Alvarez", source:"assets/images/instagramArt/physical/cyberpunkJudyPhysical.jpg", medium: "marker", date:"January 4, 2022"}
const ocdArt = {name: "Mental Compulsions", workType:"personal", origin:"n/a", character: "n/a", source:"assets/images/instagramArt/physical/OCDart.JPG", medium: "marker", date:"January 4, 2022"}
const jinxArcane = {name: "Loose Cannon", workType: "fan art", origin: "Arcane", character: "Jinx", source:"assets/images/instagramArt/physical/jinxArcanePhysical.JPG", medium:"marker", date: "January 4, 2022"}
const maya = {name: "Stay Positive", workType: "fan art", origin: "Persona 2", character: "Maya Amano", source:"assets/images/instagramArt/physical/mayaPhysical.jpg", medium:"marker", date:"August 11, 2021"}
const nagi = {name: "Nagi the Ghost Trainer", workType:"fan art", origin:"NEO: The World Ends With You, Pokemon", character: "Nagi Usui", source:"assets/images/instagramArt/physical/nagi.jpg", medium:"marker", date:"July 1, 2021"}
const zoePhysical = {name: "Zoe", workType: "fan art", origin: "Digimon Frontier", character: "Zoe Orimoto", source: "assets/images/instagramArt/physical/zoePhysical.jpg", medium: "marker", date:"June 3, 2021"}
const yumekoAndMary = {name: "Let's Gamble!", workType:"fan art", origin:"Kakegurui", character: "Yumeko Jabami, Mary Saotome", source:"assets/images/instagramArt/physical/yumekoAndMaryPhysical.jpg", medium:"marker", date:"May30, 2021"}
const cyberpunkV = {name: "My Version of V from Cyberpunk 2077", workType:"fan art", origin: "Cyberpunk 2077", character: "V (female)", source:"assets/images/instagramArt/physical/cyberpunkVPhysical.jpg", medium:"marker", date:"May 30, 2021"}
const randomDrawing = {name: "Crayola Style", workType: "practice", origin: "original design", character: "n/a", source:"assets/images/instagramArt/physical/randomDrawingPhysical.jpeg", medium:"marker", date:"May 30, 2021"}

const digitalArts = [davidAndLucy, friends, commissionDND, zoe, couple, inoriYuzuriha, sombra, darling002, zelda, eugeniaCooney];
const physicalArts = [cyberpunkJudy, ocdArt, jinxArcane, maya, nagi, zoePhysical, yumekoAndMary, cyberpunkV, randomDrawing]

showDigital();

function showDigital() {
	createInstaImages(digitalArts);
}

function showPhysical() {
	createInstaImages(physicalArts);
}

function createInstaImages(imgObj) {

	document.getElementById('instagramContainer').innerHTML = "";

	for (let i = 0; i < imgObj.length; i++) {

		var img = document.createElement('img');
		img.src = imgObj[i].source;
		img.style.height = "300px"
		img.style.width = "300px"
		img.style.objectFit = "cover";
		img.className = "arts";
		img.onmouseover = function() {showInfo(imgObj[i])};
		img.onmouseout = function() {hideInfo(imgObj[i])};


		document.getElementById('instagramContainer').appendChild(img);
	}
};

//art information display

function showInfo(artPiece) {
	document.getElementById("artName").innerHTML = artPiece.name;
	document.getElementById("artDate").innerHTML = artPiece.date;
	document.getElementById("artMedium").innerHTML = artPiece.medium;
	document.getElementById("artPurpose").innerHTML = artPiece.workType;
	document.getElementById("artOrigin").innerHTML = artPiece.origin;
	document.getElementById("artCharacter").innerHTML = artPiece.character;
}

function hideInfo() {
	document.getElementById("artName").innerHTML = "";
	document.getElementById("artDate").innerHTML = "";
	document.getElementById("artMedium").innerHTML = "";
	document.getElementById("artPurpose").innerHTML = "";
	document.getElementById("artOrigin").innerHTML = "";
	document.getElementById("artCharacter").innerHTML = "";
}

//piano music

	const onBTS = {idName: "audioOnBTS", name: "On - BTS (방탄소년단)", source:"assets/images/youtubeThumbnails/OnBTS.jpeg", audio:"assets/audio/on.mp3", demo:"assets/audio/onDemo.mp3", date:"March 10, 2020", difficulty: "advanced", scoreType: "arrangement"}
	const memoriesOfTheCity = {idName: "audioMemoriesOfTheCity", name: "Memories Of The City - Persona 3", source:"assets/images/youtubeThumbnails/MemoriesOfTheCity.jpeg", audio: "assets/audio/memoriesOfTheCity.mp3", demo:"assets/audio/memoriesOfTheCityDemo.mp3", date:"September 27, 2019", difficulty: "advanced", scoreType: "arrangement"}
	const deadmansGun = {idName: "audioDeadmansGun", name: "Deadman's Gun - Red Dead Redemption", source:"assets/images/youtubeThumbnails/deadmansGun.jpeg", audio: "assets/audio/deadmansGun.mp3", demo: "assets/audio/deadmansGunDemo.mp3", date: "July 31, 2019", difficulty: "intermediate", scoreType: "transcription"}
	const newBorn = {idName: "audioNewBorn", name: "New Born (Hybrid) - The World Ends With You",  source: "assets/images/youtubeThumbnails/newBornHybrid.png", audio: "assets/audio/newBornHybrid.mp3", demo: "assets/audio/newBornHybridDemo.mp3", date: "July 29, 2021", difficulty: "advanced", scoreType: "transcription"}

	const pianoMusic = [onBTS, memoriesOfTheCity, deadmansGun, newBorn];

	createMusicImages(pianoMusic);

	function createMusicImages(musicObj) {

	for (let i = 0; i < musicObj.length; i++) {

		var div = document.createElement('div');
		div.style.width = "320px";
		div.style.height = "180px";
		div.className = "musics";
		div.style.backgroundImage = "url('" + musicObj[i].source + "')";
		div.style.backgroundSize = "100%";
		document.getElementById('musicScrollBox').appendChild(div);

		var cover = document.createElement('div');
		cover.style.width = "100%";
		cover.style.height = "100%";
		cover.style.zIndex = "10";
		cover.style.backgroundColor = "black";
		cover.className = "musicCover";
		div.appendChild(cover);

		var coverTextDiv = document.createElement('div');
		coverTextDiv.style.width = "100%";
		coverTextDiv.style.height = "100px";
		coverTextDiv.className = "coverTextDiv centerVert";
		cover.appendChild(coverTextDiv);

		var gif = document.createElement('img');
		gif.src = "assets/images/equalizer.gif"
		gif.className = "equalizer";
		coverTextDiv.appendChild(gif);

		var text = document.createElement('p');
		text.innerHTML = "click for more info";
		text.className = "musicCoverText";
		coverTextDiv.appendChild(text);


		//music stuff

		var song = document.createElement('audio');
		var demoIdName = musicObj[i].idName + "Demo";
		song.setAttribute("id", demoIdName);
		song.src = musicObj[i].demo;
		document.getElementById('musicScrollBox').appendChild(song);

		cover.onmouseenter = function() {playMusic(musicObj[i])};
		cover.onmouseleave = function() {stopMusic(musicObj[i])};
	}
};

	//plays music on hover

	function playMusic(musicObj) {
		var demoIdName = musicObj.idName + "Demo";
		var song = document.getElementById(demoIdName);

		song.play();

		$(document).ready(function(){
    $("#" + demoIdName)[0].volume = 0;
    $("#" + demoIdName).animate({volume: 1}, 2000);
  });

		song.loop = true;
	}

	function stopMusic(musicObj, idName) {
		var demoIdName = musicObj.idName + "Demo";

		$(document).ready(function(){
    $("#" + demoIdName).animate({volume: 0}, 500);
  });

  setTimeout(function(){
  	document.getElementById(demoIdName).pause();
  	document.getElementById(demoIdName).currentTime = 0;
  }, 500);
	};

// skills

const talents = ["Self Learning", "Prototype Design", "Creative Writing", "Club Leadership", "Blogging", "Hosting  and Coordinating Events", "Music Creation", "Public Speaking & Presentation"];
const programming = ["Javascript", "HTML", "CSS", "C++", "Java", "Python", "Jquery", "Ren&#39;Py", "Github"];
const design = ["Adobe Photoshop", "Adobe Illustrator", "Digital Drawing", "Graphic Design"];

var talentsDiv = document.getElementById("talentsColumn");
var programmingDiv = document.getElementById("programmingColumn");
var designDiv = document.getElementById("designColumn");

function createList(div, list) {

	for (let i = 0; i < list.length; i++) {
		var listItem = document.createElement('p');
		listItem.innerHTML = list[i];
		div.style.fontSize = "22px";
		div.appendChild(listItem);
	};
};

createList(talentsDiv, talents);
createList(programmingDiv, programming);
createList(designDiv, design);

//skills

const logos = ["assets/images/skillsIcons/Adobe_Photoshop_CC_icon.svg.png", "assets/images/skillsIcons/HTML5_logo_and_wordmark.svg.png", "assets/images/skillsIcons/CSS3_logo_and_wordmark.svg.png", "assets/images/skillsIcons/pngwing.com (1).png", "assets/images/skillsIcons/ISO_C++_Logo.svg.png", "assets/images/skillsIcons/Python-logo-notext.svg.png", "assets/images/skillsIcons/Flat-logo-Tumblr-PNG.png", "assets/images/skillsIcons/pngwing.com.png", "assets/images/skillsIcons/musescore_sticker+11@3x.png", "assets/images/skillsIcons/Adobe_Illustrator_CC_icon.svg.png", "assets/images/skillsIcons/pngwing.com (2).png", "assets/images/skillsIcons/Java_programming_language_logo.svg.png"]

function createMarquee(logos) {

	for (let i = 0; i < logos.length; i++) {
		var div = document.getElementById("marqueeContent");
		var logoBox = document.createElement('div');
		logoBox.className = "marqueeItem";
		div.appendChild(logoBox);

		var logo = document.createElement('img');
		logo.src = logos[i];
		logo.style.maxWidth = "100%"
		logo.style.maxHeight = "100%"
		logo.style.objectFit = "contain"
		logoBox.appendChild(logo);
	};

	for (let i = 0; i < 4; i++) {
		var div = document.getElementById("marqueeContent");
		var logoBox = document.createElement('div');
		logoBox.className = "marqueeItem";
		div.appendChild(logoBox);

		var logo = document.createElement('img');
		logo.src = logos[i];
		logo.style.maxWidth = "100%"
		logo.style.maxHeight = "100%"
		logoBox.appendChild(logo);
	};

};

createMarquee(logos);

//contact
