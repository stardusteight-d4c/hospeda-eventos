import { Fragment, Key, ReactNode } from "react"
import { IEvent } from "@/app/_interfaces/IEvent"
import { EventHead, EventRow } from "./integrate"
import { eventTableStyles as css } from "./styles"

interface WrapperProps {
  children: ReactNode
}

export const EventTable = async () => {
  const events = await fetch(`${process.env.NEXT_SERVER_URL}/event`, {
    cache: "no-cache",
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err)
      return null
    })

  return (
    <Wrapper>
      {events.length > 0 ? (
        <Fragment>
          {events.map((event: IEvent, index: Key | null | undefined) => (
            <EventRow key={index} {...event} />
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <h3 className={css.notFoundEvent}>Nenhum evento encontrado.</h3>
        </Fragment>
      )}
    </Wrapper>
  )
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <section className={css.wrapper}>
      <div className={css.container}>
        <EventHead />
        <div>{children}</div>
      </div>
    </section>
  )
}
