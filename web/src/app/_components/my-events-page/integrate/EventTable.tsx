"use client"

import { Fragment, Key, ReactNode, useEffect } from "react"
import { IEvent } from "@/app/_interfaces/IEvent"
import { EventHead, EventRow } from "./integrate"
import { eventTableStyles as css } from "./styles"
import { useMyEventsContext } from "@/app/_context/MyEventsContextProvider"

interface WrapperProps {
  children: ReactNode
}

export const EventTable = () => {
  const { myEvents, setMyEvents, requestAgain } = useMyEventsContext()

  useEffect(() => {
    ;(async () => {
      const events = await fetch(`${process.env.NEXT_SERVER_URL}/event`, {
        cache: "no-cache",
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          return null
        })
      setMyEvents(events)
    })()
  }, [requestAgain])

  return (
    <Wrapper>
      {myEvents && myEvents.length > 0 ? (
        <Fragment>
          {myEvents.map((event: IEvent, index: Key | null | undefined) => (
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
