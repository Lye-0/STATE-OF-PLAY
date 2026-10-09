'use client';
import React from 'react';
import {WizardView,type WizardProps} from '../../../../shared/signature/wizard-view';
import '../styles.css';
export type { WizardProps as FoldedStepWizardProps };
/** 現在の実章の面が、直下の入力紙へ折り返される手順紙。native章は全て104px以上の同じ字面位置を保ち、現在の章だけから64×56pxの斜めの返しが32pxの実空隙を渡る。現在の入力紙と実戻る・次へはその章の直後に開き、他の章は同じ紙の後ろの端として順序を保つ。現在が変われば実接続と開く位置も変わり、最後の未来章へ誤接続しない。本文紙40pxの掛け込みと45pxの逆の返面を持ち、狭幅は掛け込み24pxへ縮める。chapterの数字やタイトル、native入力・hitはhoverで移動しない。 */
export default function FoldedStepWizard(props: WizardProps) {
  return <WizardView {...props} skin="folded-step-wizard" />;
}
