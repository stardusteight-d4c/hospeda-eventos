"use client"

import { ChangeEvent, Fragment } from "react"
import { useFormDataContext } from "@/app/_context/FormContextProvider"
import { uploaderStyles as css } from "./styles"

export const Uploader = () => {
  const { formData, setFormData } = useFormDataContext()

  function onClickUpload(): void {
    const inputFile = document.getElementById("file-input")!
    const clickEvent = new MouseEvent("click", { bubbles: true })
    inputFile.dispatchEvent(clickEvent)
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>): void {
    const input = event.target as HTMLInputElement
    const files = input.files as FileList
    const maxFileSize = 3 * 1024 * 1024 // 3MB
    const file = files[0]
    if (file && file.size > maxFileSize) {
      alert("The selected file is larger than 3MB!")
      input.value = ""
    } else {
      const reader = new FileReader()
      setFormData((prevState) => ({
        ...prevState,
        uploadedFile: file,
      }))
      reader.readAsDataURL(file)
      reader.onload = () => {
        const base64 = reader.result
        setFormData((prevState) => ({
          ...prevState,
          coverImage: String(base64),
        }))
      }
    }
  }

  return (
    <Fragment>
      <div className={css.wrapper}>
        {formData.selectedToEdit && !formData.uploadedFile ? (
          <Fragment>
            <button
              type="button"
              onClick={onClickUpload}
              className={css.newCoverButton}
            >
              New cover image
            </button>
            <span className={css.truncateTxt}>
              {formData.selectedToEdit.coverImage}
            </span>
          </Fragment>
        ) : (
          <Fragment>
            <button
              type="button"
              onClick={onClickUpload}
              className={css.handleUploadButton(formData.uploadedFile)}
            >
              {formData.uploadedFile ? "Thumbnail enviada" : "Enviar thumbnail"}
            </button>
            <span className={css.truncateTxt}>
              {formData.uploadedFile && formData.uploadedFile.name}
            </span>
          </Fragment>
        )}
      </div>
      <input
        type="file"
        id="file-input"
        onChange={(e) => onFileChange(e)}
        className="hidden"
        accept="image/png, image/jpeg"
      />
    </Fragment>
  )
}
