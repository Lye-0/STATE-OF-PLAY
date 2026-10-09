/** Run in a browser with page.evaluate(sampleCssColor, computedColor).
 * Let the browser interpret CSS Color 4 and legacy rgba() alike; the final
 * number in rgb() is a blue channel, not an alpha channel.
 */
export function sampleCssColor(color: string) {
  if (!CSS.supports('color', color)) throw new Error(`Invalid CSS color: ${color}`);
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const context = canvas.getContext('2d')!;
  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);
  const [red, green, blue, alpha] = context.getImageData(0, 0, 1, 1).data;
  return {red, green, blue, alpha: alpha / 255};
}
