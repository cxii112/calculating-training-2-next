import {ReactElement} from "react";
import styles from '../styles/Bar.module.scss'

export default function Bar(props: {
    children?: ReactElement
}) {
    const classNames = {
        "bar": [styles.bar],
    }
    return (
        <div className={classNames.bar.join(" ")}>
            {props.children}
        </div>
    )
}