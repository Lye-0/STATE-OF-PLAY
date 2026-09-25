import {createSimpleToggleController,type SimpleToggleConfig,type SimpleToggleOptions} from '../simple-toggle';
import {createGlass,type GlassOptions} from './core';
export function mountGlassToggle(root:HTMLElement,config:SimpleToggleConfig,options:SimpleToggleOptions&GlassOptions={}){
 if(!(root instanceof HTMLButtonElement))throw new TypeError('Liquid Glass toggle requires a button.');
 const c=createSimpleToggleController(root,config,options),glass=createGlass(root,options);
 return {...c,updateGlass:glass.updateGlass,getGlass:glass.getGlass,refreshGlass:glass.refreshGlass,setPaused(value:boolean){c.setPaused(value);glass.setPaused(value);},destroy(){glass.destroy();c.destroy();}};
}
