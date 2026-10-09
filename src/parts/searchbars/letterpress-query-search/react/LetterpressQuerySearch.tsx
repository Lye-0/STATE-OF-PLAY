'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as LetterpressQuerySearchProps };
/** 実queryと対象を組む黒い胴が、全候補の一枚の校正紙を非対称の開口で保持する。胴の幅96pxの受けは24pxの空間を通り、104pxの開口の底へ8px接する。本文はカードへ分けず、実候補名22pxと実説明14px、朱の欄外の実補足で照合する。飾りの大題字を廃し、問い合わせを組む側と読む紙の実接合を主形へ変える。 */
export default function LetterpressQuerySearch(props:SearchProps) {
 return <SearchView {...props} skin="letterpress-query-search" />;
}
