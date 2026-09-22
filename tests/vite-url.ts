/** Vite の実サーバーと PreviewServer の両方で使う、テスト用の URL 検証。 */
export interface LocalUrlProvider {
  readonly resolvedUrls: { readonly local: readonly string[] } | null;
}

/**
 * null・空配列を無視してテストを通さず、原因が分かるエラーにする。
 * 非 null アサーションやダミー URL を使わず、公開されたローカル URL だけを返す。
 * Vite が付加した base や URL エンコードは、そのまま維持する。
 */
export function requireLocalServerUrl(server: LocalUrlProvider, label = 'Vite server'): string {
  const url = server.resolvedUrls?.local[0];
  if (!url || !url.trim()) {
    throw new Error(`${label}: no local URL was resolved. Ensure the server is listening before starting browser checks.`);
  }
  return url;
}
