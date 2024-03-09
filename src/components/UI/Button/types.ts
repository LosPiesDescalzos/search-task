import {ReactNode} from "react";

export type ButtonType = 'confirm' | 'primary' | 'secondary';

export interface IButtonProps {
    type: ButtonType;
    style?: React.CSSProperties;
    className?: string;
    children?: ReactNode;
    onClick?: () => void;
    title?: string;
    disable?: boolean;
    contentStyle?: React.CSSProperties;
}
