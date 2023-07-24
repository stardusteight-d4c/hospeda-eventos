"use client"

import React, { createContext, useContext, useState } from "react"
import { IEvent } from "@/app/_interfaces/IEvent"

interface Props {
  children: React.ReactNode
}

interface ContextAPI {
  myEvents: IEvent[]
  setMyEvents: React.Dispatch<React.SetStateAction<IEvent[]>>
}

export const MyContext = createContext<ContextAPI>({
  myEvents: [],
  setMyEvents: () => {},
})

export const MyEventsContextProvider = ({ children }: Props) => {
  const [myEvents, setMyEvents] = useState<IEvent[]>([])

  const contextValue: ContextAPI = { myEvents, setMyEvents }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export const useMyEventsContext = () => useContext(MyContext)
