import {createAvatar,type AvatarOptions} from '../../../../shared/signature/avatar';
import {bridge} from '../../../../shared/signature/core';
export type {AvatarOptions};
export function init(root: HTMLElement, options: AvatarOptions = {}) {
  return bridge(createAvatar(root, options));
}
