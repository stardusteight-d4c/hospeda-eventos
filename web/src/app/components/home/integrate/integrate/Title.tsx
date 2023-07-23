import { titleStyles as css } from "./styles"

interface Props {
  name: string
}

export const Title = ({ name }: Props) => {
  return (
    <h2 title={name} className={css.wrapper}>
      <p className={css.title}>{name}</p>
    </h2>
  )
}
