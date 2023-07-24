import { pageTitleStyles as css } from "./styles"

interface Props {
  title: string
}

export const PageTitle = ({ title }: Props) => {
  return <h1 className={css.wrapper}>{title}</h1>
}
