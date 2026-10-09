'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as IndexFlapWizardProps };
/** 索引の札と本文を同じ紙へ整える。実章の札の色は本文の背に一段だけ差を付け、選択札は本文の明るい紙色へ連続する。44pxの実番号・14pxの章名と28pxの本文見出しを揃え、上の索引と下の操作の罫線を役割ごとに整理する。入力紙にも同じ紙色と1pxの縁を使い、小さな重い箱の寄せ集めを避ける。 */
export default function IndexFlapWizard(props: WizardProps) {
  return <WizardView {...props} skin="index-flap-wizard" />;
}
