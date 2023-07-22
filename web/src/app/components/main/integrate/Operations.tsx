"use client"

import { useState } from "react"
import { DotsThree } from "@/app/components/icons/DotsThree"
import { Edit } from "@/app/components/icons/Edit"
import { Delete } from "@/app/components/icons/Delete"

interface Props {}

export const Operations = (props: Props) => {
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <div className="absolute right-0">
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
      {showDropdown && (
        <ul className="absolute flex flex-col items-center justify-center text-xs right-0 mt-1 w-[113px] p-3 bg-layout-spotlight rounded-lg shadow-black/10 shadow-lg">
          <li className="flex cursor-pointer items-center gap-x-2">
            <Edit /> Editar
          </li>
          <div className="w-full h-0 border-t border-t-layout-body my-3" />
          <li className="flex text-interactive-destructive cursor-pointer items-center gap-x-2">
            <Delete /> Excluir
          </li>
        </ul>
      )}
    </div>
  )
}
