import {createActionButton,type ActionButtonOptions} from '../action-button';
import {createGlass,type GlassOptions} from './core';
export function mountGlassButton(root:HTMLElement,options:ActionButtonOptions&GlassOptions={}){
 const c=createActionButton(root,options),glass=createGlass(root,options);
 return {...c,updateGlass:glass.updateGlass,getGlass:glass.getGlass,refreshGlass:glass.refreshGlass,setPaused:glass.setPaused,destroy(){glass.destroy();c.destroy();}};
}
