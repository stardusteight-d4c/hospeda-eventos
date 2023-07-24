"use client"

import { MagnifyingGlass } from "@/app/_components/@globals/icons"
import { useMyEventsContext } from "@/app/_context/MyEventsContextProvider"
import { IEvent } from "@/app/_interfaces/IEvent"
import { searchStyles as css } from "./styles"

export const Search = () => {
  const { setMyEvents } = useMyEventsContext()

  async function handleSearchEvent(inputValue: string) {
    if (inputValue.length >= 3) {
      const events: IEvent[] = await fetch(
        `${process.env.NEXT_SERVER_URL}/event/search?name=${inputValue}`,
        {
          cache: "no-cache",
        }
      )
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          return null
        })
      setMyEvents(events)
    } else {
      const events = await fetch(`${process.env.NEXT_SERVER_URL}/event`, {
        cache: "no-cache",
      })
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          return null
        })
      setMyEvents(events)
    }
  }

  return (
    <div className={css.wrapper}>
      <input
        type="text"
        onChange={(e) => handleSearchEvent(e.target.value)}
        placeholder="Buscar eventos"
        className={css.input}
      />
      <MagnifyingGlass className={css.icon} />
    </div>
  )
}
