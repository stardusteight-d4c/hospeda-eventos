import React, { Dispatch, Fragment, SetStateAction } from "react"

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
  async function deleteEvent(id: string) {
    setShowDropdown(false)
    setProceedToDelete(false)
    await fetch(`${process.env.NEXT_SERVER_URL}/event?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => location.reload())
      .catch((err) => {
        console.error(
          "an error occurred in the request to delete the Event:",
          err
        )
      })
  }

  return (
    <Fragment>
      {proceedToDelete && (
        <div className="glassmorphism z-40 fixed inset-0 w-screen h-screen" />
      )}
      {proceedToDelete && (
        <div className="w-screen h-screen  fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-layout-spotlight p-8 rounded-2xl shadow-black/10 shadow-lg">
            <h2 className="text-2xl text-interactive-destructive font-medium text-center">
              Excluir Evento
            </h2>
            <p className="w-[350px] text-sm text-gray-500 text-center mt-4">
              Você realmente deseja excluir o evento: "{eventName}"? Esta ação
              não poderá ser desfeita!
            </p>
            <div className="flex items-center gap-x-4 w-fit mx-auto mt-8">
              <button
                onClick={() => deleteEvent(eventId)}
                className="whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-destructive rounded-full flex items-center justify-center py-2 px-4 w-fit"
              >
                Delete
              </button>
              <button
                className="whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-gray-500 rounded-full flex items-center justify-center py-2 px-4 w-fit"
                onClick={() => {
                  setShowDropdown(false)
                  setProceedToDelete(false)
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  )
}
