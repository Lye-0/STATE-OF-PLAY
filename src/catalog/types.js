"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FORMATS = void 0;
exports.FORMATS = {
    tsx: { label: 'React + TypeScript', short: 'React TSX', language: 'tsx', note: '型付きReactコンポーネント。CSSと必要な共通処理を同梱。' },
    jsx: { label: 'React + JavaScript', short: 'React JSX', language: 'jsx', note: 'TSXから型だけを除去。見た目と操作は同じです。' },
    ts: { label: 'HTML + TypeScript', short: 'Vanilla TS', language: 'typescript', note: '通常のDOMへ初期化。TypeScriptの変換環境で使います。' },
    js: { label: 'HTML + JavaScript', short: 'Vanilla JS', language: 'javascript', note: 'フレームワーク不要。必要なファイルだけで動作します。' }
};
