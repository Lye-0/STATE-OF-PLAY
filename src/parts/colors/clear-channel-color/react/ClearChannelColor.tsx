'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as ClearChannelColorProps };
/** 色コードとチャンネルを読みやすく。 */
export default function ClearChannelColor(props: ColorProps) {
  return <ColorView {...props} skin="clear-channel-color" />;
}
