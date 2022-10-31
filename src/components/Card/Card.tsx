import { component$, useStylesScoped$, Slot } from '@builder.io/qwik';
import styles from "./Card.css?inline";

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <div class="card">
            <div class="card-inner">
                <div class="card-front">
                    <Slot name="front"></Slot>
                </div>
                <div class="card-back">
                    <Slot name="back"></Slot>
                </div>
            </div>
        </div>
    );
})