import React from "react";

function SongListRating({ clickItem, item }) {
  return (
    <li className="list-item" onClick={clickItem} value={item.rating}>
      {item.rating}
    </li>
  );
}

export default SongListRating;
