import {createSelectController,type SelectOptions} from '../select-controller';
import {createGlass,type GlassOptions} from './core';
export function mountGlassSelect(root:HTMLElement,options:SelectOptions&GlassOptions={}){
 const c=createSelectController(root,options),glass=createGlass(root,options);
 return {...c,updateGlass:glass.updateGlass,getGlass:glass.getGlass,refreshGlass:glass.refreshGlass,setPaused(value:boolean){c.setPaused(value);glass.setPaused(value);},destroy(){glass.destroy();c.destroy();}};
}
