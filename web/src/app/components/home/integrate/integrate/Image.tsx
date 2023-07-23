import { imageStyles as css } from "./styles"

interface Props {
  coverImage: string
  alt: string
  soldOff: boolean
}

export const Image = ({ coverImage, alt, soldOff }: Props) => {
  return <img src={coverImage} alt={alt} className={css.img(soldOff)} />
}
