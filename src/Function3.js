import "./Function.css";
import db from "./db";
import { getUserById } from "./utils";
const _ = require("lodash");

function Function3() {
  // INPUT 1 - Last 4 games
  const lastGames = 4;
  // INPUT 2 - Avg 3.5 stars
  const avgStars = 3.5;

  // Get reviews grouped by user
  const reviews = _.groupBy(db.reviews, "user_id");
  // Get reviews of last provided number of games
  const lastReviews = Object.entries(reviews).map((o) =>
    o[1].splice(-lastGames)
  );

  // Get average rating of the collected games
  // Include in final array if it's below  provided number
  let final = [];
  _.forEach(lastReviews, (o) => {
    const avg = (_.sumBy(o, (g) => g.rating) / o.length).toFixed(2);
    if (avg < avgStars) final.push({ ...getUserById(o[0].user_id), average: avg });
  });

  return (
    <div className="function">
      <h1>Function 3</h1>
      <p className="description">
        Players that have given an average Game Review rating of below x/5 stars
        for their previous x games played. For example: all players that have
        given an average rating below 3.2 for their last 5 games. (2 Inputs: avg
        star rating, num past games; returns: array of user ids)
      </p>
      <p>
        <strong>{final.length}</strong> players gave an average review below{" "}
        <strong>{avgStars}</strong> on their last <strong>{lastGames}</strong>{" "}
        games.
      </p>
      <table className="table">
        <tbody>
          <tr>
            <th>Player ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Average</th>
          </tr>
          {final.map((o) => {
            return (
              <tr key={o._id}>
                <td>{o._id}</td>
                <td>{o.fullname}</td>
                <td>{o.email}</td>
                <td>{o.address}</td>
                <td>{o.average}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Function3;
