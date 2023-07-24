export const eventInformationStyles = {
  title: `text-2xl text-content-title font-bold`,
  divider: `w-full h-0 border-t border-t-layout-body my-8`
}

export const uploaderStyles = {
  wrapper: `flex items-center gap-2 mt-[18px]`,
  newCoverButton: `bg-gray-500 block w-fit whitespace-nowrap py-3 px-5 text-white font-medium rounded-full`,
  truncateTxt: `truncate w-[200px] lg:w-[1000px] text-content-base`,
  handleUploadButton: (uploadedFile: File | null) => {
    return `${
      uploadedFile ? 'bg-interactive-primary text-white' : 'bg-layout-body text-gray-500'
    } block w-fit whitespace-nowrap py-3 active:scale-95 transition-all duration-300 ease-in-out px-5 rounded-full`
  },
}