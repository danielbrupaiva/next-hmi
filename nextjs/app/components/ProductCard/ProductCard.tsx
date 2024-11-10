"use client"
import styles from "./ProductCard.module.css"
import Image from "next/image";
import AddCartButton from "@/app/components/AddCartButton/AddCartButton";

type product = {
    id?: number;
    name?: string;
    description?: string;
    price?: number;
    image: string;
}

type Props = {
    product: product;
};

export default function ProductCard({ product }: Props) {
    return (
        <div className={styles.card}>
            <Image className={styles.image} src={product.image} alt={"product"} width={200} height={200}/>
            <h1 className={styles.title}>{product.name}</h1>
            <h1 className={styles.description}>{product.description}</h1>
            <h1 className={styles.price}>{"R$ "+product.price}</h1>
            <AddCartButton/>
        </div>
    );
};