'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as LgcColorsMistProps };
/** 濃い霧ガラス面で色を調整するカラーピッカー。 */
export default function LgcColorsMist(props: ColorProps) {
  return <ColorView {...props} skin="lgc-colors-mist" className={`lgc-root ${props.className??''}`} />;
}
