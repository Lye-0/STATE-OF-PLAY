import {escape as h, safeURL, identity, seed, owned, lifecycle, announce, pulse, uniqueItems, type SignatureAPI} from './core.ts';
export interface AvatarUser { id: string; name: string; subtitle?: string; src?: string; initials?: string; status?: 'online'|'away'|'busy'|'offline'; }
export interface AvatarOptions { users?: AvatarUser[]; value?: string; defaultValue?: string; label?: string; interactive?: boolean; disabled?: boolean; onValueChange?: (id: string) => void; }
export interface AvatarState { value: string; users: number; }
export const avatarDefaults: AvatarUser[] = [{id:'you',name:'Your name',subtitle:'Profile'}];
const initials = (user: AvatarUser) => (user.initials ?? user.name.split(/\s+/).filter(Boolean).map(s => Array.from(s)[0]).slice(0,2).join('')).slice(0,8) || '?';
export function avatarMarkup(options: AvatarOptions = {}): string {
 const users=uniqueItems(options.users ?? avatarDefaults), value=options.value ?? options.defaultValue ?? users[0]?.id ?? '';
 return `<div class="sg-avatar-stage"><div class="sg-avatar-orbits" aria-hidden="true"><i></i><i></i><i></i><b></b><b></b></div><div class="sg-avatar-list" role="group" aria-label="${h(options.label ?? 'プロフィール')}">${users.map((u,i)=>{
 const interactive=options.interactive!==false,tag=interactive?'button':'div',url=safeURL(u.src,true),status=(['online','away','busy','offline'].includes(u.status??'' )?u.status:'offline')??'offline';
 return `<${tag} ${interactive?'type="button"':''} class="sg-person" data-user="${h(u.id)}" ${interactive?`aria-pressed="${u.id===value}" ${options.disabled?'disabled':''}`:''} data-selected="${u.id===value}" style="--sg-i:${i}"><span class="sg-portrait"><span class="sg-portrait-ring" aria-hidden="true"></span><span class="sg-portrait-blades" aria-hidden="true">${Array.from({length:8},(_,n)=>`<i style="--b:${n}"></i>`).join('')}</span><span class="sg-portrait-picture"><span class="sg-initials" aria-hidden="true">${h(initials(u))}</span>${url?`<img src="${h(url)}" alt="" decoding="async" loading="lazy">`:''}</span><span class="sg-presence" data-status="${h(status)}"><span class="sg-sr">${({online:'オンライン',away:'離席中',busy:'取り込み中',offline:'オフライン'})[status]}</span></span></span><span class="sg-person-copy"><span class="sg-person-name">${h(u.name)}</span>${u.subtitle?`<span class="sg-person-sub">${h(u.subtitle)}</span>`:''}</span></${tag}>`;
 }).join('')}</div><div class="sg-avatar-baseline" aria-hidden="true"><i></i><span>IDENTITY</span><i></i></div></div>`;
}
export function createAvatar(root: HTMLElement, provided: AvatarOptions = {}): SignatureAPI<AvatarOptions,AvatarState> {
 let options=seed(root,provided), users=uniqueItems(options.users??avatarDefaults), value=options.value??options.defaultValue??users[0]?.id??'';
 if(!users.some(u=>u.id===value))value=users[0]?.id??'';
 const life=lifecycle(root), host=owned(root);identity();
 function paint(){host.querySelectorAll<HTMLButtonElement>('[data-user]').forEach(b=>{const active=b.dataset.user===value;b.dataset.selected=String(active);if(b.tagName==='BUTTON'){b.setAttribute('aria-pressed',String(active));b.disabled=!!options.disabled;}});}
 function render(){host.innerHTML=avatarMarkup({...options,users,value});host.querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>{img.hidden=true;},{once:true,signal:life.signal});if(img.complete && !img.naturalWidth)img.hidden=true;});paint();}
 function choose(next:string){if(options.disabled||options.interactive===false||next===value)return;if(options.value===undefined)value=next;options.onValueChange?.(next);paint();pulse(root);announce(root,{value,requested:next});}
 host.addEventListener('click',e=>{const b=(e.target as Element).closest<HTMLElement>('[data-user]');if(b)choose(b.dataset.user!);},{signal:life.signal});render();
 return {getState:()=>({value,users:users.length}),reset(){if(options.value===undefined)value=options.defaultValue??users[0]?.id??'';paint();},update(next){if(life.dead)return;const rebuild=('users'in next&&next.users!==options.users)||('interactive'in next&&next.interactive!==options.interactive)||('label'in next&&next.label!==options.label);options={...options,...next};users=uniqueItems(options.users??avatarDefaults);if(next.value!==undefined)value=next.value;if(!users.some(u=>u.id===value))value=users[0]?.id??'';if(rebuild)render();else paint();},destroy:life.destroy,setPaused:life.setPaused};
}
