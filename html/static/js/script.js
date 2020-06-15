//alert ('hello');
function ageInDays(){
    var birthdays= prompt('what year were you born.. godd friends?')
    var calculation= (2019 - birthdays) * 365
    var h1= document.createElement('h1')
    var textAnswer= document.createTextNode ('you are '+ calculation + 'days old' )
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}
function reset(){
    document.getElementById('ageInDays').remove();
} 
//cat generetor
function catgeneretor(){
    var image=document.createElement('img')
    var div= document.getElementById('cat-gen')
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)
}
//chalenge 3

function rpsGame(yourChoice){
    console.log(yourChoice)

    var humanChoice, botChoice
    humanChoice= yourChoice.id
   

    botChoice= numberToChoice(randToChoice())
    console.log('computer choice:', botChoice)

    results= decidewinner(humanChoice, botChoice)
    console.log(results)

    message= finalMessage(results)
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message)

}

function randToChoice(){
    return Math.floor(Math.random())
}
function numberToChoice(number){
    return['rock', 'paper', 'scissors'] [number]
}
function decidewinner(yourChoice, computerChoice){
    var rpsDatabase= {
        'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0}

    };


var yourScore= rpsDatabase [yourChoice][computerChoice]
var computerScore= rpsDatabase [computerChoice][yourChoice]
return [yourScore, computerScore]
};

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
     return  {'message': 'you lost', 'color': 'red'}
    }
     else if(yourScore === 0.5){
         return {'message': 'you tied', 'color': 'yellow'}
     }
     else{
         return{'message':'you won', 'color': 'greeen'}
     }
    }
    function rpsFrontEnd( humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv= document.createElement('div')
    var botDiv= document.createElement('div')
    var messageDiv= document.createElement('div')

    humanDiv.innerHTML="<img src= '" + imagesDatabase [humanImageChoice] + "' height=150 width=150>"
   
    messageDiv.innerHTML="<h1 syyle= 'color: " + finalMessage ['color'] +";font-size=60px padding= 30px'>" + finalMessage['message'] + "</h1>"
 
    botDiv.innerHTML="<img src='" + imagesDatabase [botImageChoice] + "'height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
 
    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)


}

//chalange 4:: change the color of all buttons
var all_buutons=document.getElementsByTagName('button');
var copyAllButton=[];
for(let i=0; i < all_buutons.length; i++){
    copyAllButton.push(all_buutons[i].classList[1]);
  
}

function buttonChangeColor(buttonThingy){
    if(buttonThingy.value==='red'){
        buttonRed();
    }else if(buttonThingy.value==='green'){
        buttonGreen();
    }else if(buttonThingy.value==='reset'){
        buttonReset();
}else if(buttonThingy.value==='random'){
    buttonRandom();

}
}

function buttonRed(){
    for(let i=0; i<all_buutons.length; i++){
        all_buutons[i].classList.remove(all_buutons[i].classList[1]);
        all_buutons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0; i<all_buutons.length; i++){
        all_buutons[i].classList.remove(all_buutons[i].classList[1]);
        all_buutons[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0; i<all_buutons.length; i++){
        all_buutons[i].classList.remove(all_buutons[i].classList[1]);
        all_buutons[i].classList.add(copyAllButton[i]);
    }
}

function buttonRandom(){
    var choice=['btn-primary','btn-danger', 'btn-secondary', 'btn-success']
    for(let i=0; i<all_buutons.length; i++){
        var randomColor=Math.floor(Math.random() * 4);
        all_buutons[i].classList.remove(all_buutons[i].classList[1]);
        all_buutons[i].classList.add(choice[randomColor]);
    }
}


//Challenge:: 5 Blackjack game

blackjackGame={
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},
    'cards' : ['2','3','4','5','6','7','8','9','10','K','J','Q','A']
};



const You=blackjackGame['you'];
const Dealer=blackjackGame['dealer'];

const hitSound= new Audio('sounds/swish.m4a');


document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


function blackjackHit(){
    let card= randomCards();
    showCard(You);
}


function showCard(activePlayer){
    let cardImage= document.createElement('img');
    cardImage.src= 'image/${card}.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}



function blackjackDeal(){
let yourImage=document.querySelector('#your-box').querySelectorAll('img');
let dealerImage=document.querySelector('#dealer-box').querySelectorAll('img');

for(i=0; i<yourImage.length; i++){
    yourImage[i].remove();
}

for(i=0; i<dealerImage.length; i++){
    dealerImage[i].remove();
}

}


function randomCards(){
    let randomIndex= Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}
