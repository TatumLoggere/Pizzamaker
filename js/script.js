// Hier selecteer ik alle elementen uit de html

//getelementbyID zorgt ervoor dat ik elementen kan pakken bij de id
//de variabele geef aan doormiddel van camelcase (aA)
var tomaat = document.getElementById('tomaat');
var kaas = document.getElementById('kaas');
var tomaatSaus = document.querySelector('.tomaat-saus');
var kaasSaus = document.querySelector(".kaas-saus");
var nextBtn = document.querySelector(".next-button");
var sausBtns = document.querySelectorAll(".button-sauce");
var ingredientsContainer = document.querySelector(".ingredients-container");
var headerTitle = document.querySelector(".title");
var prevBtn = document.querySelector(".prev-button");
var ingredients = document.querySelectorAll(".ingredient");
var sauceBtnContainer = document.querySelector(".saucebutton-container");

var tomaatContainer = document.querySelector(".tomaat-container");
var mozarellaContainer = document.querySelector(".mozarella-container");
var baconContainer = document.querySelector(".bacon-container");
var ananasContainer = document.querySelector(".ananas-container");
var mushroomContainer = document.querySelector(".mushroom-container");

var audio = new Audio("sound/audio.mp3")
console.log(audio);

headerTitle.textContent = "Selecteer een pizza";


//bronnen --
//https://www.pngegg.com/en/png-fnizq 
//https://www.pngegg.com/en/png-ysrat
//https://www.pngegg.com/en/png-zmbjx
//https://www.pngegg.com/en/png-bmfrw
//https://www.pngegg.com/en/png-owkih

function addIngrdient(id){

    console.log(id)
    if(id == "tomaat"){
        tomaatContainer.classList.toggle("appear");
    }else if(id == "mozarella"){
        mozarellaContainer.classList.toggle("appear");
    }else if(id == "bacon"){
        baconContainer.classList.toggle("appear");
    }else if(id == "ananas"){
        ananasContainer.classList.toggle("appear");
    }else if(id == "mushrooms"){
       mushroomContainer.classList.toggle("appear");
    }else if(id == "tonijn"){
        console.log("heerlijke tonijn");
    }
}

function removeIngredients(){
    if(ingredientsContainer.classList.contains("appear")){
        sausBtns.forEach(function(btn){
            btn.classList.remove("disappear");
        })

        ingredientsContainer.classList.remove("appear");
        sauceBtnContainer.classList.remove("disappear");
        headerTitle.textContent = "Selecteer een pizza";
        nextBtn.classList.remove("disappear");
        prevBtn.classList.remove("appear");
    }
}

function nextItems(){
    //hier heb ik alle buttons geselecteerd doormiddel van queryselectorALL
    //foreach fucntie om ervoor te zorgen dat je elke button binnen de Nodelist iets laat doen
    sausBtns.forEach(function(btn){
        btn.classList.add("disappear");
    });

    ingredientsContainer.classList.add("appear");
    prevBtn.classList.add("appear");
    sauceBtnContainer.classList.add("disappear");
    nextBtn.classList.add("disappear");

    headerTitle.textContent = "Selecteer je ingredienten (Max. 5)";
}

//voeg tomaatsaus toe aan de pizza (Audio)
function addSauce(){
    audio.load()
    audio.play()
    //hier check ik of kaassaus bestaat zodat de gebruiker niet meerdere sauzen kan selecteren
    if(kaasSaus.classList.contains("reveal")){
        kaasSaus.classList.remove("reveal");
    }else{
        tomaatSaus.classList.toggle("reveal");
    }
}

function addCheeseSauce(){

    if(tomaatSaus.classList.contains("reveal")){
        tomaatSaus.classList.remove("reveal");
    }else{
        kaasSaus.classList.toggle("reveal")
    }
}


//clickevent die bepaalde functionaliteiten af laat gaan voor de sauzen
tomaat.addEventListener("click", addSauce);
kaas.addEventListener("click", addCheeseSauce);

nextBtn.addEventListener("click", nextItems);
prevBtn.addEventListener("click", removeIngredients);

//ik heb alle buttons geselecteerd doormiddel van queryselectorAll 
ingredients.forEach(function(ingredient){
    ingredient.addEventListener("click", function(e){

        var id = e.target.dataset.ingredient;
        addIngrdient(id);
    });
})

//Bron audio: https://mixkit.co/free-sound-effects/discover/pizza/
