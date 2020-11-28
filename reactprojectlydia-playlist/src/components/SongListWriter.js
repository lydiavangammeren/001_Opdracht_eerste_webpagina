import React from "react"

function SongListWriter ({clickItem, item}) {


return (
<li  className="list-item" onClick={clickItem} value={item.writer}>{item.writer}  </li>
)
}

export default SongListWriter