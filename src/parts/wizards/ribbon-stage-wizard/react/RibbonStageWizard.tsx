'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as RibbonStageWizardProps };
/** 帯でつなぐ設定手順。番号を一つの帯に揃え、現在の段階だけ短い縦の端を見せる。 */
export default function RibbonStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ribbon-stage-wizard" />;
}
