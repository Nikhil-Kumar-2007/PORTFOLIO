document.getElementById('yr').textContent=new Date().getFullYear();
document.querySelectorAll('.pr>button').forEach(function(b){
  b.addEventListener('click',function(){
    var p=b.parentElement,o=p.classList.toggle('open');
    b.setAttribute('aria-expanded',o);
  });
});
var tl=document.getElementById('tl');
if('IntersectionObserver' in window){
  new IntersectionObserver(function(e,ob){if(e[0].isIntersecting){tl.classList.add('in');ob.disconnect();}},{threshold:.3}).observe(tl);
}else{tl.classList.add('in');}
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  var s=document.querySelector('.pipe svg');if(s&&s.pauseAnimations)s.pauseAnimations();
}
