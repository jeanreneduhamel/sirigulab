(function(){
  const btn=document.querySelector('.menu-btn'), links=document.querySelector('.nav-links');
  if(btn&&links) btn.addEventListener('click',()=>{links.classList.toggle('open');btn.setAttribute('aria-expanded',links.classList.contains('open'));});
  const slides=[...document.querySelectorAll('.hero-slide')], dots=[...document.querySelectorAll('.dot')], caption=document.querySelector('.hero-caption');
  if(slides.length){
    let i=0; const setSlide=n=>{slides.forEach((s,j)=>s.classList.toggle('active',j===n));dots.forEach((d,j)=>d.classList.toggle('active',j===n)); if(caption) caption.innerHTML=slides[n].dataset.caption||''; const v=slides[n].querySelector('video'); if(v) v.play().catch(()=>{});};
    dots.forEach((d,j)=>d.addEventListener('click',()=>{i=j;setSlide(i)})); setInterval(()=>{i=(i+1)%slides.length;setSlide(i)},8500); setSlide(0);
  }
  const box=document.querySelector('.lightbox'), boxImg=box?.querySelector('img'), boxVideo=box?.querySelector('.lightbox-video'), boxCaption=box?.querySelector('.lightbox-caption');
  const captionFor=el=>el.closest('figure')?.querySelector('figcaption')?.textContent?.trim()||'';
  document.querySelectorAll('[data-lightbox]').forEach(el=>el.addEventListener('click',()=>{
    if(!box||!boxImg)return;
    if(boxVideo){boxVideo.pause();boxVideo.removeAttribute('src');boxVideo.style.display='none';}
    boxImg.style.display='block';boxImg.src=el.dataset.lightbox;boxImg.alt=(el.matches('img')?el.alt:el.querySelector('img')?.alt)||'';
    if(boxCaption) boxCaption.textContent=captionFor(el);
    box.classList.add('open');document.body.style.overflow='hidden';
  }));
  const canHover=window.matchMedia&&window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  if(canHover){
    document.querySelectorAll('.hover-preview-video').forEach(video=>{
      const frame=video.closest('.video-demo-frame');
      video.addEventListener('pointerenter',()=>{
        frame?.classList.add('is-playing');
        video.play().catch(()=>frame?.classList.remove('is-playing'));
      });
      video.addEventListener('pointerleave',()=>{
        video.pause();
        try{video.currentTime=0}catch(e){}
        frame?.classList.remove('is-playing');
      });
    });
  }
  document.querySelectorAll('[data-lightbox-video]').forEach(el=>el.addEventListener('click',()=>{
    if(!box||!boxVideo)return;
    boxImg.style.display='none';boxImg.removeAttribute('src');
    boxVideo.style.display='block';boxVideo.src=el.dataset.lightboxVideo;
    if(boxCaption) boxCaption.textContent=captionFor(el);
    box.classList.add('open');document.body.style.overflow='hidden';boxVideo.play().catch(()=>{});
  }));
  const close=()=>{if(!box)return;if(boxVideo){boxVideo.pause();boxVideo.removeAttribute('src');}box.classList.remove('open');document.body.style.overflow='';};
  box?.querySelector('.lightbox-close')?.addEventListener('click',close);
  box?.addEventListener('click',e=>{
    if(e.target===box || e.target===boxImg) close();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
})();
