'use client';
import React from 'react';
import {CommandView,type CommandProps} from '../../../../shared/workbench/command-view';
import '../styles.css';
export type { CommandProps as ReceiptCommandProps };
/** 実queryの平らな送り面と、実候補件数を読む88pxの端面を一体の送り部材にする。候補紙は40pxの深い開口へ16px入り、20pxの前唇が紙の上32pxを覆う。native読字は開口の下へ48px離して守る。切断紙を丸い検索欄へ載せる構成から、実query・件数・差込みの断面が役割を持つ主形へ変える。 */
export default function ReceiptCommand(props:CommandProps) {
 return <CommandView {...props} skin="receipt-command" />;
}
