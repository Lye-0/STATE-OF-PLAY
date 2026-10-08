'use client';
import React from 'react';
import {SelectView,type SelectProps} from '../../../../shared/select-view';
import '../styles.css';
export type {SelectProps,SelectItem} from '../../../../shared/select-view';
/** 対角の二点で候補の板を保持する選択治具。左上の六角の支点は固定し、右下の楔だけがガイドから斜めに進んで切欠きへ係合する。読む面と行のヒット領域は固定する。 */
export default function HexBolsterSelect({className='',...props}:SelectProps){
 return <SelectView {...props} className={`sop-hex-bolster-select ${className}`}/>;
}
