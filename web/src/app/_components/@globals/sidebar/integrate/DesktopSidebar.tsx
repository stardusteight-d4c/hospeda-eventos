"use client"

import { useRouter, usePathname } from "next/navigation"
import { Slide } from "react-awesome-reveal"
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
    <Slide
      direction="down"
      duration={800}
      triggerOnce={true}
      className={css.wrapper}
    >
      <nav className={css.nav}>
        <ul className={css.unorderedList}>
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </Slide>
  )
}

const NavItem = ({ Icon, path }: NavItemProps) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <span
      onClick={() => router.push(path)}
      className={css.handleIcon(pathname, path)}
    >
      <Icon />
    </span>
  )
}
