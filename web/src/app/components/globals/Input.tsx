interface Props {
  label: string
  id: string
  placeholder: string
  type?: string
  mask?: string 
}

export const Input = ({ label, id, placeholder, type = "text", mask }: Props) => {
  return (
    <div className="w-full flex flex-col gap-y-2">
      <label htmlFor={id} className="text-content-base">
        {label}
      </label>
      <input
        id={id}
        type={type}
        data-mask={mask}
        className="p-3 border border-input-border rounded-xl"
        placeholder={placeholder}
      />
    </div>
  )
}
