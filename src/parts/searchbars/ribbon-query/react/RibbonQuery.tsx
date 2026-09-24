'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RibbonQueryProps };
/** 折り返した帯がフォーカスでほどけ、候補と入力を一枚の紙につなぐ。 */
export default function RibbonQuery(props:SearchProps) {
 return <SearchView {...props} skin="ribbon-query" />;
}
