import {mountAmbientOrnament, type AmbientOrnamentOptions, type AmbientOrnamentController} from '../../../../shared/ambient-ornament.ts';
export type OrnamentOptions = AmbientOrnamentOptions;
export type OrnamentController = AmbientOrnamentController;
export function init(element: HTMLElement, options: OrnamentOptions = {}): OrnamentController {
  return mountAmbientOrnament(element, options);
}
