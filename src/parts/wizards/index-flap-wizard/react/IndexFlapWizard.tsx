'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as IndexFlapWizardProps };
/** 少しずつ差し出した索引紙で工程を選ぶウィザード。索引を縦へ積み、現在の紙だけを明るい入力面へ接続する。 */
export default function IndexFlapWizard(props: WizardProps) {
  return <WizardView {...props} skin="index-flap-wizard" />;
}
