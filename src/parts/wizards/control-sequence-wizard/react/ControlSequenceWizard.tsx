'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as ControlSequenceWizardProps };
/** 実labelを24pxの後方立面、native入力を56px以上の平らな床として組む開いた制御湾。28pxの折れた側支持から二本の短い腕が床の上下へ6pxずつ入る。反対側は完全に開き、textareaは同じ支持の間隔だけを自然高で延ばす。章は後方の実操作列で、現在の実章の保持位置が現在名の立面へつながる。外周の面取りケース・計器風の飾りは廃し、実label／値を収納する断面を主形にする。 */
export default function ControlSequenceWizard(props: WizardProps) {
  return <WizardView {...props} skin="control-sequence-wizard" />;
}
