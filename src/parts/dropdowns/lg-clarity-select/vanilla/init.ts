import {mountGlassSelect} from '../../../../shared/liquid-glass/select';
import type {SelectOptions} from '../../../../shared/select-controller';
import type {GlassOptions} from '../../../../shared/liquid-glass/core';
export function init(root:HTMLElement,options:SelectOptions&GlassOptions={}){return mountGlassSelect(root,{material:'regular',appearance:'dark',...options});}
