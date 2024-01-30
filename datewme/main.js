const wrapper =document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const btnyes = document.querySelector(".btn-yes");
const btnno = document.querySelector(".btn-no");

btnyes.addEventListener("click" , ()=>{
    question.innerHTML = "Yay , see you soon darlin'!"
    gif.src = "https://media.giphy.com/media/dAEkdL9CIG8UVLfUWW/giphy.gif";
});

btnno.addEventListener("mouseover" , () =>{
    const btnnoRect = btnno.getBoundingClientRect();
    const maxX = window.innerWidth - btnnoRect.width ;
    const maxY = window.innerHeight - btnnoRect.height;


    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnno.style.left = randomX + "px" ;
    btnno.style.top = randomY + "px";
});
