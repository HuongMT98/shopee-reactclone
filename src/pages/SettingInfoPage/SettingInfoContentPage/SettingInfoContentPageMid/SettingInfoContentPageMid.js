import { Select } from "@chakra-ui/react"

function SettingInfoContentPageMid({ user }) {
  return (
    <>
      {user.map((item) => (
        <div key={item.id} className='settingmidwrap'>
          <div className='settingtext'>
            <p contentEditable>{item.username}</p>
          </div>
          <div>
            <input placeholder={item.name} />
          </div>
          <div>
            <p contentEditable>{item.email}</p>
          </div>
          <div>
            <p contentEditable>{item.phone}</p>
          </div>
          <div>
            <p>
              <Select placeholder={item.gender}>
                <option value='option1'>Female</option>
                <option value='option2'>Male</option>
                <option value='option3'>Orther Gender</option>
              </Select>
            </p>
          </div>
          <div>
            <p contentEditable>{item.birthday}</p>
          </div>
        </div>
      ))}
      <button onClick={() => console.log("Save Edit")}>Save Edit</button>
    </>
  )
}

export default SettingInfoContentPageMid
