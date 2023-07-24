import { Dispatch, SetStateAction } from "react"
import { togglePrivacyStyles as css } from "./styles"

interface Props {
  privacy: "public" | "private"
  setPrivacy: Dispatch<SetStateAction<"public" | "private">>
}

export const TogglePrivacy = ({ privacy, setPrivacy }: Props) => {
  return (
    <div className={css.wrapper}>
      <div id="privacy" className="hidden">
        {privacy}
      </div>
      <span
        onClick={() => setPrivacy("public")}
        className={css.handleActive({
          currentPrivacy: privacy,
          itemPrivacy: "public",
        })}
      >
        Publico
      </span>
      <span
        onClick={() => setPrivacy("private")}
        className={css.handleActive({
          currentPrivacy: privacy,
          itemPrivacy: "private",
        })}
      >
        Privado
      </span>
    </div>
  )
}
