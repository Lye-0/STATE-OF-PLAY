'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CeramicStageWizardProps };
/** 磁器の設定トレイ。工程点と入力を独立した浅い面へ置き、狭幅でも大きい操作欄を保つ。 */
export default function CeramicStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ceramic-stage-wizard" />;
}
