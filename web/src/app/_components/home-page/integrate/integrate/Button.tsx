import { buttonStyles as css } from "./styles"

interface Props {
  soldOff: boolean
  link: string
}

export const Button = ({ soldOff, link }: Props) => {
  return (
    <>
      {soldOff ? (
        <a href={link} target="_blank" className={css.soldOffTrue}>
          Esgotado
        </a>
      ) : (
        <a href={link} target="_blank" className={css.soldOffFalse}>
          Confira
        </a>
      )}
    </>
  )
}
