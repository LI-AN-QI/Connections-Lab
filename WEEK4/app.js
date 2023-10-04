//------------------------------------Virables:------------------------------------//
let section1element = document.getElementById('s1');
let randombutton = document.getElementById("random");
let jar = document.getElementById("jarimg");
let cks = document.getElementById("cksimg");
let cookie = document.getElementById("cookieimg");
let left =document.getElementById("leftimg");
let right =document.getElementById("rightimg");
let tape =document.getElementById("tapeimg");
let arrow =document.getElementById("arrowimg");
let crack =document.getElementById("crack");
let textp =document.getElementById("textp");
let back=document.getElementById("back");
let about=document.getElementById("about");
let close=document.getElementById("close");
let search=document.getElementById("search");
let searchbtn=document.getElementById("searchbtn");

//The whole page is equally divided into 5 sections,
//The height of the first section is get using 'offsetHeight' fucntion, so that the height value can be used into 'scrollTo' function to change between different sections
let section1height = section1element.offsetHeight;


//'click' action feedback : icon change of the cursor
window.addEventListener('mousedown',function(){
    document.body.style.cursor= 'url("cursor2.png"),auto';
})
window.addEventListener('mouseup',function(){
    document.body.style.cursor= 'url("cursor.png"),auto';
})


//------------------------------------Section1: the landing page------------------------------------//
//Elements:
//1.Random button: When click the button, send user to section2.
//2.Search buttton: When click the button, send user to section5.
//3.About button: When click the button, send user to section4.



//1.When click 'random', scroll to section2
randombutton.addEventListener('click',function(){
    window.scrollTo({
        top: section1height,
        behavior: 'smooth'
    });
})

//2.When click 'search',scroll to section5
search.addEventListener('click',function(){  
    window.scrollTo({
    top:section1height*5,
    behavior:'instant'
})
})

//3.When click 'about',scroll to section4
about.addEventListener('click',function(){
    window.scrollTo({
        top:section1height*4,
        behavior:'instant'
    })
})


//------------------------------------Section2~4: random advice generation pages------------------------------------//



//--------------------------------------Section2: click the jar to get a cookie--------------------------------------//
// 1. When the jar is clicked, shake the jar
// 2. Show one cookie, hide the jar
// 3. Show the 'crack it' button

//1.set EventListner'click' to both jar.png and cookies.png, so wherever user click, the jar will response
jar.addEventListener("click",function(){
    clickjar ()
});
cks.addEventListener('click',function(){
    clickjar ()
})
function clickjar (){
    cks.classList.add('shake'); //'shake' is an animation property inside style.css
    //2.wait for 2s, show one cookie
    setTimeout(()=>{ 
        cookie.style.opacity = 1; //change opacity 0 -> 1
        cookie.style.transform = 'scale(4) translateY(80px)';//change scale 0->4, translateY: 80px
        //2.wait for 1s, hide the jar
        setTimeout(()=>{ 
            cks.style.opacity = 0; //cks:the cookies inside, change opacity 0 -> 1
            jar.style.opacity = 0; //jar:the cookies jar, change opacity 0 -> 1
            //3.wait for 2.5s, show the button 'crack it'
            setTimeout(()=>{
                crack.style.opacity = 1; //change opacity 0 -> 1
            },2500);
        },1000);
    },2000);
}



//--------------------------------------Section3: check out your advice paper--------------------------------------//
//1.scroll to section3
//2.Show the cracked cookie and the tape
//3.show the arrow (lead the user to click the tape)

//1.when the 'crack it' button is clicked,scroll to section 3
crack.addEventListener('click',function(){
    window.scrollTo({
        top: section1height*2,
        behavior: 'instant'
    });
    //2.show the cookie and tape
    left.style.opacity = 1;
    right.style.opacity = 1;
    tape.style.opacity = 1;
    //3.wait for 1.5s, show the arrow
    setTimeout(()=>{
        arrow.style.opacity = 1;
    },1500);
});


//--------------------------------------Section4: show content of advice paper--------------------------------------//
//1.Scroll to section4
//2.Show random phrase
//3.show back button
//4.when click back, scroll back to the landing page


//----------------Condition 1---------------//
//1.when the tape is clicked, scroll to section4
tape.addEventListener('click',function(){
    window.scrollTo({
        top: section1height*3,
        behavior: 'instant',
    });
})
//2.fetch a random phrase from an APIURL, set that value to textp, and show it on webpage
tape.addEventListener('click',function(){
    let phraseElement = document.getElementById('textp'); //textp is the id for the p tag element used for holdong the random phrase
    fetch("https://api.adviceslip.com/advice")
    .then (function(response){
        return response.json()
    })
    .then(function(data){   
        let randomphrase = data.slip.advice;
        phraseElement.innerHTML = randomphrase
        textp.style.opacity = 1; // change opacity 0->1
    })         
    //3.wait for 2.5s,show the back button
    setTimeout(()=>{
        back.style.opacity = 1;
    },2500);
})


//----------------Condition 2---------------//
//1.when the search icon (in section6)is clicked, scroll to section4
searchbtn.addEventListener('click',function(){
    window.scrollTo({
        top:section1height*3,
        behavior:'instant'
    })

//2.get the value of user input and add that value after the APIURL for search
    //2.1.fetch a random phrase from search APIURL, set that value to textp, and show it on webpage
    let inputText = document.getElementById("search-input").value;
    let API = "https://api.adviceslip.com/advice/search/" + inputText;
    fetch(API)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        let phraseElement = document.getElementById('textp');
        phraseElement.innerHTML = data.slips[0].advice;
        textp.style.opacity = 1;
    })
    //2.2.when user input an value out of the database, show a notice
    .catch(err =>{
        console.log("error is: " + err);
        let phraseElement = document.getElementById('textp');
        phraseElement.innerHTML = "Opps! Could not find a advice, try other words!"
    })
    //3.wait for 2.5s,show the back button
    setTimeout(()=>{
        back.style.opacity = 1;
    },2500);
})

//4.when click back,scroll back to the landing page
back.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });  
})


//--------------------------------------Section5: About page--------------------------------------//
//when click 'X'icon, close About:
close.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'instant'
    })
})



// ------------------p5 code-------------------- //
// sound effect //
let clicksd;
let cracksd1;
let cracksd2;
let getsd1;
let getsd2;
let shakesd;

function preload(){
    clicksd = loadSound('click.mp3');
    cracksd1 = loadSound('crack1.mp3');
    getsd1 = loadSound('get1.mp3');
    getsd2 = loadSound('get2.mp3');
    shakesd = loadSound('shake.mp3');
}

function setup() {
    jar.addEventListener('click',playshakesd);
    cks.addEventListener('click',playshakesd);
    crack.addEventListener('click',playcracksd1);
    tape.addEventListener('click',playclicksd);
    back.addEventListener('click',playclicksd);
    randombutton.addEventListener('click',playclicksd);
    search.addEventListener('click',playclicksd);
    searchbtn.addEventListener('click',playclicksd);
    about.addEventListener('click',playclicksd);
    close.addEventListener('click',playclicksd);
}

function playshakesd() {
    if (shakesd.isLoaded()) {
        shakesd.play(); 
      }
    setTimeout(()=>{
        getsd2.play();
    },2500);
}

function playcracksd1(){
    if (cracksd1.isLoaded()) {
        cracksd1.play(); 
      } 
}

function playclicksd(){
    if (clicksd.isLoaded()) {
        clicksd.play(); 
      } 
}
