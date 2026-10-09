'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as OpenPlanWizardProps };
/** 大きい実章番号と余白の編集を揃える。64pxの実順位、16pxの章名、34pxの現在章の見出しを同じ読む基準へ置き、現在だけの3pxの罫が全体の1pxの区切りから明瞭に区別される。入力は14pxの平らな字面と48pxのnative面で保ち、色の強さを実番号と次への操作へ絞る。独立した架空数字や装飾コピーは追加しない。 */
export default function OpenPlanWizard(props: WizardProps) {
  return <WizardView {...props} skin="open-plan-wizard" />;
}
