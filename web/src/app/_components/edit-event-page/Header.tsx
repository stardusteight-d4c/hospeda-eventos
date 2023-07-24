"use client"

import Link from "next/link"
import { Slide } from "react-awesome-reveal"
import { CaretLeft, Hospeda } from "@/app/_components/@globals/icons"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <div className={css.wrapper}>
      <Slide direction="left" duration={300} triggerOnce={true}>
        <div className={css.backContainer}>
          <h1 className={css.headingOne}>
            <Link href="/meus-eventos" className={css.linkMyEvents}>
              <CaretLeft />
            </Link>
            <span>Criar evento</span>
          </h1>
        </div>
      </Slide>
      <Link href="/" className={css.linkHome}>
        <Hospeda className={css.icon} />
        <p className={css.hospedaText}>Hospeda Eventos</p>
      </Link>
    </div>
  )
}
