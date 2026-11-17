// Interacciones exclusivamente visuales. No hay base de datos ni solicitudes al servidor.
const navbar=document.getElementById('navbar');
const navLinks=document.getElementById('navLinks');
const hamburger=document.getElementById('hamburger');
window.addEventListener('scroll',()=>{navbar?.classList.toggle('scrolled',window.scrollY>40);},{passive:true});
hamburger?.addEventListener('click',()=>navLinks?.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link=>link.addEventListener('click',()=>{navLinks?.classList.remove('open');document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));link.classList.add('active');}));
document.querySelectorAll('.tab-btn').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
 button.classList.add('active');
 document.querySelectorAll('.carta-card').forEach(card=>{card.style.display=card.dataset.cat===button.dataset.cat?'block':'none';});
}));
// Efectos de entrada, sin acceder a datos externos.
if('IntersectionObserver' in window){
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.carta-card,.gal-item,.valor,.info-item,.section-header,.hero-image-card').forEach(el=>io.observe(el));
}
