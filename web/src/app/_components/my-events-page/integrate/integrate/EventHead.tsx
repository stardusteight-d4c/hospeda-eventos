import { eventHeadStyles as css } from "./styles"

export const EventHead = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.event}>Evento</span>
      <span className={css.hostings}>Hospedagens</span>
      <span className={css.privacy}>Privacidade</span>
    </div>
  )
}
