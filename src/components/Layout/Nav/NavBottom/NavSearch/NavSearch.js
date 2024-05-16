import { Input, InputGroup } from "rsuite"
import SearchIcon from "@rsuite/icons/Search"
import "rsuite/dist/rsuite.min.css"
import "./NavSearch.scss"
import { useState } from "react"

function NavSearch() {
  const [search, setSearch] = useState("")
  return (
    <>
      {/* Using Library RSuite render Search Bar */}
      <InputGroup inside>
        <Input value={search} onChange={(value) => setSearch(value)} />
        <InputGroup.Button>
          <SearchIcon className='icon-search' />
        </InputGroup.Button>
      </InputGroup>
    </>
  )
}

export default NavSearch
