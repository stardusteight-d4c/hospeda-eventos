import { TextAa } from "@/app/_components/@globals/icons"
import { icons } from "./data"
import { richTextHeaderStyles as css } from "./styles"

interface ListItemProps {
  Icon: () => JSX.Element
}

export const RichTextHeader = () => {
  return (
    <div className={css.wrapper}>
      <ListItem Icon={TextAa} />
      <ul className={css.unorderedList}>
        {icons.map((icon, index) => (
          <ListItem key={index} {...icon} />
        ))}
      </ul>
    </div>
  )
}

const ListItem = ({ Icon }: ListItemProps) => {
  return (
    <li className={css.listItem}>
      <Icon />
    </li>
  )
}
