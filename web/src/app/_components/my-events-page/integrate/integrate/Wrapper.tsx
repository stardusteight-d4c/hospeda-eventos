"use client"

import { ReactNode, useEffect } from "react"
import { useMyEventsContext } from "@/app/_context/MyEventsContextProvider"
import { EventHead } from "."
import { wrapperStyles as css } from "./styles"
import { IEvent } from "@/app/_interfaces/IEvent"

interface Props {
  children: ReactNode
  serverEvents: IEvent[]
}

export const Wrapper = ({ children, serverEvents }: Props) => {
  const { setMyEvents, requestAgain } = useMyEventsContext()

  useEffect(() => {
    setMyEvents(serverEvents)
  }, [])

  useEffect(() => {
    ;(async () => {
      const updateEvents = await fetch(`${process.env.NEXT_SERVER_URL}/event`, {
        cache: "no-cache",
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          return null
        })
      setMyEvents(updateEvents)
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
