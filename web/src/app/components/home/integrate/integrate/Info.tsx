import { MapPin } from "@/app/components/@globals/icons"
import { infoStyles as css } from "./styles"

interface Props {
  minPrice?: number
  location: string
}

export const Info = ({ minPrice, location }: Props) => {
  return (
    <div className={css.wrapper}>
      {minPrice ? (
        <p className={css.infomedPrice}>A partir de: R${minPrice}</p>
      ) : (
        <p className={css.uninformedPrice}>Não informado</p>
      )}
      <span className={css.locationContainer}>
        <MapPin />
        <p className={css.locationText}>{location}</p>
      </span>
    </div>
  )
}
