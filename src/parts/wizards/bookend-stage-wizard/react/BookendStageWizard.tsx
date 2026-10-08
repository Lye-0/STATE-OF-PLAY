'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as BookendStageWizardProps };
/** 章立ての入力手順。見開きの索引と現在のページを区切り、下の栞状の操作から次の章へ進む。 */
export default function BookendStageWizard(props: WizardProps) {
  return <WizardView {...props} skin="bookend-stage-wizard" />;
}
