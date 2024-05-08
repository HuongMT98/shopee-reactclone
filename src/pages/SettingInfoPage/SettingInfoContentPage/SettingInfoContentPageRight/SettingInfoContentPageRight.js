function SettingInfoContentPageRight({ user }) {
  return (
    <>
      {user.map((item) => (
        <div key={item.id} className='settinginforight-wrap'>
          <div className='settinginforight-container'>
            <img src={item.image} alt='' className='settinginforight-img' />
            <div className='settinginforight-info'>
              <p className='settinginforight-infonametitle'>USER NAME</p>
              <p className='settinginforight-infoname'>{item.username}</p>
            </div>
            <div className='settinginforight-info'>
              <p className='settinginforight-infoname'>{item.email}</p>
            </div>
            <div className='settinginforight-info'>
              <p className='settinginforight-infoname'>{item.address}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SettingInfoContentPageRight
