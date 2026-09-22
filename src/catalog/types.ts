import type { ToggleConfig, ToggleOptions, ToggleController } from '../shared/toggle-controller';
import type { SurfaceOptions } from '../shared/surface-controller';

export type Format = 'tsx' | 'jsx' | 'ts' | 'js';
export type Category = 'toggles' | 'blocks';
export type DetailTab = 'code' | 'guide' | 'prompt';
export interface SourceFile { name: string; code: string; language: string; group: 'component' | 'shared' | 'example'; }
export interface Part {
  id: string; name: string; category: Category; order: number; version: string;
  tagline: string; description: string; material: string; motion: string; accent: string;
  initial?: boolean; componentName: string; tags: string[]; config?: ToggleConfig;
  related: string[]; props: string[][]; markup: string; usage: string; prompt: string;
  files: Record<Format, SourceFile[]>; preview: Record<string, string>;
}
export interface PartController {
  destroy(): void;
  setChecked?: ToggleController['setChecked'];
  getChecked?: ToggleController['getChecked'];
  cancelInteraction?: ToggleController['cancelInteraction'];
  setPaused?: ToggleController['setPaused'];
  resize?: ToggleController['resize'];
}
export type MountPart = (root: HTMLElement, options?: ToggleOptions & SurfaceOptions) => PartController;
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
