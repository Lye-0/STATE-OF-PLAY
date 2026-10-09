'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as BookplateCommandProps };
/** 実題字から実候補へ続く一枚の細長い蔵書票を、検索の横面の44pxの二つの大きい斜め切口へ通す。四辺台紙を撤去し、題字と候補の内紙を同じ幅へ揃える。検索は票を横切る厚い112pxの面、実候補はその下へ続く平らな紙。外側の空間と二つの切口で、通常のカードから紙の通し構造へ変える。 */
export default function BookplateCommand(props:CommandProps) {
 return <CommandView {...props} skin="bookplate-command" />;
}
