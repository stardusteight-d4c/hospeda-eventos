export const desktopStyles = {
  wrapper: `hidden md:block w-14 h-screen fixed left-0 top-0 pt-24 z-0 bg-layout-spotlight`,
  nav: `py-6 px-3 h-full w-full relative`,
  unorderedList: `flex flex-col items-center gap-y-8`,
  handleIcon: (pathname: string, path: string) => {
    return `${
      pathname === path
        ? "bg-interactive-primary text-white"
        : "hover:bg-layout-body text-content-placeholder"
    } rounded-[10px] p-1 transition-all ease-in-out cursor-pointer`
  },
}

export const mobileStyles = {
  wrapper: `md:hidden block h-14 w-screen fixed bottom-0 z-50 bg-layout-spotlight`,
  nav: `p-2 pt-3 h-14 w-full relative`,
  unorderedList: `flex justify-center items-center gap-x-8`,
  handleIcon: (pathname: string, path: string) => {
    return `${
      pathname === path
        ? "bg-interactive-primary text-white"
        : "hover:bg-layout-body text-content-title"
    } rounded-[10px] p-1 transition-all ease-in-out cursor-pointer`
  },
}
