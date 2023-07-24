import { IEvent } from "@/app/_interfaces/IEvent"
import { Event, Hostings, Privacy, Operations } from "./event-row"
import { eventRowStyles as css } from "./styles"

export const EventRow = (props: IEvent) => {
  const { name, coverImage, startDate, startTime, city, state, privacy } = props
  const eventProps = { name, coverImage, startDate, startTime, city, state }
  return (
    <div className={css.wrapper}>
      <Event {...eventProps} />
      <Hostings />
      <span className={css.container}>
        <Privacy privacy={privacy} />
        <Operations {...props} />
      </span>
    </div>
  )
}
