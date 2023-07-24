export const handleSubmitButtonsStyles = {
  wrapper: `w-full flex justify-end`,
  updateButton: `w-[223px] font-bold py-4 rounded-full active:scale-95 transition-all duration-300 ease-in-out bg-success-light text-content-title mt-8 ml-auto`,
  postButton: `w-[223px] font-bold py-4 rounded-full active:scale-95 transition-all duration-300 ease-in-out bg-interactive-primary text-white mt-8 ml-auto`,
}

export const inputFormStyles = {
  wrapper: (styles: string) => {
    return `${styles} w-full flex flex-col gap-y-2`
  },
  label: `text-content-base`,
  input: `p-3 border border-input-border rounded-xl`,
}

export const togglePrivacyStyles = {
  wrapper: `flex bg-layout-body items-center justify-center rounded-full w-fit p-1`,
  handleActive: ({
    currentPrivacy,
    itemPrivacy,
  }: {
    currentPrivacy: "public" | "private"
    itemPrivacy: "public" | "private"
  }) => {
    return `${
      currentPrivacy === itemPrivacy
        ? "text-white bg-interactive-primary"
        : "text-gray-500"
    } block py-2 px-6 cursor-pointer rounded-full text-center`
  },
}
