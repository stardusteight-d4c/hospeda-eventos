import { Button, Image, Info, Title } from "./integrate"
import { cardStyles as css } from "./styles"

export interface CardProps {
  name: string
  coverImage: string
  minPrice?: number
  location: string
  link: string
  soldOff?: boolean
  styles?: string
}

export const Card = ({
  name,
  coverImage,
  minPrice,
  location,
  link,
  soldOff = false,
  styles,
}: CardProps) => {
  return (
    <div className={css.wrapper(styles!, soldOff)}>
      <Image coverImage={coverImage} alt={name} soldOff={soldOff} />
      <div className={css.contentContainer}>
        <Title name={name} />
        <div className={css.internalContainer}>
          <Info minPrice={minPrice} location={location} />
          <Button soldOff={soldOff} link={link} />
        </div>
      </div>
    </div>
  )
}
