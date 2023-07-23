import { Key } from "react"
import { IEvent } from "@/app/@interfaces/IEvent"
import { EventRow } from "./EventRow"

export const EventTable = async () => {
  const events = await fetch(`${process.env.NEXT_SERVER_URL}/event`, {
    cache: "no-cache",
  }).then((response) => response.json())

  return (
    <section className="overflow-x-scroll lg:overflow-visible border border-layout-body rounded-xl mt-6 mb-10">
      <div className="flex flex-col min-w-[800px] w-full">
        <div className="flex items-center bg-layout-spotlight rounded-t-xl py-3 px-6 text-content-placeholder font-normal text-sm">
          <span className="max-w-[422px] w-full">Evento</span>
          <span className="max-w-[273px] w-full">Hospedagens</span>
          <span className="max-w-[273px] w-full">Privacidade</span>
        </div>
        <div>
          {events.map((event: IEvent, index: Key | null | undefined) => (
            <EventRow key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  )
}
