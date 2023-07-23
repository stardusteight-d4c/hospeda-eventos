export const cardStyles = {
  wrapper: (styles: string, soldOff: boolean) => {
    return `${styles} ${
      soldOff ? "bg-gray-400/30" : "bg-white"
    } col-span-1 relative border mx-auto transition-all duration-300 ease-in-out border-input-border overflow-hidden min-h-[450px] md:min-h-[355px] md:max-h-[360px] max-w-[345px] rounded-xl shadow-sm shadow-black/20 w-full md:w-fit`
  },
  contentContainer: `p-2 w-full`,
  internalContainer: `absolute bottom-2 w-full inset-x-0`,
}

export const seeMoreStyles = {
  link: `w-full text-lg cursor-pointer font-medium hover:underline text-interactive-primary flex items-center justify-center mt-8`,
}
