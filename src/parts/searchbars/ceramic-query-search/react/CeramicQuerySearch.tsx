'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CeramicQuerySearchProps };
/** 実検索の高い112pxの陶の口から、右の28pxの曲面だけが浅い候補皿へ降りる検索器。左に40px、口と皿に44pxの実空間を開き、皿に届く72pxの曲面が大きい内側の曲がりを作る。四辺の器枠と小楕円を廃し、実候補は皿の一枚の平らな内面で自然に伸ばす。 */
export default function CeramicQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="ceramic-query-search" />;
}
