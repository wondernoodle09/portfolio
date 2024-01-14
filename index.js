//popup stuff

function openPopup() {
		document.getElementById("largePopup").style.display = "block";
	}

function closePopup() {
	var popup = document.getElementsByClassName("popup")[0];
	popup.style.display = "none";
	document.getElementById("popupContent").innerHTML = "";
}

// down arrow

function hideDownArrow(el) {
	el.classList.add("hidden");
}

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $('#scrollDown').toggleClass('hidden',
     //add 'ok' class when div position match or exceeds else remove the 'ok' class.
      scroll >= $('#titlePanel').offset().top
    );
});
//trigger the scroll
$(window).scroll();//ensure if you're in current position when page is refreshed

// highlights topBar link based on scroll position

var $sections = $('.panel'),
$lis = $('li');

$(window).on('scroll', function(){
  var scrollPos = $(window).scrollTop(),
      navHeight = $('ul').outerHeight();
  var margin = $(window).height() * 0.14;
  $sections.each(function() {
    var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();
    if (scrollPos > top - navHeight - margin && scrollPos < bottom) {
      var $target = $lis.eq($lis.length - $(this).index() + 2);
      $lis.not($target).removeClass('activePanel');
      $target.addClass('activePanel');
    }
  })
});

//workSlide stuff

const EFTCMedia = ["assets/images/ProjectScreenshots/OCXD/OCxDexample1.png", "assets/images/ProjectScreenshots/OCXD/OCxDexample2.png", "assets/images/ProjectScreenshots/OCXD/OCxDexample3.png", "assets/images/ProjectScreenshots/OCXD/OCxDexample4.png", "assets/images/ProjectScreenshots/OCXD/OCxDexample5.png", "assets/images/ProjectScreenshots/OCXD/OCxDexample6.png"];

const ACWBMedia = ["assets/images/ProjectScreenshots/ACWB/ACWB1.png", "assets/images/ProjectScreenshots/ACWB/ACWB2.png"]

const DGMedia = ["assets/images/ProjectScreenshots/DG/DG1.png", "assets/images/ProjectScreenshots/DG/DG2.png", "assets/images/ProjectScreenshots/DG/DG3.png", "assets/images/ProjectScreenshots/DG/DG4.png"]

const DVNGMedia = ["assets/images/ProjectScreenshots/DVNG/DVNG1.png", "assets/images/ProjectScreenshots/DVNG/DVNG2.png"]

const NCAMedia = ["assets/images/ProjectScreenshots/NCA/NCA1.png", "assets/images/ProjectScreenshots/NCA/NCA2.png", "assets/images/ProjectScreenshots/NCA/NCA3.png", "assets/images/ProjectScreenshots/NCA/NCA4.png", "assets/images/ProjectScreenshots/NCA/NCA5.png", "assets/images/ProjectScreenshots/NCA/NCA6.png", "assets/images/ProjectScreenshots/NCA/NCA7.png"]


const EFTC = {
	name: "OCxD",
	desc: "OCxD is a web app equipped with various Exposure and Response Therapy based tools and resources used to aid someone in treating Obsessive Compulsive Disorder, excelling in helping independent treatment for those who do not have the means to seek outside treatment. The tools include programs to help manage a list of compulsions, fears, and a hierarchy of planned exposure exercises, as well as a progress tracker to aid with different exposure exercises.",
	color: "#fee0e8",
	highlightedColor: "#FF8BAC",
	media: EFTCMedia
}

const ACWB = {
	name: "Animal Crossing Weather Bot",
	desc: "Animal Crossing Weather Bot is a website that can recreate the musical experience of the game Animal Crossing. You can listen to the official hourly music based on your local weather and time, just like you do in the game.",
	color: "#9cbded",
	highlightedColor: "#4A88E2",
	media: ACWBMedia
}

const DG = {
	name: "Dog Gacha",
	desc: "Dog Gacha is a simulation of the 'summoning' feature of Gacha-style games that allows you to collect various meme-style animal units with different rarity levels, based on rates of chance.",
	color: "#afedef",
	highlightedColor: "#14C3CB",
	media: DGMedia
}

// const DVNG = {
// 	name: "Dog Visual Novel Game",
// 	desc: "This is about the Dog Visual Novel Game.",
// 	color: "#ffe5c4",
// 	highlightedColor: "#FFBA62",
// 	media: DVNGMedia
// }

