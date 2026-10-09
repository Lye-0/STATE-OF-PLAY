'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ClippedPageWizardProps };
/** 切口のある実手順票と入力紙の比率を整える。票は108pxの高さと24×10pxの本当の切口だけを持ち、44pxの実番号と14pxの実名を余白へ収める。30pxの現在章の見出しと24pxの本文余白へ広げ、札だけが重い展示を廃する。切口は材だけへ描き、nativeボタン本体のhitとfocus輪郭を切り取らない。 */
export default function ClippedPageWizard(props: WizardProps) {
  return <WizardView {...props} skin="clipped-page-wizard" />;
}
