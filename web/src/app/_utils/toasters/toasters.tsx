import toast from "react-hot-toast"

export const error = (error: string) =>
  toast.custom(
    <div className="bg-white z-50 w-full text-center md:w-[500px] text-lg text-interactive-destructive shadow-md shadow-black/20 border-b-4 border-interactive-destructive py-3 px-4">
      {error}
    </div>
  )

export const success = (success: string) =>
  toast.custom(
    <div className="bg-white z-50 w-full text-center md:w-[500px] text-lg text-success-dark shadow-md shadow-black/20 border-b-4 border-success-dark py-3 px-4">
      {success}
    </div>
  )

export const info = (info: string) =>
  toast.custom(
    <div className="bg-white z-50 w-full text-center md:w-[500px] text-lg text-content-title shadow-md shadow-black/20 border-b-4 border-content-title py-3 px-4">
      {info}
    </div>
  )
