/** Gallery scenery is separate from the reusable glass components. */
import './liquid-glass-preview.css';

export function isGlassPart(part:{id:string}):boolean {
 return part.id.startsWith('lg-') || part.id.startsWith('lgc-');
}

export function glassScene(host:HTMLElement,root:HTMLElement):()=>void {
 host.classList.add('lg-demo-host');
 if(!host.dataset.lgScene)host.dataset.lgScene='coast';
 const scene=document.createElement('div');scene.className='lg-demo-scene';scene.setAttribute('aria-hidden','true');
 scene.innerHTML='<i class="lg-demo-wave wave-one"></i><i class="lg-demo-wave wave-two"></i><i class="lg-demo-wave wave-three"></i>';
 host.prepend(scene);root.style.zIndex='2';
 return()=>{scene.remove();host.classList.remove('lg-demo-host');delete host.dataset.lgScene;delete host.dataset.lgDrift;root.style.removeProperty('z-index');};
}
