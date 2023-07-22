import React from "react"

interface Props {
  className?: string
}

export const CalendarBlank = ({ className }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 4.5C3 3.67157 3.67157 3 4.5 3H19.5C20.3284 3 21 3.67157 21 4.5V19.5C21 20.3284 20.3284 21 19.5 21H4.5C3.67157 21 3 20.3284 3 19.5V4.5ZM19.5 4.5H4.5V19.5H19.5V4.5Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 1.5C16.9142 1.5 17.25 1.83579 17.25 2.25V5.25C17.25 5.66421 16.9142 6 16.5 6C16.0858 6 15.75 5.66421 15.75 5.25V2.25C15.75 1.83579 16.0858 1.5 16.5 1.5Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 1.5C7.91421 1.5 8.25 1.83579 8.25 2.25V5.25C8.25 5.66421 7.91421 6 7.5 6C7.08579 6 6.75 5.66421 6.75 5.25V2.25C6.75 1.83579 7.08579 1.5 7.5 1.5Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 8.25C3 7.83579 3.33579 7.5 3.75 7.5H20.25C20.6642 7.5 21 7.83579 21 8.25C21 8.66421 20.6642 9 20.25 9H3.75C3.33579 9 3 8.66421 3 8.25Z"
        fill="currentColor"
      />
    </svg>
  )
}
