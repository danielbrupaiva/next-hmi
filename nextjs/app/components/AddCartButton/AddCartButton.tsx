"use client"
import styles from './AddCartButton.module.css';
import React from "react";

const props ={
    label:"add cart",
    onClick: Callback
}
function Callback() {
    console.log("Clicked");
}
export default function AddCartButton() {
    return (
        <div className={styles.container}>
            <button className="btn btn-secondary" onClick={props.onClick}>{props.label}</button>
        </div>
    );
}