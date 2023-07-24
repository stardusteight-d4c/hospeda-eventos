import { eventStyles as css } from "./styles"
import { EventSpacetimeInfo } from "./EventSpacetimeInfo"

interface Props {
  coverImage: string
  name: string
  startDate: Date
  city: string
  state: string
}

export const Event = (props: Props) => {
  return (
    <span className={css.wrapper}>
      <img src={props.coverImage} alt={props.name} className={css.image} />
      <div className={css.container}>
        <h2 className={css.name}>{props.name}</h2>
        <EventSpacetimeInfo
          startDate={props.startDate}
          city={props.city}
          state={props.state}
        />
      </div>
    </span>
  )
}
