import { AddShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
// sfc + name
const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState("");
  // useState, initial state
  const handleSubmit = e => {
    e.preventDefault();
    console.log(title);
    addSong(title);
    setTitle("");
  };
  // why prevent?

  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name</label>
      <input type="text" required onChange={e => setTitle(e.target.value)} />
      <input type="submit" value="add song" />
    </form>
  );
};

export default NewSongForm;
