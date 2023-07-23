interface Props {
  title: string
}

export const PageTitle = ({ title }: Props) => {
  return (
    <h1 className="text-content-title leading-[37.5px] text-[32px] font-bold">
      {title}
    </h1>
  )
}