const NCA = {
	name: "The Normalization of Cultural Abuse",
	desc: "The Normalization of Cultural Abuse is a college project for an English Critical Thinking: Writing about Non-Fiction class. It is a website designed and built on Wix that questions the line between protected culture and what is considered abuse. Includes cited research, analyses, and self-conducted polls and interviews.",
	color: "#ECFF9F",
	highlightedColor: "#B7DB25",
	media: NCAMedia
}

//workSlide left slide media

const slides = [EFTC, ACWB, DG, NCA];

//displays first slide automatically

var currentSlideNum = 0;
var currentSlide = slides[currentSlideNum];
var nextSlideNum;
var nextSlide;

var currentIndex = 0;
var currentMedia = currentSlide.media

displayWork();

//changes slides

function displayWork() {
	document.getElementById("workDescTitle").innerHTML = currentSlide.name;
	document.getElementById("workDescDesc").innerHTML = currentSlide.desc;

	currentMedia = currentSlide.media
	currentIndex = 0;
	createWorkSlideAssets(currentMedia);
	var dots = document.getElementsByClassName("dot");
	dots[currentIndex].classList.add("highlightedDot");
}

function changeWork(buttonObj, slideNum) {

	var workPanel1 = document.getElementById("workPanel1");
	var workImagesSlide = document.getElementById('workImagesSlide');

	nextSlideNum = +slideNum - 1;
	nextSlide = slides[nextSlideNum];

	if (nextSlideNum !== currentSlideNum) {

		currentSlideNum = nextSlideNum;
		currentSlide = nextSlide;

		workPanel1.classList.add("slideUpFadeOut");
		workPanel1.addEventListener("animationend", slideUp);
		workImagesSlide.classList.add("slideUpFadeOut");
		workImagesSlide.addEventListener("animationend", slideUp);
	}
};

function slideUp() {

	displayWork();

	workPanel1.classList.remove("slideUpFadeOut");

	workPanel1.classList.add("slideUpFadeIn");

	workImagesSlide.classList.remove("slideUpFadeOut");

	workImagesSlide.classList.add("slideUpFadeIn");

	setTimeout(() => {
		workPanel1.classList.remove("slideUpFadeIn");
		workImagesSlide.classList.remove("slideUpFadeIn");
		workPanel1.removeEventListener("animationend", slideUp);
		workImagesSlide.removeEventListener("animationend", slideUp);
	}, 400);
}

//workSlide left slide creation

createWorkSlideAssets(currentMedia);

function createWorkSlideAssets(albumObj) {

	var dotDiv = document.getElementById('dotDiv');
	var slideBarRight = document.getElementById('slideBarRight');
	var slideBarLeft = document.getElementById('slideBarLeft');

	dotDiv.innerHTML = "";

	displayWorkSlide(albumObj);

	document.getElementById('workImagesSlideBar').style.backgroundColor = currentSlide.color;
	slideBarLeft.style.backgroundColor = currentSlide.color;
	slideBarRight.style.backgroundColor = currentSlide.color;

	slideBarRight.onmouseenter = function(){this.style.backgroundColor = currentSlide.highlightedColor};
	slideBarLeft.onmouseenter = function(){this.style.backgroundColor = currentSlide.highlightedColor};

	slideBarRight.onmouseleave = function(){this.style.backgroundColor = currentSlide.color};
	slideBarLeft.onmouseleave = function(){this.style.backgroundColor = currentSlide.color};

	for (let i = 0; i < albumObj.length; i++) {
		var dot = document.createElement('span');
		dot.className = "dot";
		dot.style.margin = "4px";
		dotDiv.appendChild(dot);
	}

	window.addEventListener('DOMContentLoaded', (event) => {
		var dots = document.getElementsByClassName("dot");
		dots[currentIndex].classList.add("highlightedDot")
    });
};

