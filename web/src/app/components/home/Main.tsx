import { PageTitle } from "@/app/components/@globals"
import { homePageInfo } from "./data"
import { Card, SeeMore } from "./integrate"
import { mainStyles as css } from "./styles"
import { Fragment } from "react"

export const Main = () => {
  return (
    <div className={css.wrapper}>
      <main className={css.main}>
        <PageTitle title="Encontre sua Hospedagem!" />
        <div className={css.gridContainer}>{renderCards()}</div>
        <SeeMore />
      </main>
    </div>
  )
}

const renderCards = () => {
  return (
    <Fragment>
      {homePageInfo.map((host, index) => (
        <Card key={index} {...host} />
      ))}
      {homePageInfo.map((host, index) => (
        <Card key={index} {...host} styles="hidden md:block" />
      ))}
    </Fragment>
  )
}
