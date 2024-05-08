function SettingInfoContentPageMid({ user }) {
  return (
    <>
      {user.map((item) => (
        <div key={item.id} className='settingmidwrap'>
          <div className='settingtext'>
            <p>{item.username}</p>
          </div>
          <div>
            <input placeholder={item.name} />
          </div>
          <div>
            <p>{item.email}</p>
          </div>
          <div>
            <p>{item.phone}</p>
          </div>
          <div>
            <p>{item.gender}</p>
          </div>
          <div>
            <p>{item.birthday}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default SettingInfoContentPageMid
