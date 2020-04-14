let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let myJSON = {
  "title" : "Wendy",
  "picture_url" : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lil-Bub-2013.jpg/320px-Lil-Bub-2013.jpg",
  "favorite_color" : "#FF0072",
  "skills" : ["cat", "dog", "roomba"]
}

var randomIndex = Math.floor(Math.random() * myJSON["skills"].length);

printToPage( randomIndex );

function printToPage(incoming) {
  outputParagraph.innerHTML = incoming;
}

let jsonDatabase = [
  {
    "title" : "Leah",
    "picture_url" : "mom.jpg",
    "favorite_color" : "#ff0000",
    "skills" : ["trying to stay organized and keep the house clean", "has kind of given up herself but still wants everyone else to do housework", "lowkey kind of freaking out about the pandemic and won't let anyone leave the house"]
  },
  {
    "title" : "Nick",
    "picture_url" : "dad.jpg",
    "favorite_color" : "#ff0000",
    "skills" : ["is truly just happy to have his family around so much and that everyone is safe", "lots of hugs", "manages the pandemic by cooking a lot."]
  },
  {
    "title" : "Anna",
    "picture_url" : "anna.jpg",
    "favorite_color" : "#ff0000",
    "skills" : ["misses her friends a lot and is always on the phone talking to them", "knows every single tiktok dance", "takes a lot of \"breaks\" from school work to watch tiktoks"]
  },
  {
    "title" : "Michael",
    "picture_url" : "michael.png",
    "favorite_color" : "#ff0000",
    "skills" : ["pretty used to being inside anyway so not much has changed", "has become completely nocturnal which is great", "eats ALL THE SNACKS IN THE HOUSE"]
  },
  {
    "title" : "Ali",
    "picture_url" : "ali.jpg",
    "favorite_color" : "#ff0000",
    "skills" : ["locks herself in her room for at least 9 hours a day to \"do homework\"", "has become obsessed with the Tiger King series and won't shut up about it", "complains about not being in New York but is also lowkey kind of scared to go back until corona is gone"]
  }

]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerHTML = incomingJSON['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerHTML = "Skills:";
  newContentElement.appendChild(newContentSubhead);

  let newContentSkillList = document.createElement("UL");
  newContentElement.appendChild(newContentSkillList);

  for (var i = 0; i < incomingJSON['skills'].length; i++) {
    var currentSkillString = incomingJSON['skills'][i];
    var newSkillItem = document.createElement("LI");
    newSkillItem.innerHTML = currentSkillString;
    newContentSkillList.appendChild(newSkillItem);
  }

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['picture_url'];
  newContentElement.appendChild(newImage);
  contentGridElement.appendChild(newContentElement);

}
