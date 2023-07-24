export const eventInformationStyles = {
  title: `text-2xl text-content-title font-bold`,
  divider: `w-full h-0 border-t border-t-layout-body my-8`,
}

export const uploaderStyles = {
  wrapper: `flex items-center gap-2 mt-[18px]`,
  newCoverButton: `bg-gray-500 block w-fit whitespace-nowrap py-3 px-5 text-white font-medium rounded-full`,
  truncateTxt: `truncate w-[200px] lg:w-[1000px] text-content-base`,
  handleUploadButton: (uploadedFile: File | null) => {
    return `${
      uploadedFile
        ? "bg-interactive-primary text-white"
        : "bg-layout-body text-gray-500"
    } block w-fit whitespace-nowrap py-3 active:scale-95 transition-all duration-300 ease-in-out px-5 rounded-full`
  },
}

export const privacyFieldStyles = {
  wrapper: `w-full mt-[18px] flex flex-col gap-y-2`,
  label: `text-content-base`,
}

export const descriptionFieldStyles = {
  wrapper: `w-full mt-[18px] flex flex-col gap-y-2`,
  label: `text-content-base`,
  textarea: `p-3 w-full text-content-title min-h-[108px] max-h-[108px] resize-none outline-none border border-input-border rounded-b-xl`,
}

export const richTextHeaderStyles = {
  wrapper: `bg-interactive-secundary border border-input-border p-3 flex items-center justify-between rounded-t-xl`,
  unorderedList: `flex items-center gap-x-3`,
  listItem: `list-none cursor-pointer p-1 rounded-md hover:bg-layout-body`,
}
