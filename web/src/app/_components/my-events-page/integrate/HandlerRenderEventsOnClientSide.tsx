"use client"

import { Fragment, Key } from "react"
import { useMyEventsContext } from "@/app/_context/MyEventsContextProvider"
import { EventRow } from "./integrate"
import { handlerRenderEventsOnClientSideStyles as css } from "./styles"
import { IEvent } from "@/app/_interfaces/IEvent"

export const HandlerRenderEventsOnClientSide = () => {
  const { myEvents } = useMyEventsContext()

  return (
    <>
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
    </>
  )
}