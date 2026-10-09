'use client';
import React from 'react';
import {AvatarView,type AvatarProps} from '../../../../shared/signature/avatar-view';
import '../styles.css';
export type { AvatarProps as RibbonBadgeProfileProps };
/** 人物メダルの背を通った一本の帯を、名前の下へ続ける紹介札。濃淡の別々の箱を廃し、実肖像の後の42pxの横の返りと、58pxから下へ続く同じ布の前帯へ揃える。写真は前後の帯の交点へ固定し、名前は前帯の同じ読む面へ置く。下のV字の自由端と9px/12pxの端面で織った帯を示し、選択でも写真と文字は揺らさない。 */
export default function RibbonBadgeProfile(props: AvatarProps) {
  return <AvatarView {...props} skin="ribbon-badge-profile" />;
}
