import {mountGlassButton} from '../../../../shared/liquid-glass/button';
import type {ActionButtonOptions} from '../../../../shared/action-button';
import type {GlassOptions} from '../../../../shared/liquid-glass/core';
export function init(root:HTMLElement,options:ActionButtonOptions&GlassOptions={}){return mountGlassButton(root,{material:'regular',appearance:'dark',...options});}
