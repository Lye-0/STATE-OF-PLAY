import {createTabsController,type TabsOptions} from '../tabs-controller';
import {createGlass,type GlassOptions} from './core';
export function mountGlassTabs(root:HTMLElement,options:TabsOptions&GlassOptions={}){
 const c=createTabsController(root,options),glass=createGlass(root,options);
 return {...c,updateGlass:glass.updateGlass,getGlass:glass.getGlass,refreshGlass:glass.refreshGlass,setPaused:glass.setPaused,destroy(){glass.destroy();c.destroy();}};
}
