export const buttonStyles = {
  soldOffTrue: `whitespace-nowrap tracking-wide mx-auto cursor-pointer active:scale-100 hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-destructive rounded-full flex items-center justify-center py-2 px-5 mt-2 w-fit`,
  soldOffFalse: `whitespace-nowrap tracking-wide mx-auto cursor-pointer active:scale-100 hover:scale-105 transition-all duration-300 ease-in-out text-white font-bold bg-interactive-primary rounded-full flex items-center justify-center py-2 px-5 mt-2 w-fit`,
}

export const imageStyles = {
  img: (soldOff: boolean) => {
    return `${
      soldOff ? "brightness-50" : "brightness-100"
    }  bg-cover select-none pointer-events-none`
  },
}

export const infoStyles = {
  wrapper: `flex flex-col items-center justify-center`,
  infomedPrice: `text-sm text-success-dark font-medium py-1`,
  uninformedPrice: `text-sm text-content-base font-medium py-1`,
  locationContainer: `flex items-center gap-x-1`,
  locationText: `text-content-base text-sm`,
}

export const titleStyles = {
  wrapper: `text-lg border-b h-[54px] border-dashed border-b-input-border pb-1 mb-1 flex items-center justify-center text-center cursor-default font-semibold leading-snug`,
  title: `line-clamp-2`,
}
