import React from "react"

function SongListAlbum ({clickItem, item}) {


return (
<li  className="list-item" onClick={clickItem} value={item.album}>{item.album}  </li>
)
}

export default SongListAlbum