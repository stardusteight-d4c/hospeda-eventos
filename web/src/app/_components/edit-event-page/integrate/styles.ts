export const uploaderStyles = {
  wrapper: `flex items-center gap-2 mt-[18px]`,
  newCoverButton: `bg-gray-500 block w-fit whitespace-nowrap py-2 px-4 text-white font-medium rounded-full`,
  truncateTxt: `truncate w-[200px] lg:w-[1000px] text-content-base`,
  handleUploadButton: (uploadedFile: File | null) => {
    return `${
      uploadedFile ? 'bg-interactive-primary text-white' : 'bg-layout-body text-gray-500'
    } block w-fit whitespace-nowrap py-2 active:scale-95 transition-all duration-300 ease-in-out px-4 rounded-full`
  },
}