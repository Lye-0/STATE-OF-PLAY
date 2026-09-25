/** Only the gallery owns these scenes. Component exports never depend on them. */
import './liquid-glass-preview.css';
import type {PartController} from '../catalog/types';
import type {GlassAppearance,GlassMaterial,GlassOptics} from '../shared/liquid-glass/core';
export function glassScene(host:HTMLElement,root:HTMLElement){
 host.classList.add('lg-demo-host');if(!host.dataset.lgScene)host.dataset.lgScene='coast';
 const scene=document.createElement('div');scene.className='lg-demo-scene';scene.setAttribute('aria-hidden','true');
 scene.innerHTML='<i class="lg-demo-wave wave-one"></i><i class="lg-demo-wave wave-two"></i><i class="lg-demo-wave wave-three"></i><span class="lg-scene-type">Across<br><em>the surface.</em></span>';
 host.prepend(scene);root.style.zIndex='2';
 return()=>{scene.remove();host.classList.remove('lg-demo-host');delete host.dataset.lgScene;delete host.dataset.lgDrift;root.style.removeProperty('z-index');};
}
export function mountGlassControls(dialog:HTMLDialogElement,root:HTMLElement,controller:PartController,onSceneChange:(scene:string)=>void){
 const stage=root.parentElement!;const cleanScene=glassScene(stage,root);const events=new AbortController();
 const controls=document.createElement('section');controls.className='lg-preview-controls';controls.setAttribute('aria-label','Liquid Glassの見え方');
 const settings=controller.getGlass?.();
 controls.innerHTML=`<header><b>GLASS LAB</b><span>背景と素材を比べる</span></header>
 <label>素材<select data-glass-setting="material" aria-label="ガラス素材"><option value="clear">Clear · 透明</option><option value="regular">Regular · 可読性</option><option value="solid">Solid · 不透明</option></select></label>
 <label>文字の配色<select data-glass-setting="appearance" aria-label="ガラスの文字配色"><option value="dark">Dark · 明るい文字</option><option value="light">Light · 暗い文字</option><option value="auto">OSに合わせる</option></select></label>
 <label>背景<select data-glass-scene aria-label="透過確認の背景"><option value="coast">海と砂</option><option value="paper">明るい紙面</option><option value="ink">暗い面</option><option value="grid">細かな格子</option></select></label>
 <label class="lg-check"><input type="checkbox" data-glass-drift> 背景を動かす</label>
 <label class="lg-check"><input type="checkbox" data-glass-paused> パーツの動きを止める</label>
 <label class="lg-check"><input type="checkbox" data-glass-refraction> 実験：縁の屈折</label>
 <p>標準はCSSの透過・ぼかしと反射。屈折は対応Chromium向けの追加表現です。設定は展示だけに適用され、取得コードの既定値は変えません。</p>`;
 for(const select of controls.querySelectorAll<HTMLSelectElement>('[data-glass-setting]')){
   const key=select.dataset.glassSetting as 'material'|'appearance';select.value=key==='material'?(settings?.material??'regular'):(settings?.appearance??'dark');
   select.addEventListener('change',()=>controller.updateGlass?.(key==='material'?{material:select.value as GlassMaterial}:{appearance:select.value as GlassAppearance}),{signal:events.signal});
 }
 const sceneSelect=controls.querySelector<HTMLSelectElement>('[data-glass-scene]')!;sceneSelect.value=stage.dataset.lgScene??'coast';
 sceneSelect.addEventListener('change',()=>onSceneChange(sceneSelect.value),{signal:events.signal});
 controls.querySelector<HTMLInputElement>('[data-glass-drift]')!.addEventListener('change',event=>{stage.dataset.lgDrift=String((event.target as HTMLInputElement).checked);},{signal:events.signal});
 controls.querySelector<HTMLInputElement>('[data-glass-paused]')!.addEventListener('change',event=>{controller.setPaused?.((event.target as HTMLInputElement).checked);},{signal:events.signal});
 controls.querySelector<HTMLInputElement>('[data-glass-refraction]')!.addEventListener('change',event=>{const optics:GlassOptics=(event.target as HTMLInputElement).checked?'refractive':'standard';controller.updateGlass?.({optics});},{signal:events.signal});
 dialog.querySelector('.live-preview')!.after(controls);
 const note=dialog.querySelector('.surface-note');if(note)note.textContent='ガラス面だけを持ち出せます。背後の風景は展示用です。透過率と文字配色は利用先の背景に合わせて選んでください。';
 return()=>{events.abort();controls.remove();cleanScene();};
}
