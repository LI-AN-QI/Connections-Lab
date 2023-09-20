
//Interaction 1:
//Change the text content by scrolling.

//Step1: select the text
let initialtext = document.getElementById("text");

//Step2: listen to the event 'the page is scrolled'
window.addEventListener('scroll',function(){
//scrollY: the number of pixels that the page is currently scrolled.
    //Step3: Check the number of pixels the page is scrolled. 
        //When scrollY>220, show the second half of the sentence
        if(scrollY>220){
        initialtext.textContent = "...then I tried to reach for my phone to check the time";
        }else{
        //When scroll back(scrollY<220), show the first half the sentence
        initialtext.textContent = "Yesterday, I suddenly woke up in the middle of night...";
        }
});


//Interaction 2:
//Change the image when the mouse is moved onto the image.
//Change back when the mouse is moved away.

//Step1: select the image for the switch
let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");

//Step2:Listen to the event 'the mouse is moved onto the image'
image1.addEventListener("mouseover",function(){
    //Step2.1: hide first image, hide the sentence, show the second image
    image1.classList.add("hidden");
    image2.classList.remove("hidden");
    initialtext.classList.add("hidden");
}
)

//Step3: Listen to the event 'the mouse is moved out of the image'
image2.addEventListener("mouseout", function() {
    //Step3.1: hide the second image, show the sentence, show the first image
    image2.classList.add("hidden");
    image1.classList.remove("hidden");
    initialtext.classList.remove("hidden");
});