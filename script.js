/* CURSOR GLOW */
const glow = document.getElementById("cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* TYPING ANIMATION */
const roles = [
  "Software Developer",
  "Web Developer",
  "Problem Solver",
  "CSE Undergraduate"
];

let i = 0, j = 0, del = false;
const typing = document.getElementById("typing");

function type(){
  const r = roles[i];
  typing.textContent = del ? r.slice(0, --j) : r.slice(0, ++j);

  if(j === r.length) del = true;
  if(j === 0 && del){
    del = false;
    i = (i + 1) % roles.length;
  }
  setTimeout(type, del ? 50 : 100);
}
type();

/* ASK BOT */
askBtn.onclick = () => {
  askBot.style.display = askBot.style.display === "flex" ? "none" : "flex";
};

/* SCROLL REVEAL + FORCE LOAD */
const sections = document.querySelectorAll(".reveal");

function reveal(){
  sections.forEach(sec => {
    if(sec.getBoundingClientRect().top < window.innerHeight - 120){
      sec.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.onload = () => {
  sections.forEach(sec => sec.classList.add("active"));
};

/* BACKGROUND PARTICLES */
const canvas = document.getElementById("artCanvas");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

const particles = Array.from({length:80}, () => ({
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  vx: (Math.random()-.5)*0.3,
  vy: (Math.random()-.5)*0.3
}));

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy;
    if(p.x<0||p.x>canvas.width) p.vx*=-1;
    if(p.y<0||p.y>canvas.height) p.vy*=-1;
    ctx.fillStyle="rgba(34,211,238,.6)";
    ctx.beginPath();
    ctx.arc(p.x,p.y,1.5,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();


/* SMOOTH ANCHOR SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click", e=>{
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior:"smooth" });
    }
  });
});


