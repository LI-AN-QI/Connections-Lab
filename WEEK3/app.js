let section1element = document.getElementById('s1');
let yesbutton = document.getElementById("yes");
let jar = document.getElementById("jarimg");
let cks = document.getElementById("cksimg");
let cookie = document.getElementById("cookieimg");
let left =document.getElementById("leftimg");
let right =document.getElementById("rightimg");
let tape =document.getElementById("tapeimg");
let arrow =document.getElementById("arrowimg");
let crack =document.getElementById("crack");
let textp =document.getElementById("textp");
let tryagain=document.getElementById("tryagain");
let share=document.getElementById("share");

//Section1:
//Press the button ‘yes,please’, and send to the next section.
//1.Get the height of 'section 1'
/*offsetHeight: get the height of element*/
let section1height = section1element.offsetHeight;
//2.When click 'yes,please', scroll to the next section
yesbutton.addEventListener('click',function(){
    window.scrollTo({
        top: section1height,
        behavior: 'smooth'
    });
})

//Section2:
//When click the jar,shake the jar, then show one cookie, enlarge it, hide the jar
//1.Give EventListner'click' to both jar and cookies, so wherever user click, the jar will response
jar.addEventListener("click",function(){
    clickjar ()
});
cks.addEventListener('click',function(){
    clickjar ()
})

//Section 3: 
//Show the cracked cookie, show the tape, lead the user click the tape
//1.when the 'crack it' button is clicked
crack.addEventListener('click',function(){
    //2.scroll to section 3
    window.scrollTo({
        top: section1height*2,
        behavior: 'instant'
    });
    //3.show the cookie and tape
    left.style.opacity = 1;
    right.style.opacity = 1;
    tape.style.opacity = 1;
    //4.wait for 2.5s, show the arrow
    setTimeout(()=>{
        arrow.style.opacity = 1;
        ////need to add animation to arrow(like up and down)////
    },2500);

});
//5.when the tape is clicked, scroll to next section
tape.addEventListener('click',function(){
    window.scrollTo({
        top: section1height*3,
        behavior: 'instant',
    });
})



////////////////////////////////////////
//Section4:
//Show random phrase, then show button: try again and share.
//when click try again, pull the user back to the previous page
//when click share, copy the link of page

//1.when user stop at section4, show a random advice
window.addEventListener('load',function(){

    window.addEventListener('scroll',function(){
        //approximate loaction of section4
        if (scrollY>=2100){
            //fetch and show random phrase
            // getAdvice()
            
                let phraseElement = document.getElementById('textp');
                fetch("https://api.adviceslip.com/advice")
                .then (function(response){
                    return response.json()
                })
                .then(function(data){   
                    let randomphrase = data.slip.advice;
                    phraseElement.innerHTML = randomphrase
                    textp.style.opacity = 1;
                }) 
            
            //let the buttons generally emerge
            setTimeout(()=>{
                tryagain.style.opacity = 1;
                share.style.opacity = 1;
            },2800);
        }
    })



})


//2.when click try again, show another phrase（scoll back to section2）
tryagain.addEventListener('click',function(){
    // getAdvice()   
    window.scrollTo({
        top: section1height,
        behavior: 'instant'
    });  
})


//Functions:
// get advice
// function getAdvice(){
//     let phraseElement = document.getElementById('textp');
//     fetch("https://api.adviceslip.com/advice")
//     .then (function(response){
//         return response.json()
//     })
//     .then(function(data){
//         let randomphrase = data.slip.advice;
//         phraseElement.innerHTML = randomphrase
//         textp.style.opacity = 1;
//     }) 
// }
function clickjar (){
    //2.shake the cookies inside by adding an animation property to class
    cks.classList.add('shake'); 
    //3.wait the jar to shake for 2s,then show the picked cookie
    setTimeout(()=>{
        //4.generally show the cookie image, enlarge it, and move it to the center
        /*let the opacity:0 -> 1,scale:0->4,translateY:80px */
        cookie.style.opacity = 1;
        cookie.style.transform = 'scale(4) translateY(80px)';

        //5.wait for 1s, and hide the cookie jar
        setTimeout(()=>{
            cks.style.opacity = 0;
            jar.style.opacity = 0;

            //6.wait for 2.5s, and show the button 'crack it'
            setTimeout(()=>{
                crack.style.opacity = 1;
            },2500);

        },1000);

    },2000);
}


//////////Add a function of 'click the flavor button, change the cookie color' in section1
//////////Add sound effect (cookie crack)
//////////Change the jar image?
//////////Add moving up&down effect to the triangle in section3
//////////Qusetions with 'fade in' text in section4


//QUESTIONS:

//line 75:
//If I delete addEventLister('load'), the page still works and show the same effect
//If addEventListener('scroll') and ('load') have the same funciton in this case?

//line 91 in js, 
//line 234 in css (text's style class: hidden):
//For the first fetch, the text can have a fade in effect 
//but after clicking 'try again' btn: the page scroll to previous step, and come back to this page again
//the fade in effect would disappear, 
//the user will see a delay of the previous text before they see the new text
//How can I eliminate that delay?
//Is there any method to keep the 'fade in' effect with all the following text?