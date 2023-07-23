import { DesktopSidebar } from "./integrate/DesktopSidebar"
import { MobileSidebar } from "./integrate/MobileSidebar"

export const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  )
}