function displayWorkSlide(albumObj) {

	document.getElementById('workImagesSlidePics').innerHTML = "";
	var img = document.createElement('img');
	img.src = albumObj[currentIndex];
	img.style.width = "100%"
	img.style.height = "100%"
	img.style.objectFit = "fill";
	img.id = "centerSlideImg"
	document.getElementById('workImagesSlidePics').appendChild(img);

	var rightImg = document.createElement('img');
	rightImg.src = albumObj[currentIndex + 1];
	rightImg.style.width = "100%"
	rightImg.style.height = "86%"
	rightImg.style.objectFit = "fill";
	rightImg.id = "rightSlideImg";
	document.getElementById('workImagesSlidePics').appendChild(rightImg);

	var leftImg = document.createElement('img');
	leftImg.src = albumObj[currentIndex - 1];
	leftImg.style.width = "100%"
	leftImg.style.height = "86%"
	leftImg.style.objectFit = "fill";
	leftImg.id = "leftSlideImg";
	document.getElementById('workImagesSlidePics').appendChild(leftImg);

	window.addEventListener('DOMContentLoaded', (event) => {
    	var dots = document.getElementsByClassName("dot");
    	dots[currentIndex].classList.add("highlightedDot")
    });

}

function slideshowRight() {
	if ((currentIndex + 1) !== currentMedia.length) {
		var dots = document.getElementsByClassName("dot");
		dots[currentIndex].classList.remove("highlightedDot")
		dots[currentIndex + 1].classList.add("highlightedDot")
		document.getElementById('rightSlideImg').classList.add("slideLeft");
		document.getElementById('centerSlideImg').classList.add("slideLeft");
		document.getElementById('centerSlideImg').addEventListener("animationend", nextRightSlide);
	}
}

function nextRightSlide() {
	document.getElementById('rightSlideImg').classList.remove("slideLeft");
	document.getElementById('centerSlideImg').classList.remove("slideLeft");
	document.getElementById('rightSlideImg').classList.remove("slideRight");
	document.getElementById('centerSlideImg').classList.remove("slideRight");
	currentIndex++
	displayWorkSlide(currentSlide.media)
}

function slideshowLeft() {
	if (currentIndex !== 0) {
		var dots = document.getElementsByClassName("dot");
		dots[currentIndex].classList.remove("highlightedDot")
		dots[currentIndex - 1].classList.add("highlightedDot")
		document.getElementById('leftSlideImg').classList.add("slideRight");
		document.getElementById('centerSlideImg').classList.add("slideRight");
		document.getElementById('centerSlideImg').addEventListener("animationend", nextLeftSlide);
	}
}

function nextLeftSlide() {
	document.getElementById('rightSlideImg').classList.remove("slideLeft");
	document.getElementById('centerSlideImg').classList.remove("slideLeft");
	document.getElementById('rightSlideImg').classList.remove("slideRight");
	document.getElementById('centerSlideImg').classList.remove("slideRight");
	currentIndex--
	displayWorkSlide(currentSlide.media)
}

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
const eugeniaCooney = {name: "Nobody", workType:"fan art", origin: "Kingdom Hearts", character: "(inspired by) Organization XIII members", source:"assets/images/instagramArt/digital/eugeniaCooney.jpeg", medium:"Adobe Photoshop CS6", date: "November 26, 2019"}

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
		img.onclick = function() {openPopup(); createArtPopup(imgObj[i].source);};


		document.getElementById('instagramContainer').appendChild(img);
	}
};

//art popup

