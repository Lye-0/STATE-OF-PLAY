import {createColor,type ColorOptions} from '../../../../shared/signature/color';
import {bridge} from '../../../../shared/signature/core';
export type {ColorOptions};
export function init(root: HTMLElement, options: ColorOptions = {}) {
  return bridge(createColor(root, options));
}
