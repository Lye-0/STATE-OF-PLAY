'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SurveyColorConsoleProps };
/** 測量窓と数値欄を目盛りの上下に分ける。 */
export default function SurveyColorConsole(props: ColorProps) {
  return <ColorView {...props} skin="survey-color-console" />;
}
