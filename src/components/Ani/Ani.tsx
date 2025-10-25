import { useEffect, useState } from "react";
import styles from './Ani.module.scss';

export interface IAni {
  children: React.ReactNode;
  type: TAniType;
  duration?: number;
  delay?: number;
  easing?: string;
  aniOnMount?: boolean;
}

export type TAniType = 'slideInLeft';
export type TAnimationState = 'idle' | 'animating' | 'finished';

export const Ani = (props: IAni) => {
  const { children, type, duration = 300, delay = 0, easing = 'ease-in-out' } = props;
  const [animationState, setAnimationState] = useState<TAnimationState>('idle');
  const aniClass = `${styles[type]}`;

  useEffect(() => {
    // if (!aniOnMount) return;
    // setTimeout(() => {
    setAnimationState('animating');
    // }, delay);
    /*     return () => {
          clearTimeout(timeout);
        }; */
  }, []);

  return (
    // <view main-thread:global-bindlayoutchange={() => console.log('layoutchange')} className={aniClass}>
    <view className={aniClass} >
      {children}
    </view>
  );
};