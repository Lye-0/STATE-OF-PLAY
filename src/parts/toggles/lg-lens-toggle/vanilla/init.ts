import {mountGlassToggle} from '../../../../shared/liquid-glass/toggle';
import type {SimpleToggleOptions} from '../../../../shared/simple-toggle';
import type {GlassOptions} from '../../../../shared/liquid-glass/core';
import {config} from '../config';
export function init(root:HTMLElement,options:SimpleToggleOptions&GlassOptions={}){return mountGlassToggle(root,config,{material:'clear',appearance:'dark',...options});}
