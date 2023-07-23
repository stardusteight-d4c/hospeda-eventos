import Link from "next/link"
import Image from "next/image"
import userPlaceholder from "@/app/_assets/user-placeholder.svg"
import { Hospeda } from "@/app/_components/@globals/icons"
import { headerStyles as css } from "./styles"

export const Header = () => {
  return (
    <header className={css.wrapper}>
      <div className={css.container}>
        <Link
          href="/"
          className={css.link}
        >
          <Hospeda className={css.hospeda} />
          <p className={css.hospedaText}>Hospeda Eventos</p>
        </Link>
        <Image
          src={userPlaceholder}
          width={40}
          height={40}
          alt="account"
          className={css.account}
        />
      </div>
    </header>
  )
}
