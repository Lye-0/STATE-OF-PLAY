'use client';
import React, {useEffect,useLayoutEffect,useRef,useState,useId,type HTMLAttributes,type ReactNode,type MutableRefObject} from 'react';
import {createPopupController,type PopupController} from './popup-controller';
export interface PopupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children' | 'onClose'> {
  title: string;
  description?: string;
  kicker?: string;
  children?: ReactNode;
  footer?: ReactNode;
  triggerLabel?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onClose?: (reason: string) => void;
  disabled?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
}
const useDOMEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
/** Content is React-owned and retained while hidden. No portals and no innerHTML. */
export function PopupView({title,description,kicker='DETAILS',children,footer,triggerLabel='詳細を開く',open,defaultOpen=false,onOpenChange,onClose,disabled=false,closeOnBackdrop=true,closeOnEscape=true,confirmLabel='確認する',cancelLabel='閉じる',className='',rootRef,motionArt,...attributes}:PopupProps & {rootRef?:MutableRefObject<HTMLDivElement|null>;motionArt?:ReactNode}) {
  const [internal,setInternal] = useState(defaultOpen), visible = open ?? internal;
  const root = useRef<HTMLDivElement|null>(null), control = useRef<PopupController|null>(null), id = useId();
  const latest = useRef({open,onOpenChange,onClose}); latest.current={open,onOpenChange,onClose};
  useDOMEffect(() => {
    if (!root.current) return;
    const controller = createPopupController(root.current, {controlled:true,
      onOpenChange(next) {if(latest.current.open===undefined) setInternal(next);latest.current.onOpenChange?.(next);},
      onClose(reason) {latest.current.onClose?.(reason);}
    });
    control.current = controller;
    return () => {controller.destroy();control.current=null;};
  }, []);
  useDOMEffect(() => {control.current?.updateOptions({closeOnBackdrop,closeOnEscape}); control.current?.setDisabled(disabled);}, [closeOnBackdrop,closeOnEscape,disabled]);
  useDOMEffect(() => {control.current?.setOpen(visible);}, [visible]);
  return <div {...attributes} ref={node=>{root.current=node;if(rootRef)rootRef.current=node;}} className={`sop-popup ${className}`}>
    <button type="button" className="sop-popup-trigger" data-popup-open disabled={disabled} aria-haspopup="dialog"><span>{triggerLabel}</span><span aria-hidden="true">↗</span></button>
    <dialog id={`${id}-dialog`} className="sop-popup-window" aria-labelledby={`${id}-title`}>
      <div className="sop-popup-shell">{motionArt}
        <header className="sop-popup-top"><span className="sop-popup-kicker">{kicker}</span><button type="button" className="sop-popup-close" data-popup-close="close" aria-label="ポップアップを閉じる"><span aria-hidden="true">×</span></button></header>
        <div className="sop-popup-intro"><h2 id={`${id}-title`} data-popup-title tabIndex={-1}>{title}</h2>{description && <p>{description}</p>}</div>
        <div className="sop-popup-body">{children}</div>
        <footer className="sop-popup-footer">{footer ?? <><button type="button" data-popup-close="cancel" className="sop-popup-secondary">{cancelLabel}</button><button type="button" data-popup-close="confirm" className="sop-popup-primary">{confirmLabel}<span aria-hidden="true">↗</span></button></>}</footer>
      </div>
    </dialog>
  </div>;
}
