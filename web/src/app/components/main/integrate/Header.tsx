import { MagnifyingGlass } from "@/app/components/icons/MagnifyingGlass"

export const Header = () => {
  return (
    <>
      <h1 className="text-content-title leading-[37.5px] text-[32px] font-bold">
        Meus Eventos
      </h1>
      <div className="flex items-center justify-between w-full mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar eventos"
            className="block bg-interactive-secundary border border-input-border rounded-xl w-[470px] pl-10 leading-[18.75px] p-3 placeholder:text-content-placeholder"
          />
          <MagnifyingGlass className="absolute top-1/2 -translate-y-1/2 left-3" />
        </div>
        <button className="whitespace-nowrap active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-primary rounded-full flex items-center justify-center py-3 px-2 w-[223px]">
          Criar evento
        </button>
      </div>
    </>
  )
}
