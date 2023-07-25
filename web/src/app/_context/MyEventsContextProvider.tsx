"use client"

import React, { createContext, useContext, useState } from "react"
import { IEvent } from "@/app/_interfaces/IEvent"

interface Props {
  children: React.ReactNode
}

interface ContextAPI {
  myEvents: IEvent[]
  requestAgain: boolean
  setMyEvents: React.Dispatch<React.SetStateAction<IEvent[]>>
  setRequestAgain: React.Dispatch<React.SetStateAction<boolean>>
}

export const MyContext = createContext<ContextAPI>({
  myEvents: [],
  requestAgain: false,
  setMyEvents: () => {},
  setRequestAgain: () => {},
})

export const MyEventsContextProvider = ({ children }: Props) => {
  const [myEvents, setMyEvents] = useState<IEvent[]>([])
  const [requestAgain, setRequestAgain] = useState<boolean>(false)

  const contextValue: ContextAPI = {
    myEvents,
    setMyEvents,
    requestAgain,
    setRequestAgain,
  }

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  )
}

export const useMyEventsContext = () => useContext(MyContext)
