import {createCommand,type CommandOptions} from '../../../../shared/workbench/command';
import {bridge} from '../../../../shared/workbench/core';
export type {CommandOptions};
/** Mount this component only; call destroy() before removing it. */
export function init(root:HTMLElement,options:CommandOptions={}){return bridge(createCommand(root,options));}
