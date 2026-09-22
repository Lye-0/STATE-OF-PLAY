import { init } from '../vanilla/init';
const root = document.querySelector<HTMLElement>('.demo-root > :first-child');
if (!root) throw new Error('Missing demo root');
const controller = init(root);
window.addEventListener('pagehide', () => controller.destroy(), { once: true });
