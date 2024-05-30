import { Select } from "@chakra-ui/react"

function SettingInfoContentPageMid({ user }) {
  return (
    <>
      {user.map((item) => (
        <div key={item.id} className='settingmidwrap'>
          <div className='settingtext'>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              {item.username}
            </div>
          </div>
          <div>
            <input placeholder={item.name} />
          </div>
          <div>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              {item.email}
            </div>
          </div>
          <div>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              {item.phone}
            </div>
          </div>
          <div>
            <Select placeholder={item.gender}>
              <option value='option1'>Female</option>
              <option value='option2'>Male</option>
              <option value='option3'>Orther Gender</option>
            </Select>
          </div>
          <div>
            <div contentEditable={true} suppressContentEditableWarning={true}>
              {item.birthday}
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => console.log("Save Edit")}>Save Edit</button>
    </>
  )
}

export default SettingInfoContentPageMid
