import { Input, InputGroup } from "rsuite"
import SearchIcon from "@rsuite/icons/Search"
import "rsuite/dist/rsuite.min.css"
import "./NavSearch.scss"
import { useState, useEffect } from "react"
import ApiProduct from "../../../../../Api/ApiProduct"

function NavSearch() {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])

  useEffect(() => {
    ApiProduct().then((data) => {
      setData(data)
    })
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <>
      {/* Using Library RSuite render Search Bar */}
      <InputGroup inside>
        <Input onChange={(value) => setSearch(value)} />
        <InputGroup.Button>
          <SearchIcon className='icon-search' onClick={handleSearch} />
        </InputGroup.Button>
      </InputGroup>
    </>
  )
}

export default NavSearch
