import { Input, InputGroup } from "rsuite"
import SearchIcon from "@rsuite/icons/Search"
import "rsuite/dist/rsuite.min.css"
import "./NavSearch.scss"

function NavSearch() {
  return (
    <>
      {/* Using Library RSuite render Search Bar */}
      <InputGroup inside>
        <Input />
        <InputGroup.Button>
          <SearchIcon className='icon-search' />
        </InputGroup.Button>
      </InputGroup>
    </>
  )
}

export default NavSearch
