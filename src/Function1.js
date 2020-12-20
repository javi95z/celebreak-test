import "./Function.css";
import db from "./db";
import { lastGameOfPlayer } from "./utils";
const _ = require("lodash");

function Function1() {
  // INPUT 1 - Dec 30th, 2020 @ 11am
  const date = new Date(2020, 11, 2, 11, 0);

  // Get games since the given date
  const gamesSince = db.games.filter(
    (o) => o.start_time > date.toISOString() && o.is_finished
  );
  // Get players of those games in array, remove undefined
  const playersFromGames = gamesSince.map((o) => o.signups).filter(Boolean);
  // Flatten array and get unique players
  const uniquePlayers = _.uniq(_.flatten(playersFromGames));
  // Get players who didn't play on those games
  const final = _.filter(db.users, (o) => !_.includes(uniquePlayers, o._id));

  return (
    <div className="function">
      <h1>Function 1</h1>
      <p className="description">
        Players who haven't played any games since a given date. Example: all
        players that haven't played a game since November 18th. (1 Input: a
        date; returns: array of user ids)
      </p>
      <p>
        <strong>{final.length}</strong> players didn't play since{" "}
        <strong>{date.toDateString()}</strong>
      </p>
      <table className="table">
        <tbody>
          <tr>
            <th>Player ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Last game</th>
          </tr>
          {final.map((o) => {
            const lastGame = lastGameOfPlayer(o._id);
            return (
              <tr key={o._id}>
                <td>{o._id}</td>
                <td>{o.fullname}</td>
                <td>{o.email}</td>
                <td>{o.address}</td>
                <td>{new Date(lastGame.start_time).toDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Function1;
