import { Wrapper } from "./integrate/Wrapper"
import { HandlerRenderEventsOnClientSide } from "./HandlerRenderEventsOnClientSide"

export const EventTable = async () => {
  const events = await fetch(`${process.env.NEXT_SERVER_URL}/event`, {
    next: {
      revalidate: 60,
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err)
      return null
    })

  return (
    <Wrapper serverEvents={events}>
      <HandlerRenderEventsOnClientSide />
    </Wrapper>
  )
}
