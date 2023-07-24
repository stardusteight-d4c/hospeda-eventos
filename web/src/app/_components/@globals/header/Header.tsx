"use client"

import Link from "next/link"
import Image from "next/image"
import { Slide } from "react-awesome-reveal"
import userPlaceholder from "@/app/_assets/user-placeholder.svg"
import { Hospeda } from "@/app/_components/@globals/icons"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <Slide direction="down" duration={500} className="relative z-50">
      <header className={css.wrapper}>
        <div className={css.container}>
          <Link href="/" className={css.link}>
            <Hospeda className={css.hospeda} />
            <p className={css.hospedaText}>Hospeda Eventos</p>
          </Link>
          <Image
            src={userPlaceholder}
            width={40}
            height={40}
            alt="account"
            className={css.account}
          />
        </div>
      </header>
    </Slide>
  )
}
