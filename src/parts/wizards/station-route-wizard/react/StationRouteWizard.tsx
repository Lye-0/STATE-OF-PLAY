'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as StationRouteWizardProps };
/** 工程の駅をたどる設定。手順点をレールでつなぎ、次へ進むと完了点と現在点が連続する。 */
export default function StationRouteWizard(props: WizardProps) {
  return <WizardView {...props} skin="station-route-wizard" />;
}
