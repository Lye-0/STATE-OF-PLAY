import {uniqueId} from '../core.ts';
import {presentationSpring} from '../../presentation-spring.ts';
import {progressGeometry, intakeGeometry, materialOf} from './geometry.ts';
/** Event-driven artwork with explicit lifetime; an idle scene schedules zero frames. */
export function continuumArt(root:HTMLElement, host:HTMLElement, initial=0, intake=false) {
  const material=materialOf(root.dataset.variant),uid=uniqueId('ct-surface');
  let count=0, last='', stopped=false;
  const spring=presentationSpring(root,{position:initial,energy:0},values=>{
    const markup=intake?intakeGeometry(material,values.position,count,uid,values.energy):progressGeometry(material,values.position,values.energy,uid);
    if(markup!==last){host.innerHTML=markup;last=markup;}
  });
  spring.to({position:initial},true);
  return {
    move(value:number, immediate=false){spring.to({position:value},immediate||stopped);},
    pulse(){if(!stopped)spring.pulse('energy',1);},
    files(value:number){if(count===value)return;count=value;last='';spring.to({},true);},
    pause(value:boolean){stopped=value;if(value)spring.snap();},
    destroy(){spring.destroy();host.replaceChildren();}
  };
}
