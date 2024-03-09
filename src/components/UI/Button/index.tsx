import styles from "./styles.module.css";
import {IButtonProps} from "./types";

export const Button = (props: IButtonProps) => {
    return (
        <div
            onClick={props.onClick}
            className={`${styles.button} ${styles[props.type]} ${props.className}`}
            style={props.style}
        >
            <div className={styles.content} style={props.contentStyle}>
                {props.children}
            </div>
        </div>
    );
};