"use client"

import { ReactNode, useEffect } from "react"
import { useMyEventsContext } from "@/app/_context/MyEventsContextProvider"
import { EventHead } from "."
import { wrapperStyles as css } from "./styles"
import { IEvent } from "@/app/_interfaces/IEvent"

interface Props {
  children: ReactNode
  events: IEvent[]
}

export const Wrapper = ({ children, events }: Props) => {
  const { setMyEvents, requestAgain } = useMyEventsContext()
  setMyEvents(events)

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
    <section className={css.wrapper}>
      <div className={css.container}>
        <EventHead />
        <div>{children}</div>
      </div>
    </section>
  )
}
