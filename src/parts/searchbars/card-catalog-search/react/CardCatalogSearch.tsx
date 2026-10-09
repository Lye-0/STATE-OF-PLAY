'use client';
import React from 'react';
import {SearchView,type SearchProps} from '../../../../shared/workbench/search-view';
import '../styles.css';
export type { SearchProps as CardCatalogSearchProps };
/** 実検索口を112pxの前板として、一枚の候補の記録束へ16px被せる開いた引出し。上の12pxの返りと18pxの小口、左右28pxの斜めの奥行き面が前板から記録束へ接し、奥行き面は紙の自由端の24px手前で終わる。四辺の外枠と候補ごとの半円切欠きを廃し、名前と説明は連続紙面、実補足は側端の索引耳へ置く。狭幅は奥行き面18px、空・非同期・失敗も同じ読む束で確認する。 */
export default function CardCatalogSearch(props:SearchProps) {
 return <SearchView {...props} skin="card-catalog-search" />;
}
