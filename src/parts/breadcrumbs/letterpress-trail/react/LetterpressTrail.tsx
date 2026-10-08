'use client';
import React, {forwardRef} from 'react';
import {FoundationWidget, type FoundationProps} from '../../../../shared/foundation/react';
import {renderBreadcrumbs, mountBreadcrumbs} from '../../../../shared/foundation/navigation';
import type {FoundationConfig} from '../../../../shared/foundation/core';
import '../styles.css';
const config: FoundationConfig = {
  "id": "letterpress-trail",
  "kind": "breadcrumbs",
  "variant": "essential",
  "label": "あなたが、いまいる場所。",
  "description": "",
  "defaultValue": null,
  "items": [
    {
      "value": "home",
      "label": "Home",
      "href": "#home"
    },
    {
      "value": "library",
      "label": "Library",
      "href": "#library"
    },
    {
      "value": "objects",
      "label": "Objects",
      "href": "#objects"
    },
    {
      "value": "materials",
      "label": "Materials",
      "href": "#materials"
    },
    {
      "value": "paper",
      "label": "Paper"
    }
  ]
};
export type LetterpressTrailProps = FoundationProps;
/** 実祖先が占める一体の組版胴から、現在名の校正紙を一枚引き出すパンくず。離れていた矩形片と紙カードを廃し、全祖先の読む面を隙間なく一つの鋳物の胴へ結び、7pxの上面/12pxの下面/丸く返る両端を作る。現在の紙は胴の裏へ6px入って接合し、実階層の組版面から直接出る一つの自由な読む面になる。紙の26pxの返端と8pxの小口を描き、文字は材料に合わせて変形させない。 */
export default forwardRef<HTMLDivElement, LetterpressTrailProps>(function LetterpressTrail(props, ref) {
  return <FoundationWidget {...props} ref={ref} config={config} renderContent={renderBreadcrumbs} mountContent={mountBreadcrumbs}/>;
});
