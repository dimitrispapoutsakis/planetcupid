import type { IChildren, IClassName, IRestProps, TTextVariant } from "@/typings";
import clsx from "clsx";

interface IText {
  variant: TTextVariant;
}

type TText = IChildren & IClassName & IRestProps; 

const Text = ({ children, className = '', variant = 'white', ...rest }: TText) => {
  const colorMap: Record<TTextVariant, string> = {
    black: 'text-black',
    white: 'text-white',
    danger: 'text-red-500',
    success: 'text-green-500',
    warning: 'text-orange-500',
    info: 'text-cyan-500',
    muted: 'text-gray-500',
  };

  const ownClass = clsx(colorMap[variant as TTextVariant], className);

  return (
    <text className={ownClass} {...rest}>
      {children}
    </text>
  );
};

export default Text;