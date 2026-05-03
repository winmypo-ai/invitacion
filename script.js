let current=0;
const slides=document.querySelectorAll(".slide");
const music=document.getElementById("bg-music");
let started=false;

function showSlide(index){
slides.forEach(s=>s.classList.remove("active"));
slides[index].classList.add("active");
}

function nextSlide(){
if(current < slides.length-1){
current++;
showSlide(current);
}
}

function prevSlide(){
if(current > 0){
current--;
showSlide(current);
}
}

document.body.addEventListener("click", function(e){
if(e.target.closest(".btn")) return;

const x = e.clientX;
const width = window.innerWidth;

if(current === 0 && !started){
music.play().catch(()=>{});
started=true;
}

if(x > width/2){
nextSlide();
}else{
prevSlide();
}
});
