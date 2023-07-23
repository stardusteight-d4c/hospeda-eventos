import { Dispatch, SetStateAction } from "react"

interface Props {
  privacy: "public" | "private"
  setPrivacy: Dispatch<SetStateAction<"public" | "private">>
}

export const TogglePrivacy = ({ privacy, setPrivacy }: Props) => {
  return (
    <div className="flex bg-layout-body items-center justify-center rounded-full w-fit p-1">
      <div id="privacy" className="hidden">
        {privacy}
      </div>
      <span
        onClick={() => setPrivacy("public")}
        className={`${
          privacy === "public"
            ? "text-white bg-interactive-primary"
            : "text-gray-500"
        } block py-2 px-6 cursor-pointer rounded-full text-center`}
      >
        Publico
      </span>
      <span
        onClick={() => setPrivacy("private")}
        className={`${
          privacy === "private"
            ? "text-white bg-interactive-primary"
            : "text-gray-500"
        } block py-2 px-6 cursor-pointer rounded-full text-center`}
      >
        Privado
      </span>
    </div>
  )
}
