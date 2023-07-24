"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navItems } from "./data"
import { mobileStyles as css } from "./styles"

interface Props {
  className?: string
}

interface NavItemProps {
  Icon: ({ className }: Props) => JSX.Element
  path: string
}

export const MobileSidebar = () => {
  return (
    <aside className={css.wrapper}>
      <nav className={css.nav}>
        <ul className={css.unorderedList}>
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
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
