import { CalendarBlank, MapPin } from "@/app/_components/@globals/icons"
import { formatDate } from "@/app/_utils/formatDate"
import { eventSpacetimeInfoStyles as css } from "./styles"

interface Props {
  startDate: Date
  city: string
  state: string
}

export const EventSpacetimeInfo = ({ startDate, city, state }: Props) => {
  return (
    <div className={css.wrapper}>
      <span className={css.flexCenter}>
        <CalendarBlank className={css.calendarIcon} />
        <p className={css.paragraph}>{formatDate(new Date(startDate))}</p>
      </span>
      <span className={css.flexCenter}>
        <MapPin />
        <p className={css.paragraph}>
          {city}/<span className="block uppercase">{state}</span>
        </p>
      </span>
    </div>
  )
}
