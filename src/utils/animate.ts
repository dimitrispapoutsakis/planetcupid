import { butteryCubicBezier, transitionDuration25 } from "@/constants/animations";

export const getAnimationStyle = (name: string) => ({
  animation: `${name} ${transitionDuration25} ${butteryCubicBezier} both`,
});