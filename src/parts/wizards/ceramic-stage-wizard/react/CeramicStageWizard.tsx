'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as CeramicStageWizardProps };
/** 工程を小さな陶の駒で示し、入力面を一つの器へ収めるウィザード。釉薬の縁と丸い駒を平らな文字面から分け、狭幅でも工程名と実際の進み具合を読み取れる。 */
export default function CeramicStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="ceramic-stage-wizard" />;
}
