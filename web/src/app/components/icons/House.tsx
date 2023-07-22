interface Props {
  className?: string
}

export const House = ({ className }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9886 2.90502C11.265 2.65268 11.6257 2.51276 12 2.51276C12.3743 2.51276 12.735 2.65268 13.0114 2.90502L13.0125 2.90603L20.5107 9.71997L20.5212 9.72975C20.6694 9.86973 20.7881 10.0379 20.8703 10.2245C20.9526 10.4111 20.9966 10.6122 20.9999 10.816L21 10.8281V19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21H15C14.6022 21 14.2206 20.842 13.9393 20.5607C13.658 20.2794 13.5 19.8978 13.5 19.5V15H10.5V19.5C10.5 19.8978 10.342 20.2794 10.0607 20.5607C9.77936 20.842 9.39782 21 9 21H4.5C4.10218 21 3.72065 20.842 3.43934 20.5607C3.15804 20.2794 3 19.8978 3 19.5V10.8281L3.0001 10.816C3.0034 10.6122 3.04745 10.4111 3.12966 10.2245C3.21187 10.0379 3.33057 9.86973 3.47879 9.72975L3.48935 9.71997L10.9875 2.90603L10.9886 2.90502ZM4.50711 10.8219L11.9982 4.01444L12 4.01276L12.0018 4.01444L19.4929 10.8219C19.4949 10.8241 19.4965 10.8267 19.4977 10.8294C19.499 10.8322 19.4997 10.8353 19.5 10.8383V19.5H15V15C15 14.6022 14.842 14.2207 14.5607 13.9394C14.2794 13.6581 13.8978 13.5 13.5 13.5H10.5C10.1022 13.5 9.72065 13.6581 9.43934 13.9394C9.15804 14.2207 9 14.6022 9 15V19.5H4.5V10.8383C4.50026 10.8353 4.50103 10.8322 4.50229 10.8294C4.50349 10.8267 4.50512 10.8241 4.50711 10.8219Z"
        fill="#171D35"
        fill-opacity="0.64"
      />
    </svg>
  )
}
