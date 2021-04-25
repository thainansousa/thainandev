import Link from 'next/link'
import { useState } from 'react'

import { IoHome } from "react-icons/io5"
import { FaDev } from "react-icons/fa"
import { BiDevices } from "react-icons/bi"
import { HiOutlineMail } from "react-icons/hi"
import { TiSocialLinkedin } from "react-icons/ti"
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"


import styles from "./styles.module.scss"

export default function Header() {

    const [home, setHome] = useState(true)
    const [skills, setSkills] = useState(false)
    const [projects, setProjects] = useState(false)
    const [contact, setContact] = useState(false)

    function linkHome() {
        setHome(true)
        setSkills(false)
        setProjects(false)
        setContact(false)
    }
    function linkSkills() {
        setHome(false)
        setSkills(true)
        setProjects(false)
        setContact(false)
    }
    function linkProjetcs() {
        setHome(false)
        setSkills(false)
        setProjects(true)
        setContact(false)
    }
    function linkContact() {
        setHome(false)
        setSkills(false)
        setProjects(false)
        setContact(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>T</h1>
                <strong>Sousa</strong>
            </div>
            <div className={styles.icons}>
                <button type="button" onClick={linkHome}>
                    <Link href={"/"}>
                        <div>
                            <IoHome size={28} className={home ? styles.isActive : ""} />
                            <small>Home</small>
                        </div>
                    </Link>
                </button>
                <button type="button" onClick={linkSkills}>
                    <Link href={"/skills"}>
                        <div>
                            <FaDev size={28} className={skills ? styles.isActive : ""} />
                            <small>Skills</small>
                        </div>
                    </Link>
                </button>
                <button type="button" onClick={linkProjetcs}>
                    <Link href={"/projects"}>
                        <div>
                            <BiDevices size={28} className={projects ? styles.isActive : ""} />
                            <small>Projects</small>
                        </div>
                    </Link>
                </button>
                <button type="button" onClick={linkContact}>
                    <Link href={"/contact"}>
                        <div>
                            <HiOutlineMail size={28} className={contact ? styles.isActive : ""} />
                            <small>Contact</small>
                        </div>
                    </Link>
                </button>
            </div>
            <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/thainan-sousa-0347a3180/" target="_blank">
                    <TiSocialLinkedin size={28} className={styles.icon} />
                </a>
                <a href="https://github.com/thainansousa" target="_blank">
                    <AiFillGithub size={28} className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/thainans11/" target="_blank">
                    <AiOutlineInstagram size={28} className={styles.icon} />
                </a>
            </div>
        </div>
    )
}