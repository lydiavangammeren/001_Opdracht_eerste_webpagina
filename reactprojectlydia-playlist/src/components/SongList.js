import React from "react";
import SongListTitle from "./SongListTitle";
import SongListWriter from "./SongListWriter";
import SongListAlbum from "./SongListAlbum";
import SongListRating from "./SongListRating";

class SongList extends React.Component {
  render() {
    const {
      items,
      handleClickItem,
      handleClickDelete,
      handleClickSort,
      handleClickSortAlphabetically,
      handleSelect,
      handleRatingSelection,
    } = this.props;
    const title = items
      ? items.map((item) => (
          <SongListTitle
            key={item.id}
            item={item}
            clickDelete={handleClickDelete}
            clickItem={handleClickItem}
          ></SongListTitle>
        ))
      : "";
    const writer = items
      ? items.map((item) => (
          <SongListWriter
            key={item.id}
            item={item}
            clickDelete={handleClickDelete}
            clickItem={handleClickItem}
          ></SongListWriter>
        ))
      : "";
    const album = items
      ? items.map((item) => (
          <SongListAlbum
            key={item.id}
            item={item}
            clickDelete={handleClickDelete}
            clickItem={handleClickItem}
          ></SongListAlbum>
        ))
      : "";
    const rating = items
      ? items.map((item) => (
          <SongListRating
            key={item.id}
            item={item}
            clickDelete={handleClickDelete}
            clickItem={handleClickItem}
          ></SongListRating>
        ))
      : "";
    return (
      <div>
        <table className="cinereousTable">
          <thead>
            <tr>
              <th>Liedje</th>
              <th>Tekstschrijver</th>
              <th>Album</th>
              <th>Cijfer</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>Liedje</td>
              <td>Tekstschrijver</td>
              <td>Album</td>
              <td>Cijfer</td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <td>{title}</td>
              <td>{writer}</td>
              <td>{album}</td>
              <td>{rating}</td>
            </tr>
          </tbody>
        </table>

        <button className="delete" onClick={handleClickDelete}>
          Delete alle liedjes
        </button>
        <button className="sortalbum" onClick={handleClickSort}>Sorteer op album</button>
        <button onClick={handleClickSortAlphabetically}>Sorteer op titel</button>
        <form>
          <label>
            <select className="selecttheme"value={"thema"} onChange={handleSelect}>
              <option value="">--Kies een thema--</option>
              <option value="vriendschap">vriendschap</option>
              <option value="dieren">dieren</option>
              <option value="verliefdheid">verliefdheid</option>
              <option value="geld">geld</option>
              <option value="reset">alle liedjes</option>
            </select>
          </label>
          <label>
            <select value={"cijfer"} onChange={handleRatingSelection}>
              <option value="">--Kies een cijfer--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="reset">alle cijfers</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SongList;
