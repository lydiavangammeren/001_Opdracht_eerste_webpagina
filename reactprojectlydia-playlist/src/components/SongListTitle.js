import React from "react"

function SongListTitle ({clickItem, item}) {


return (
<li  className="list-item" onClick={clickItem} value={item.title}>{item.title}  </li>
)
}

export default SongListTitle