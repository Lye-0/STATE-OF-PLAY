'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ShutterWizardProps };
/** 機器のキーが立ち上がり、次のステージの表示窓が開く。 */
export default function ShutterWizard(props: WizardProps) {
  return <WizardView {...props} skin="shutter-wizard" />;
}
