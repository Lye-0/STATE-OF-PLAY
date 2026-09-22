'use client';
import { useEffect, useRef, useState, type ButtonHTMLAttributes } from 'react';
import { createSimpleToggleController, type SimpleToggleConfig } from './simple-toggle';
export interface SimpleToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'children' | 'defaultChecked'> {
  checked?: boolean; defaultChecked?: boolean; onCheckedChange?: (checked: boolean) => void;
}
export function useSimpleToggle(config: SimpleToggleConfig, props: SimpleToggleProps) {
  const [internal, setInternal] = useState(props.defaultChecked ?? config.initial);
  const checked = props.checked ?? internal;
  const element = useRef<HTMLButtonElement | null>(null);
  const control = useRef<ReturnType<typeof createSimpleToggleController> | null>(null);
  const latest = useRef(props); latest.current = props;
  const initial = useRef(checked);
  useEffect(() => {
    if (!element.current) return;
    const controller = createSimpleToggleController(element.current, config, {
      checked: initial.current, controlled: true, manageAria: false,
      onCheckedChange(value) { if (latest.current.checked === undefined) setInternal(value); latest.current.onCheckedChange?.(value); }
    });
    control.current = controller;
    return () => { controller.destroy(); control.current = null; };
  }, [config]);
  useEffect(() => { control.current?.setChecked(checked); }, [checked]);
  useEffect(() => { if (props.disabled) control.current?.cancelInteraction(); }, [props.disabled]);
  return {element, checked};
}
