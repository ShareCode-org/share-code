import React from "react";

const LeaderboardItem = ({
  Number,
  Username,
  postsNumber,
  followersNumber,
}) => (
  <tr>
    <td>{Number + 1}#</td>
    <td onClick={() => (window.location.href = `/profile/${Username}`)}>
      <span style={{ cursor: "pointer" }}>{Username}</span>
    </td>
    <td>{postsNumber}</td>
    <td>{followersNumber}</td>
  </tr>
);

export default LeaderboardItem;
