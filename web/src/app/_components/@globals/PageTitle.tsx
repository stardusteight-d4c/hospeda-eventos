"use client"

import { pageTitleStyles as css } from "./styles"
import { Slide } from "react-awesome-reveal"

interface Props {
  title: string
}

export const PageTitle = ({ title }: Props) => {
  return (
    <Slide direction="left" duration={300} triggerOnce={true}>
      <h1 className={css.wrapper}>{title}</h1>
    </Slide>
  )
}
