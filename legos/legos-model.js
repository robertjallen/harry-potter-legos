const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("legos").select("image", "name", "description");
}

function findBy(filter) {
  // make sure to include the role information
  return db("legos").where(filter);
}

async function add(lego) {
  const [id] = await db("legos").insert(lego);

  return findById(id);
}

function findById(id) {
  return db("legos")
    .where({ id })
    .first();
}