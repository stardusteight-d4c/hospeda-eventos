import { Key, ReactNode } from "react"
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
    .catch((err) => console.log(err))

  return (
    <Wrapper>
      {events?.map((event: IEvent, index: Key | null | undefined) => (
        <EventRow key={index} {...event} />
      ))}
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
