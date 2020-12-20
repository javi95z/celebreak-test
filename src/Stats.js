import db from "./db";

function Stats() {
  return (
    <div className="text-center">
      <span><strong> {db.games.length}</strong> games -</span>
      <span><strong> {db.fields.length}</strong> fields -</span>
      <span><strong> {db.users.length}</strong> users -</span>
      <span><strong> {db.reviews.length}</strong> game reviews </span>
      <span><strong> {db.availabilities.length}</strong> availability slots </span>
    </div>
  );
}

export default Stats;
