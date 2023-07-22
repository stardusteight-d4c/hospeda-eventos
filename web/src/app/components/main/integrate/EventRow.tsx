import { CalendarBlank } from "@/app/components/icons/CalendarBlank"
import { MapPin } from "@/app/components//icons/MapPin"
import { Operations } from "./Operations"

export const EventRow = () => {
  return (
    <div className="flex items-center border-t border-t-layout-body">
      <span className="max-w-[422px] w-full py-3 ml-6 flex">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/46843029.jpg?k=7a19f44dbe450085ce81de3858e9ff11c96b9b08def0814d0a5fc78350fb4335&o=&hp=1"
          alt=""
          className="w-[106px] h-[80px] hidden md:block rounded-xl"
        />
        <div className="flex flex-col mt-[17px] pl-4">
          <h2 className="text-content-title font-bold">Nome do evento</h2>
          <div className="flex items-center gap-x-6">
            <span className="flex items-center gap-x-1">
              <CalendarBlank className="w-4 h-4 text-content-alt-brand" />
              <p className="text-content-base text-xs">XX-XX Mês XXXX</p>
            </span>
            <span className="flex items-center gap-x-1">
              <MapPin />
              <p className="text-content-base text-xs">Cidade/UF</p>
            </span>
          </div>
        </div>
      </span>
      <span className="max-w-[273px] w-full text-content-base">00/500</span>
      <span className="max-w-[273px] w-full relative flex items-center">
        <button className="flex items-center py-2 px-6 rounded-full text-content-title text-sm bg-success-light border border-success-dark">
          Publico
        </button>
        <Operations />
      </span>
    </div>
  )
}
