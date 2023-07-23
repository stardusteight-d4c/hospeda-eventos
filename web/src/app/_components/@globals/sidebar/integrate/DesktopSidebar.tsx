"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { desktopStyles as css } from "./styles"
import { navItems } from "./data"

interface Props {
  className?: string
}

interface NavItemProps {
  Icon: ({ className }: Props) => JSX.Element
  path: string
}

export const DesktopSidebar = () => {
  return (
    <aside className={css.wrapper}>
      <nav className={css.nav}>
        <ul className={css.unorderedList}>
          {navItems.map((item) => (
            <NavItem {...item} />
          ))}
        </ul>
      </nav>
    </aside>
  )
}

const NavItem = ({ Icon, path }: NavItemProps) => {
  const pathname = usePathname()
  return (
    <Link href={path} className={css.handleIcon(pathname, path)}>
      <Icon />
    </Link>
  )
}
