import {
  TextAa,
  TextB,
  TextItalic,
  ListBullets,
  ListNumbers,
  Paperclip,
  TrashSimple,
} from "@/app/_components/@globals/icons"

export const RichTextHeader = () => {
  return (
    <div className="bg-interactive-secundary border border-input-border p-3 flex items-center justify-between rounded-t-xl">
      <div className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
        <TextAa />
      </div>
      <ul className="flex items-center gap-x-3">
        <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
          <TextB />
        </li>
        <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
          <TextItalic />
        </li>
        <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
          <ListBullets />
        </li>
        <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
          <ListNumbers />
        </li>
        <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
          <Paperclip />
        </li>
        <li className="cursor-pointer p-1 rounded-md hover:bg-layout-body">
          <TrashSimple />
        </li>
      </ul>
    </div>
  )
}
