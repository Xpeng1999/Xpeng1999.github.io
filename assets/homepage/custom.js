// Page-specific additions; filtering, author toggles, copy actions and tag cloud remain upstream code.
const motion=document.getElementById('motion-toggle');
const animation=document.getElementById('mundi-animation');
if(motion&&animation){
  const media=matchMedia('(prefers-reduced-motion: reduce)');
  let paused=media.matches;
  const update=()=>{
    animation.src=`assets/homepage/mundisense${paused?'-static':''}.svg`;
    motion.textContent=paused?'Play animation':'Pause animation';
    motion.setAttribute('aria-pressed',String(paused));
  };
  update();
  motion.addEventListener('click',()=>{paused=!paused;update();});
  media.addEventListener('change',()=>{paused=media.matches;update();});
}