function createArtPopup(source) {
	var img = document.createElement('img');
	img.src = source;
	img.style.height = "80vh";
	document.getElementById('popupContent').appendChild(img);
}

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

	const onBTS = {idName: "audioOnBTS", name: "On - BTS", source:"assets/images/youtubeThumbnails/OnBTS.jpeg", audio:"assets/audio/on.mp3", demo:"assets/audio/onDemo.mp3", date:"March 10, 2020", difficulty: "advanced", scoreType: "arrangement", musescore: "https://musescore.com/user/32588974/scores/6012137", youtube: "https://www.youtube.com/watch?v=LozbmF1Gnj8"}
	const memoriesOfTheCity = {idName: "audioMemoriesOfTheCity", name: "Memories Of The City - Persona 3", source:"assets/images/youtubeThumbnails/MemoriesOfTheCity.jpeg", audio: "assets/audio/memoriesOfTheCity.mp3", demo:"assets/audio/memoriesOfTheCityDemo.mp3", date:"September 27, 2019", difficulty: "advanced", scoreType: "arrangement", musescore: "https://musescore.com/user/32588974/scores/5737666", youtube: "https://www.youtube.com/watch?v=cKeEUMdDgDI"}
	const deadmansGun = {idName: "audioDeadmansGun", name: "Deadman's Gun - Red Dead Redemption", source:"assets/images/youtubeThumbnails/deadmansGun.jpeg", audio: "assets/audio/deadmansGun.mp3", demo: "assets/audio/deadmansGunDemo.mp3", date: "July 31, 2019", difficulty: "intermediate", scoreType: "transcription", musescore: "https://musescore.com/user/32588974/scores/5660263", youtube: "https://www.youtube.com/watch?v=pvcfyo5jH10"}
	const newBorn = {idName: "audioNewBorn", name: "New Born (Hybrid) - The World Ends With You",  source: "assets/images/youtubeThumbnails/NewBorn.png", audio: "assets/audio/newBornHybrid.mp3", demo: "assets/audio/newBornHybridDemo.mp3", date: "July 29, 2021", difficulty: "advanced", scoreType: "transcription", musescore: "https://musescore.com/user/32588974/scores/6891516", youtube: "https://www.youtube.com/watch?v=BXTItyxx7Jw"}

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
		cover.onclick = function() {openPopup(); createMusicPopup(musicObj[i]);};
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

	//view more piece info on popup

	function createMusicPopup(score) {
		var popupContent = document.getElementById("popupContent");
		var attributes = [score.name, score.date, score.difficulty, score.scoreType]
		var labels = ["Name: ", "Date Published: ", "Difficulty: ", "Score Type: "]

		for (let i = 0; i < labels.length; i++) {
			var label = document.createElement('span');
			label.innerHTML = labels[i]
			label.style.fontSize = "25px"
			label.style.fontFamily = "cocomatBold"
			popupContent.appendChild(label);

			var info = document.createElement('span');
			info.innerHTML = attributes[i];
			info.style.fontSize = "20px"
			info.style.fontFamily = "cocomat"
			popupContent.appendChild(info);

			var space = document.createElement('br');
			popupContent.appendChild(space)

		}

		var msLink = document.createElement('span');
		msLink.innerHTML = "Downloads: ";
		msLink.style.fontSize = "25px";
		msLink.style.fontFamily = "cocomatBold";
		popupContent.appendChild(msLink);

		var msHyperLink = document.createElement('span');
		msHyperLink.style.fontSize = "20px";
		msHyperLink.style.fontFamily = "cocomat";
		msHyperLink.style.cursor = "pointer";
		msHyperLink.innerHTML = '<i class="fa fa-external-link"></i>';
		msHyperLink.setAttribute('onclick', "window.open('" + score.musescore + "')");
		popupContent.appendChild(msHyperLink);

		var space2 = document.createElement('br');
		popupContent.appendChild(space2)

		var ytLink = document.createElement('span');
		ytLink.innerHTML = "Youtube Tutorial: ";
		ytLink.style.fontSize = "25px";
		ytLink.style.fontFamily = "cocomatBold";
		popupContent.appendChild(ytLink);

		var ytHyperLink = document.createElement('span');
		ytHyperLink.style.fontSize = "20px";
		ytHyperLink.style.fontFamily = "cocomat";
		ytHyperLink.style.cursor = "pointer";
		ytHyperLink.innerHTML = '<i class="fa fa-external-link"></i>';
		ytHyperLink.setAttribute('onclick', "window.open('" + score.youtube + "')");
		popupContent.appendChild(ytHyperLink);

	}



// skills

const talents = ["Self Teaching", "Prototype Design", "Creative Writing", "Leadership", "Music Creation", "Public Speaking & Presentation"];
const programming = ["Javascript", "HTML", "CSS", "Jquery", "React", "Python", "Github/Github Pages"];
const design = ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Wix", "Digital Drawing", "Graphic Design"];

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

const logos = ["assets/images/skillsIcons/Adobe_Photoshop_CC_icon.svg.png", "assets/images/skillsIcons/communityIcon_4g1uo0kd87c61.png", "assets/images/skillsIcons/5968762.png", "assets/images/skillsIcons/HTML5_logo_and_wordmark.svg.png", "assets/images/skillsIcons/CSS3_logo_and_wordmark.svg.png", "assets/images/skillsIcons/pngwing.com (1).png", "assets/images/skillsIcons/Python-logo-notext.svg.png", "assets/images/skillsIcons/pngwing.com.png", "assets/images/skillsIcons/Adobe_Illustrator_CC_icon.svg.png", "assets/images/skillsIcons/pngwing.com (2).png", "assets/images/skillsIcons/free-figma-2296071-1912030.png"]

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
