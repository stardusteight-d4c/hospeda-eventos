import React, { Fragment } from "react"

interface Props {
  privacy: "public" | "private"
}

export const Privacy = (props: Props) => {
  return (
    <Fragment>
      {props.privacy === "public" ? (
        <button className="capitalize flex items-center py-2 px-6 rounded-full text-content-title text-sm bg-success-light border border-success-dark">
          Público
        </button>
      ) : (
        <button className="capitalize flex items-center py-2 px-6 rounded-full text-content-title text-sm bg-error-light border border-error-dark">
          Privado
        </button>
      )}
    </Fragment>
  )
}
