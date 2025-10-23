/* Types... */
export type TTextVariant = 'black' | 'white' | 'danger' | 'success' | 'warning' | 'info' | 'muted';

/* Components... */
export interface IChildren {
  children?: React.ReactNode;
}

export interface IClassName {
  className?: string;
}

export interface IRestProps {
  [key: string]: any;
}

export interface IRoute {
  name: string;
  path: string;
  icon: string;
}