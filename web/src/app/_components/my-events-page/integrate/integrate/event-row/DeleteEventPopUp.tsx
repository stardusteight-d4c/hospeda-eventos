"use client"

import { Dispatch, Fragment, SetStateAction } from "react"
import { deleteEventPopUpStyles as css } from "./styles"
import { useMyEventsContext } from "@/app/_context/MyEventsContextProvider"

interface Props {
  proceedToDelete: boolean
  setProceedToDelete: Dispatch<SetStateAction<boolean>>
  setShowDropdown: Dispatch<SetStateAction<boolean>>
  eventName: string
  eventId: string
}

export const DeleteEventPopUp = ({
  proceedToDelete,
  eventName,
  eventId,
  setProceedToDelete,
  setShowDropdown,
}: Props) => {
  const { setRequestAgain, requestAgain } = useMyEventsContext()
  async function deleteEvent(id: string) {
    setShowDropdown(false)
    setProceedToDelete(false)
    await fetch(`${process.env.NEXT_SERVER_URL}/event?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => setRequestAgain(!requestAgain))
      .catch((err) => {
        console.error(
          "an error occurred in the request to delete the Event:",
          err
        )
      })
  }

  return (
    <Fragment>
      {proceedToDelete && <div className={css.overlay} />}
      {proceedToDelete && (
        <div className={css.wrapper}>
          <div className={css.container}>
            <h2 className={css.title}>Excluir Evento</h2>
            <p className={css.subtitle}>
              Você realmente deseja excluir o evento: "{eventName}"? Esta ação
              não poderá ser desfeita!
            </p>
            <div className={css.buttonsContainer}>
              <button
                onClick={() => deleteEvent(eventId)}
                className={css.delete}
              >
                Excluir
              </button>
              <button
                className={css.cancel}
                onClick={() => {
                  setShowDropdown(false)
                  setProceedToDelete(false)
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}
