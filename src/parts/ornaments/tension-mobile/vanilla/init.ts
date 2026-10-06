export interface OrnamentOptions {
  paused?: boolean;
}

export interface OrnamentController {
  setPaused(paused: boolean): void;
  destroy(): void;
}

export function init(element: HTMLElement, options: OrnamentOptions = {}): OrnamentController {
  const setPaused = (paused: boolean) => {
    element.dataset.paused = paused ? 'true' : 'false';
  };
  setPaused(Boolean(options.paused));
  return {
    setPaused,
    destroy() {
      delete element.dataset.paused;
    }
  };
}
