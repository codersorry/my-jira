import { useEffect } from "react"

import { SearchPanel } from "./search-panel"
import { List } from "./list"

export const index = () =>   {

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('').then(async response => {
            if(response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    return (
        <div>
            <SearchPanel />
            <List />
        </div>
    )
}
