import {mountGlassTabs} from '../../../../shared/liquid-glass/tabs';
import type {TabsOptions} from '../../../../shared/tabs-controller';
import type {GlassOptions} from '../../../../shared/liquid-glass/core';
export function init(root:HTMLElement,options:TabsOptions&GlassOptions={}){return mountGlassTabs(root,{material:'clear',appearance:'dark',...options});}
