"use client"
import styles from './LED.module.css';
import React from "react";

type Props = {
    id?: string;
    label?: string;
    callback?: () => void;
}
export default function LED({ id, label, callback }: Props) {
    return (
        <div className={styles.container}>
            <button className="btn btn-secondary" id={id} onClick={callback}>{label}</button>
        </div>
    );
}