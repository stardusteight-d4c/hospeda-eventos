import { MagnifyingGlass } from '@/app/_components/@globals/icons'

export const Search = () => {
  return (
    <div className="relative w-full">
    <input
      type="text"
      placeholder="Buscar eventos"
      className="block bg-interactive-secundary border border-input-border rounded-xl w-full md:w-[470px] pl-10 leading-[18.75px] p-3 placeholder:text-content-placeholder"
    />
    <MagnifyingGlass className="absolute top-1/2 -translate-y-1/2 left-3" />
  </div>
  )
}