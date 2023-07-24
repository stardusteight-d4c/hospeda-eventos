import { CalendarBlank, MapPin } from '@/app/_components/@globals/icons'
import { formatDate } from '@/app/_utils/formatDate'

interface Props {
  coverImage: string,
  name: string 
  startDate: Date
  city: string
  state: string
}

export const Event = (props: Props) => {
  return (
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
  )
}