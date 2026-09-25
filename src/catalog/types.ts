import type {GlassController} from '../shared/liquid-glass/core';
import type { FoundationConfig, FoundationOptions, FoundationController } from '../shared/foundation/core';
import type {CheckboxOptions, CheckboxController} from '../shared/checkbox-controller';
import type {PopupOptions, PopupController} from '../shared/popup-controller';
import type {TabsOptions} from '../shared/tabs-controller';
import type {SegmentOptions} from '../shared/segment-controller';
import type { ToggleConfig, ToggleOptions, ToggleController } from '../shared/toggle-controller';
import type { ScrollAreaOptions, ScrollAreaController } from '../shared/scroll-area';
import type { SelectOptions, SelectController } from '../shared/select-controller';
import type { AccordionOptions, AccordionController } from '../shared/accordion-controller';
import type { TextFieldOptions, TextFieldController } from '../shared/text-field';
import type { ActionButtonOptions, ActionButtonController } from '../shared/action-button';
import type { SurfaceOptions } from '../shared/surface-controller';

export type Format = 'tsx' | 'jsx' | 'ts' | 'js';
export type DesignType = 'A' | 'B';
export const DESIGN_TYPES = { A: {label:'A · 表現重視', note:'素材感と動きを楽しむ、主役になるデザイン。'}, B: {label:'B · 実用重視', note:'落ち着きと読みやすさを重視。設定や日常の画面へ。'} } as const;
export type Category = 'toggles' | 'blocks' | 'ornaments' | 'scrollbars' | 'dropdowns' | 'accordions' | 'textboxes' | 'buttons' | 'links' | 'tabs' | 'segments' | 'checkboxes' | 'popups' | 'sliders' | 'radios' | 'comboboxes' | 'toasts' | 'hints' | 'progress' | 'loaders' | 'uploads' | 'datepickers' | 'pagination' | 'breadcrumbs' | 'badges' | 'numbers' | 'avatars' | 'ratings' | 'colors' | 'skeletons' | 'timelines' | 'wizards' | 'searchbars' | 'commands' | 'contextmenus' | 'navigation' | 'tables';
export type Layout = 'portable' | 'original';
export const LAYOUTS = {
  portable: {label: '導入向け', note: '本体フォルダーの中で依存を完結。好きな配置先へ移せます。'},
  original: {label: '元の構成', note: '配布元の相対パスを保持。参照・比較向けの構成です。'}
} as const;
export const isLayout = (value: unknown): value is Layout => value === 'portable' || value === 'original';
export type DetailTab = 'code' | 'guide' | 'prompt';
export interface SourceFile { name: string; sourceName: string; code: string; language: string; group: 'component' | 'shared' | 'example'; }
export interface Part {
  workbench?: {kind: string};
  signature?: {kind: string};
  foundation?: FoundationConfig;
  id: string; name: string; category: Category; order: number; version: string;
  tagline: string; description: string; material: string; motion: string; accent: string;
  designType: DesignType; runtime: string;
  initial?: boolean; componentName: string; tags: string[]; config?: ToggleConfig;
  related: string[]; props: string[][]; markup: string; usage: string; prompt: string;
  files: Record<Format, SourceFile[]>; portableFiles: Record<Format, SourceFile[]>; preview: Record<string, string>;
}
/** Browser listing and preview data deliberately exclude downloadable source text. */
export type PartPreview = Omit<Part, 'files' | 'portableFiles' | 'preview' | 'usage' | 'prompt'>;
export type PartSummary = Pick<Part, 'id' | 'name' | 'category' | 'order' | 'description' | 'material' | 'designType' | 'tags' | 'initial' | 'config' | 'tagline'>;
export interface CategoryModule { parts: PartPreview[]; mounts: Record<string, MountPart>; }
export interface PartController {
  updateGlass?: GlassController['updateGlass'];
  getGlass?: GlassController['getGlass'];
  refreshGlass?: GlassController['refreshGlass'];
  updateWorkbench?: (options: Record<string, unknown>) => void;
  getWorkbench?: () => Record<string, unknown>;
  resetWorkbench?: () => void;
  openWorkbench?: () => void;
  closeWorkbench?: () => void;
  updateSignature?: (options: Record<string, unknown>) => void;
  getSignature?: () => Record<string, unknown>;
  resetSignature?: () => void;
  getData?: FoundationController['getData'];
  setData?: FoundationController['setData'];
  updateFoundation?: FoundationController['updateFoundation'];
  show?: FoundationController['show'];
  hide?: FoundationController['hide'];
  notify?: FoundationController['notify'];
  dismiss?: FoundationController['dismiss'];
  setIndeterminate?: CheckboxController['setIndeterminate'];
  getIndeterminate?: CheckboxController['getIndeterminate'];
  updatePopupOptions?: PopupController['updateOptions'];
  setLoading?: ActionButtonController['setLoading'];
  setDisabled?: ActionButtonController['setDisabled'];
  getLoading?: ActionButtonController['getLoading'];
  setError?: TextFieldController['setError'];
  focus?: TextFieldController['focus'];
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
export type MountPart = (root: HTMLElement, options?: ToggleOptions & SurfaceOptions & ScrollAreaOptions & SelectOptions & AccordionOptions & TextFieldOptions & ActionButtonOptions & TabsOptions & SegmentOptions & CheckboxOptions & PopupOptions & FoundationOptions) => PartController;
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
