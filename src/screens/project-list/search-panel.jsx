import { useState, useEffect } from "react"

export const SearchPanel = () => {

    const [users, setUsers] = useState([])

    return (
        <form action="">
            <div>
                <input type="text" value={param.name} onChange={evt => setParam({
                    ...param,
                    name: evt.target.value
                })} />
                <select value={param.personId} onChange={evt => setParam({
                    ...param,
                    personId: evt.target.personId
                })} >
                    <option value="">负责人</option>
                </select>
            </div>
        </form>
    )
}
