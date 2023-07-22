import { CalendarBlank } from "../icons/CalendarBlank"
import { MapPin } from "../icons/MapPin"
import { Header } from "./integrate/Header"

export const Main = () => {
  return (
    <main className="py-8 pl-[145px] pr-[89px] w-full">
      <Header />
      <section className="flex flex-col">
        <div className="flex items-center bg-layout-spotlight border border-layout-body py-3 px-6 mt-6 rounded-t-xl text-content-placeholder font-normal text-sm">
          <span className="max-w-[585px] w-full">Evento</span>
          <span className="max-w-[273px] w-ful">Hospedagens</span>
          <span className="max-w-[273px] w-ful">Privacidade</span>
        </div>
        <div className="border border-t-0 border-layout-body rounded-b-xl">
          <div className="flex items-center border-t border-t-layout-body">
            <span className="max-w-[585px] w-full py-3 px-6 flex">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/46843029.jpg?k=7a19f44dbe450085ce81de3858e9ff11c96b9b08def0814d0a5fc78350fb4335&o=&hp=1"
                alt=""
                className="w-[106px] h-[80px] rounded-xl"
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
            <span className="max-w-[273px] w-full">
              <button className="flex items-center py-2 px-6 rounded-full text-content-title text-sm bg-success-light border border-success-dark">
                Publico
              </button>
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
