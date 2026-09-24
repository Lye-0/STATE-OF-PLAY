'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as RadarQueryProps };
/** 検索のたびに小さな走査面が開く、緑の細線と計測目盛り。 */
export default function RadarQuery(props:SearchProps) {
 return <SearchView {...props} skin="radar-query" />;
}
