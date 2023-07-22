import { EventRow } from "./EventRow"

export const AccommodationTable = () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center bg-layout-spotlight border border-layout-body py-3 px-6 mt-6 rounded-t-xl text-content-placeholder font-normal text-sm">
        <span className="max-w-[422px] w-full">Evento</span>
        <span className="max-w-[273px] w-full">Hospedagens</span>
        <span className="max-w-[273px] w-full">Privacidade</span>
      </div>
      <div className="border border-t-0 border-layout-body rounded-b-xl">
        <EventRow />
        <EventRow />
        <EventRow />
        <EventRow />
        <EventRow />
        <EventRow />
      </div>
    </section>
  )
}
