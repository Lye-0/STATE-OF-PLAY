'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LetterpressInkColorProps };
/** インクの版面と組版用の数値列。 */
export default function LetterpressInkColor(props: ColorProps) {
  return <ColorView {...props} skin="letterpress-ink-color" />;
}
