import type { ToggleConfig, ToggleOptions, ToggleController } from '../shared/toggle-controller';
import type { ScrollAreaOptions, ScrollAreaController } from '../shared/scroll-area';
import type { SelectOptions, SelectController } from '../shared/select-controller';
import type { AccordionOptions, AccordionController } from '../shared/accordion-controller';
import type { SurfaceOptions } from '../shared/surface-controller';

export type Format = 'tsx' | 'jsx' | 'ts' | 'js';
export type DesignType = 'A' | 'B';
export const DESIGN_TYPES = { A: {label:'A · 表現重視', note:'素材感と動きを楽しむ、主役になるデザイン。'}, B: {label:'B · 実用重視', note:'落ち着きと読みやすさを重視。設定や日常の画面へ。'} } as const;
export type Category = 'toggles' | 'blocks' | 'scrollbars' | 'dropdowns' | 'accordions';
export type Layout = 'portable' | 'original';
export const LAYOUTS = {
  portable: {label: '導入向け', note: '本体フォルダーの中で依存を完結。好きな配置先へ移せます。'},
  original: {label: '元の構成', note: '配布元の相対パスを保持。参照・比較向けの構成です。'}
} as const;
export const isLayout = (value: unknown): value is Layout => value === 'portable' || value === 'original';
export type DetailTab = 'code' | 'guide' | 'prompt';
export interface SourceFile { name: string; sourceName: string; code: string; language: string; group: 'component' | 'shared' | 'example'; }
export interface Part {
  id: string; name: string; category: Category; order: number; version: string;
  tagline: string; description: string; material: string; motion: string; accent: string;
  designType: DesignType; runtime: string;
  initial?: boolean; componentName: string; tags: string[]; config?: ToggleConfig;
  related: string[]; props: string[][]; markup: string; usage: string; prompt: string;
  files: Record<Format, SourceFile[]>; portableFiles: Record<Format, SourceFile[]>; preview: Record<string, string>;
}
export interface PartController {
  getValue?: SelectController['getValue'];
  setValue?: SelectController['setValue'];
  getOpen?: SelectController['getOpen'];
  setOpen?: SelectController['setOpen'];
  getExpanded?: AccordionController['getExpanded'];
  setExpanded?: AccordionController['setExpanded'];
  expandAll?: AccordionController['expandAll'];
  collapseAll?: AccordionController['collapseAll'];
  scrollTo?: ScrollAreaController['scrollTo'];
  getProgress?: ScrollAreaController['getProgress'];
  setOrientation?: ScrollAreaController['setOrientation'];
  refresh?: ScrollAreaController['refresh'];
  destroy(): void;
  setChecked?: ToggleController['setChecked'];
  getChecked?: ToggleController['getChecked'];
  cancelInteraction?: ToggleController['cancelInteraction'];
  setPaused?: ToggleController['setPaused'];
  resize?: ToggleController['resize'];
}
export type MountPart = (root: HTMLElement, options?: ToggleOptions & SurfaceOptions & ScrollAreaOptions & SelectOptions & AccordionOptions) => PartController;
export const isFormat = (value: unknown): value is Format =>
  typeof value === 'string' && ['tsx','jsx','ts','js'].includes(value);
export const isDetailTab = (value: unknown): value is DetailTab =>
  value === 'code' || value === 'guide' || value === 'prompt';
export const FORMATS = {
    tsx: { label: 'React + TypeScript', short: 'React TSX', language: 'tsx', note: '型付きReactコンポーネント。CSSと必要な共通処理を同梱。' },
    jsx: { label: 'React + JavaScript', short: 'React JSX', language: 'jsx', note: 'TSXから型だけを除去。見た目と操作は同じです。' },
    ts: { label: 'HTML + TypeScript', short: 'Vanilla TS', language: 'typescript', note: '通常のDOMへ初期化。TypeScriptの変換環境で使います。' },
    js: { label: 'HTML + JavaScript', short: 'Vanilla JS', language: 'javascript', note: 'フレームワーク不要。必要なファイルだけで動作します。' }
};
