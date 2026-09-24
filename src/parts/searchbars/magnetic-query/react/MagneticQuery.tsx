'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as MagneticQueryProps };
/** 二本の細いレールが焦点位置で離れ、金属の入力面を浮かせる。 */
export default function MagneticQuery(props:SearchProps) {
 return <SearchView {...props} skin="magnetic-query" />;
}
