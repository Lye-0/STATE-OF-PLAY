'use client';
import React from 'react';
import {ColorView,type ColorProps} from '../../../../shared/signature/color-view';
import '../styles.css';
export type { ColorProps as SurveyColorConsoleProps };
/** 方眼と十字の指標で色を測る。 */
export default function SurveyColorConsole(props: ColorProps) {
  return <ColorView {...props} skin="survey-color-console" />;
}
