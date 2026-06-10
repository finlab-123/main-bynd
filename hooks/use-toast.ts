import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

export type Toast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  duration?: number;
};


const listeners = new Set<(toasts: Toast[]) => void>();
let queue: Toast[] = [];

const notify = () => {
  const snapshot = [...queue];
  listeners.forEach((listener) => listener(snapshot));
};

export const toast = (input: Omit<Toast, "id"> & { id?: string }) => {
  const id = input.id ?? crypto.randomUUID?.() ?? Math.random().toString(36).slice(2);
  const nextToast: Toast = { ...input, id };
  queue = [...queue, nextToast];
  notify();

  const duration = input.duration ?? 5000;
  if (duration !== Infinity) {
    setTimeout(() => dismiss(id), duration);
  }

  return id;
};

export const dismiss = (id?: string) => {
  if (id) {
    queue = queue.filter((toastItem) => toastItem.id !== id);
  } else {
    queue = [];
  }
  notify();
};

export function useToast() {
  const [toasts, setToasts] = React.useState<Toast[]>(queue);

  React.useEffect(() => {
    const listener = (value: Toast[]) => setToasts(value);
    listeners.add(listener);
    notify();
    return () => listeners.delete(listener);
  }, []);

  return {
    toasts,
    toast,
    dismiss,
  };
}

