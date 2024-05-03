import NavNotificationContent from "./NotificationContent/NotificationContent"

function NavNotifications({ username }) {
  return (
    <>
      <div>
        <h4>Recently Received Notifications</h4>
      </div>
      <div>
        <NavNotificationContent username={username} />
      </div>
    </>
  )
}

export default NavNotifications
