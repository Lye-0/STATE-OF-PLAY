'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BlueprintStageWizardProps };
/** 設計の進行表。手順と入力の欄を図面の罫で揃え、完了・現在・未完了を記号と色で分ける。 */
export default function BlueprintStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="blueprint-stage-wizard" />;
}
