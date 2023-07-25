import { Wrapper } from "./integrate/Wrapper"
import { HandlerRenderEventsOnClientSide } from "./HandlerRenderEventsOnClientSide"

export const EventTable = async () => {
  const events = await fetch(`${process.env.NEXT_SERVER_URL}/event`, {
    cache: "no-cache",
    next: {
      revalidate: 60 * 60, // revalidates this page every 1 hour
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.log(err)
      return null
    })

  return (
    <Wrapper events={events}>
      <HandlerRenderEventsOnClientSide />
    </Wrapper>
  )
}
