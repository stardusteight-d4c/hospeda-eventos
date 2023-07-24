"use client"

import { useState } from "react"
import { DotsThree } from "@/app/_components/@globals/icons/DotsThree"
import { IEvent } from "@/app/_interfaces/IEvent"
import { DeleteEventPopUp } from "./DeleteEventPopUp"
import { OperationsDropdown } from "./OperationsDropdown"

export const Operations = (props: IEvent) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [proceedToDelete, setProceedToDelete] = useState(false)

  const deleteEventPopUpProps = {
    eventName: props.name,
    eventId: props.id!,
    proceedToDelete,
    setProceedToDelete,
    setShowDropdown,
  }

  const operationsDropdownProps = {
    eventData: props,
    showDropdown: showDropdown,
    setProceedToDelete: setProceedToDelete,
    setShowDropdown: setShowDropdown,
  }

  return (
    <div className="absolute right-0">
      <DeleteEventPopUp {...deleteEventPopUpProps} />
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={`${
          showDropdown
            ? "bg-interactive-secundary"
            : "hover:bg-interactive-secundary"
        } cursor-pointer transition-all duration-100 ease-in-out rounded-full p-1`}
      >
        <DotsThree />
      </div>
      <OperationsDropdown {...operationsDropdownProps} />
    </div>
  )
}
