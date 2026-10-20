'use strict';
const filters=document.querySelector('.filters');
if(filters){
 filters.hidden=false;
 filters.addEventListener('click',event=>{
  const button=event.target.closest('button[data-filter]');if(!button)return;
  filters.querySelectorAll('button').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  let count=0;document.querySelectorAll('.project').forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter;if(!p.hidden)count++;});
  document.querySelector('#filter-status').textContent=`Showing ${count} project${count===1?'':'s'}.`;
 });
}
const motion=document.querySelector('#motion-toggle'),animation=document.querySelector('#mundi-animation');
if(motion&&animation){
 const media=window.matchMedia('(prefers-reduced-motion: reduce)');let paused=media.matches;
 function update(){animation.src=`assets/homepage/mundisense${paused?'-static':''}.svg`;motion.textContent=paused?'Play animation':'Pause animation';motion.setAttribute('aria-pressed',String(paused));}
 motion.hidden=false;update();motion.addEventListener('click',()=>{paused=!paused;update();});media.addEventListener('change',()=>{paused=media.matches;update();});
}
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.side-nav a').forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));}});},{rootMargin:'-10% 0px -60% 0px',threshold:0});document.querySelectorAll('main>section').forEach(s=>observer.observe(s));}
