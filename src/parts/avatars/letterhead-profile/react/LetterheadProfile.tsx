'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as LetterheadProfileProps };
/** 人物名の大きい活字を、肖像版が下の自由端から張り出す一枚のレターヘッドへ組む紹介。名簿型の小さい二列を廃し、名前は23〜30pxのセリフ体で紙の全幅を使い、所属を同じ上の読む面へ置く。下の右端を100px広く開き、76×90pxの実肖像を8pxだけ前紙の裏へ入れる。52×34pxの裏の返りが版の端へ入り、写真は紙の空いた部分から露出する。狭幅/長い人物名でも同じ切り開いた紙を保持し、文字や写真を変形させない。 */
export default function LetterheadProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="letterhead-profile" />;
}
