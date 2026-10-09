'use client';
import React from 'react';
import {NavigationView,type NavigationProps} from '../../../../shared/workbench/navigation-view';
import '../styles.css';
export type { NavigationProps as CeramicDockNavigationProps };
/** 大きい丸角の器を廃し、実親の低い陶床から実子の床へ深い一つの流路を彫る。左は高さ72pxの厚い頬、中央は深い開口、右は24px低い堰が実親子の接点だけに現れる。各行を小器にせず、非対称な流路の端にだけ陶の曲面を持たせる。 */
export default function CeramicDockNavigation(props:NavigationProps) {
 return <NavigationView groupPresentation="inline" {...props} skin="ceramic-dock-navigation" layout={props.layout ?? 'header'} />;
}
