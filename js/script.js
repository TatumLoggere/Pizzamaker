// Hier selecteer ik alle elementen uit de html

//getelementbyID zorgt ervoor dat ik elementen kan pakken bij de id
//de variabele geef aan doormiddel van camelcase
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

var audio = new Audio("Sound/audio.mp3")

console.log(audio);

headerTitle.textContent = "Selecteer een pizza";


//bronnen --
function addIngrdient(id){
    //check of de id een bepaalde ingredient is en voer de code uit die er bij hoort

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
        console.log("heel goed tonijn");
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

//voeg tomaatsaus toe aan de pizza
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
        // kaasSaus.classList.toggle("reveal");
    }else{
        kaasSaus.classList.toggle("reveal")
    }
    
    // if(tomaatSaus.classList.contains("reveal")){
    //     tomaatSaus.classList.remove("reveal");
    //     kaasSaus.classList.toggle("reveal");
    // }else{
    //     console.log("succes!")
    // }
}


// function tomaatSaus(){
//     console.log("hallo");
// }

//clickevent die bepaalde functionaliteiten af laat gaan voor de sauzen in deze scenario
tomaat.addEventListener("click", addSauce);
kaas.addEventListener("click", addCheeseSauce);

nextBtn.addEventListener("click", nextItems);
prevBtn.addEventListener("click", removeIngredients);

//selecteer alle buttons doormiddel van queryselectorAll || callback function
ingredients.forEach(function(ingredient){
    ingredient.addEventListener("click", function(e){

        //pak de dataset die hoort bij een element en stop die in een variabele
        var id = e.target.dataset.ingredient;
        //call/invoke de onderstaande functie
        addIngrdient(id);
    });
})

