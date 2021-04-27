import Head from "next/head"

import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact, DiSass,
    DiBootstrap,
    DiNodejsSmall,
    DiMysql,
    DiGit,
    DiNpm,
    DiLinux
} from "react-icons/di"
import { FaYarn } from "react-icons/fa"

import styles from "./styles/skills.module.scss"

export default function Skills() {
    return (
        <div>
            <Head>
                <title>Thainan Sousa | Skills</title>
            </Head>
            <h1>Essas são</h1>
            <h1>minhas skills.</h1>

            <div className={styles.content}>
                <div className={styles.skills}>
                    <h2>Hard Skills</h2>
                    <div className={styles.hardSkills}>
                        <button title="HTML5">
                            <DiHtml5 size={42} color={"#e44f26"} />
                        </button>
                        <button title="CSS3">
                            <DiCss3 size={42} color={"#1572b6"} />
                        </button>
                        <button title="JAVASCRIPT">
                            <DiJavascript1 size={42} color={"#ffca28"} />
                        </button>
                        <button title="REACT">
                            <DiReact size={42} color={"#5ed3f3"} />
                        </button>
                        <button title="SASS">
                            <DiSass size={42} color={"#c76494"} />
                        </button>
                        <button title="BOOTSTRAP">
                            <DiBootstrap size={42} color={"#5e3e8b"} />
                        </button>
                        <button title="NODE.JS">
                            <DiNodejsSmall size={42} color={"#6fa560"} />
                        </button>
                        <button title="MYSQL">
                            <DiMysql size={42} color={"#367e9e"} />
                        </button>
                        <button title="GIT">
                            <DiGit size={42} color={"#e84e31"} />
                        </button>
                        <button title="NPM">
                            <DiNpm size={42} color={"#c53635"} />
                        </button>
                        <button title="YARN">
                            <FaYarn size={42} color={"#2b8ab5"} />
                        </button>
                        <button title="LINUX">
                            <DiLinux size={42} color={"#000000"} />
                        </button>
                    </div>
                </div>
                <div className={styles.skills}>
                    <h2>Soft Skills</h2>
                    <div className={styles.softskills}>
                        <span>Proatividade</span>
                        <span>Empatia</span>
                        <span>Comunicação objetiva</span>
                        <span>Controle Emocional</span>
                        <span>Trabalho em equipe</span>
                    </div>
                </div>
            </div>
        </div>
    )
}