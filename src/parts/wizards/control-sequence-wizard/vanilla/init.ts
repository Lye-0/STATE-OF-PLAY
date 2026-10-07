import {createWizard,type WizardOptions} from '../../../../shared/signature/wizard';
import {bridge} from '../../../../shared/signature/core';
export type {WizardOptions};
export function init(root: HTMLElement, options: WizardOptions = {}) {
  return bridge(createWizard(root, options));
}
