import NotificationContent from "./NotificationContent/NotificationContent"

function Notifications() {
  const username = "Nguyen Van A"
  return (
    <>
      <div>
        <h4>Recently Received Notifications</h4>
      </div>
      <div>
        <NotificationContent username={username} />
      </div>
    </>
  )
}

export default Notifications
