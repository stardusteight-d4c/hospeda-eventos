"use client"

import { useState } from "react"
import { DotsThree } from "@/app/_components/@globals/icons/DotsThree"
import { IEvent } from "@/app/_interfaces/IEvent"
import { DeleteEventPopUp } from "./DeleteEventPopUp"
import { OperationsDropdown } from "./OperationsDropdown"
import { operationsStyles as css } from "./styles"

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
    <div className={css.wrapper}>
      <DeleteEventPopUp {...deleteEventPopUpProps} />
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={css.dotsContainer(showDropdown)}
      >
        <DotsThree />
      </div>
      <OperationsDropdown {...operationsDropdownProps} />
    </div>
  )
}
