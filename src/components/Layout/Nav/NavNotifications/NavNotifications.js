import NavNotificationContent from "./NavNotificationContent/NavNotificationContent"

function NavNotifications() {
  return (
    <>
      <div className='title-notification-container'>
        <h4>Recently Received Notifications</h4>
      </div>
      <div className='box-notification-container'>
        <NavNotificationContent />
      </div>
    </>
  )
}

export default NavNotifications
