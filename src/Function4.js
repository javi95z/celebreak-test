import "./Function.css";
import db from "./db";
import { getFieldById } from "./utils";
const _ = require("lodash");

function Function4() {
  // INPUT 1 - Start date: Nov 5th, 2020 @ 11am
  const startDate = new Date(2020, 10, 5, 11, 0);
  // INPUT 2 - End date: Dec 25th, 2020 @ 11am
  const endDate = new Date(2020, 11, 25, 11, 0);
  // INPUT 3 - Array of fields
  const fields = [
    "5fdf3531b9045952f8c6e1ea",
    "5fddf4523fb9aff4fef2337b",
    "5fddf038b7f4ca7ea60a4818",
  ];

  // Field availability slots inside both the date range and array of fields
  const slotsInRange = db.availabilities.filter(
    (o) =>
      o.start_time > startDate.toISOString() &&
      o.start_time < endDate.toISOString() &&
      fields.includes(o.field_id)
  );
  // Games with field_id and start_time
  const games = _.map(db.games, (o) => _.pick(o, ["field_id", "start_time"]));
  // Get availability slots where no game was played
  const final = _.differenceWith(slotsInRange, games, _.isMatch);

  return (
    <div className="function">
      <h1>Function 4</h1>
      <p className="description">
        A function that returns the number of un-utilized Field Availability
        slots for a given set of fields for a given date range. That means any
        Field Availability slots that did/do not have a Game scheduled in that
        slot during the date range. (3 Inputs: start date, end date, array of
        field ids; output: integer count)
      </p>
      <p>
        <strong>{final.length}</strong> availability slots without a game
        scheduled between <strong>{startDate.toDateString()}</strong> and{" "}
        <strong>{endDate.toDateString()}</strong> in the following fields:{" "}
        <strong>{fields.map((o) => getFieldById(o).field_name).join(", ")}</strong>
      </p>
      <table className="table">
        <tbody>
          <tr>
            <th>Field ID</th>
            <th>Field</th>
            <th>Date</th>
          </tr>
          {final.map((o) => {
            const field = getFieldById(o.field_id);
            return (
              <tr key={o._id}>
                <td>{field._id}</td>
                <td>
                  {field.field_name} - {field.city} ({field.country})
                </td>
                <td>{new Date(o.start_time).toDateString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Function4;
