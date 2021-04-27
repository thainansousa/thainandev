import Head from "next/head";
import { useEffect } from "react";
import { FiSend } from "react-icons/fi"

import styles from "./styles/contact.module.scss"

export default function Contact() {

    function handleAlert() {
        alert("Essa opção se encontra em desenvolvimento")
    }
    return (
        <div>
            <Head>
                <title>Thainan Sousa | Contato</title>
            </Head>
            <h1>Então,</h1>
            <h1>vamos bater um papo?</h1>

            <span className={styles.msg}>Preencha o formulário que irei entrar em contato com você.</span>
            <form className={styles.form}>
                <label>Nome:</label>
                <input type="text" name="name" />
                <label>E-mail:</label>
                <input type="text" name="email" />
                <label>Assunto:</label>
                <input type="text" name="assunto" />
                <label>Mensagem:</label>
                <textarea name="message"></textarea>

                <button type="button" onClick={handleAlert}>Enviar <FiSend /></button>
            </form>
        </div>
    )
}