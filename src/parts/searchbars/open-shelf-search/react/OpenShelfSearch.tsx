'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as OpenShelfSearchProps };
/** 開いた棚に候補を載せる検索。左右の支柱、短い棚受け、薄い棚板が各結果の位置を支え、文字は平らな面に置く。 */
export default function OpenShelfSearch(props:SearchProps) {
 return <SearchView {...props} skin="open-shelf-search" />;
}
