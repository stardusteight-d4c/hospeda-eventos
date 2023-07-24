export const eventStyles = {
  wrapper: `max-w-[422px] w-full py-3 ml-6 flex`,
  image: `w-[106px] h-[80px] hidden md:block rounded-xl`,
  container: `flex flex-col mt-[17px] pl-4`,
  name: `text-content-title font-bold"`,
}

export const eventSpacetimeInfoStyles = {
  wrapper: `flex items-center gap-x-6`,
  flexCenter: `flex items-center gap-x-1`,
  calendarIcon: `w-4 h-4 text-content-alt-brand`,
  paragraph: `text-content-base text-xs`,
}

export const hostingsStyles = {
  wrapper: `max-w-[273px] w-full text-content-base`,
}

export const operationsStyles = {
  wrapper: `absolute right-0`,
  dotsContainer: (showDropdown: boolean) => {
    return `${
      showDropdown
        ? "bg-interactive-secundary"
        : "hover:bg-interactive-secundary"
    } cursor-pointer transition-all duration-100 ease-in-out rounded-full p-1`
  },
}

export const deleteEventPopUpStyles = {
  overlay: `glassmorphism z-40 fixed inset-0 w-screen h-screen`,
  wrapper: `w-screen h-screen fixed inset-0 flex items-center justify-center z-50`,
  container: `bg-layout-spotlight p-8 rounded-2xl shadow-black/10 shadow-lg`,
  title: `text-2xl text-interactive-destructive font-medium text-center`,
  subtitle: `w-[350px] text-sm text-gray-500 text-center mt-4`,
  buttonsContainer: `flex items-center gap-x-4 w-fit mx-auto mt-8`,
  delete: `whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-destructive rounded-full flex items-center justify-center py-2 px-4 w-fit`,
  cancel: `whitespace-nowrap cursor-pointer mt-4 md:mt-0 active:scale-95 transition-all duration-300 ease-in-out text-white font-bold bg-gray-500 rounded-full flex items-center justify-center py-2 px-4 w-fit`,
}

export const operationsDropdownStyles = {
  invisibleOverlay: `z-20 fixed w-screen h-screen inset-0`,
  wrapper: `absolute z-30 flex flex-col items-center overflow-hidden justify-center text-xs right-0 mt-1 w-[113px] bg-layout-spotlight rounded-lg shadow-black/10 shadow-lg`,
  editItem: `flex text-medium hover:bg-gray-600/5 transition-all duration-300 ease-in-out cursor-pointer items-center justify-center gap-x-2 py-3 w-full`,
  divider: `w-full h-0 border-t border-t-layout-body`,
  deleteItem: `flex text-medium hover:bg-gray-600/5 transition-all duration-300 ease-in-out text-interactive-destructive cursor-pointer py-3 w-full items-center justify-center gap-x-2`,
}
