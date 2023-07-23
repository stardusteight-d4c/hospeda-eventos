import { CalendarBlank } from "@/app/components/@globals/icons/CalendarBlank"
import { MapPin } from "@/app/components/@globals/icons/MapPin"
import { Operations } from "./Operations"
import { IEvent } from "@/app/@interfaces/IEvent"

export const EventRow = (props: IEvent) => {
  function formatDate(date: Date) {
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  return (
    <div className="flex items-center border-t border-t-layout-body">
      <span className="max-w-[422px] w-full py-3 ml-6 flex">
        <img
          src={props.coverImage}
          alt={props.name}
          className="w-[106px] h-[80px] hidden md:block rounded-xl"
        />
        <div className="flex flex-col mt-[17px] pl-4">
          <h2 className="text-content-title font-bold">{props.name}</h2>
          <div className="flex items-center gap-x-6">
            <span className="flex items-center gap-x-1">
              <CalendarBlank className="w-4 h-4 text-content-alt-brand" />
              <p className="text-content-base text-xs">
                {formatDate(new Date(props.startDate))}
              </p>
            </span>
            <span className="flex items-center gap-x-1">
              <MapPin />
              <p className="text-content-base text-xs">
                {props.city}/{props.state}
              </p>
            </span>
          </div>
        </div>
      </span>
      <span className="max-w-[273px] w-full text-content-base">00/500</span>
      <span className="max-w-[273px] w-full relative flex items-center">
        {props.privacy === "public" ? (
          <button className="capitalize flex items-center py-2 px-6 rounded-full text-content-title text-sm bg-success-light border border-success-dark">
            Público
          </button>
        ) : (
          <button className="capitalize flex items-center py-2 px-6 rounded-full text-content-title text-sm bg-error-light border border-error-dark">
            Privado
          </button>
        )}
        <Operations {...props} />
      </span>
    </div>
  )
}
