"use client"

import { Fragment } from "react"
import { Fade } from "react-awesome-reveal"
import { PageTitle } from "@/app/_components/@globals"
import { homePageInfo } from "./data"
import { Card, SeeMore } from "./integrate"
import { mainStyles as css } from "./styles"

export const Main = () => {
  return (
    <main className={css.wrapper}>
      <PageTitle title="Encontre sua Hospedagem!" />
      <div className={css.gridContainer}>{renderCards()}</div>
      <SeeMore />
    </main>
  )
}

const renderCards = () => {
  return (
    <Fragment>
      <Fade cascade damping={1e-1} triggerOnce={true}>
        {homePageInfo.map((host, index) => (
          <Card key={index} {...host} />
        ))}
      </Fade>
      <Fade cascade damping={1e-1}>
        {homePageInfo.map((host, index) => (
          <Card key={index} {...host} styles="hidden md:block" />
        ))}
      </Fade>
    </Fragment>
  )
}
