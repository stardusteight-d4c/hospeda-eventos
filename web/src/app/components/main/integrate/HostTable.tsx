import { EventRow } from "./EventRow"

export const HostTable = () => {
  return (
    <section className="overflow-x-scroll border border-layout-body rounded-xl mt-6 mb-10">
      <div className="flex flex-col min-w-[800px] w-full">
        <div className="flex items-center bg-layout-spotlight rounded-t-xl py-3 px-6 text-content-placeholder font-normal text-sm">
          <span className="max-w-[422px] w-full">Evento</span>
          <span className="max-w-[273px] w-full">Hospedagens</span>
          <span className="max-w-[273px] w-full">Privacidade</span>
        </div>
        <div>
          <EventRow />
          <EventRow />
          <EventRow />
          <EventRow />
          <EventRow />
          <EventRow />
        </div>
      </div>
    </section>
  )
}
