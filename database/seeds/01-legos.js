
exports.seed = async function(knex) {
	await knex("legos").truncate()
	await knex("legos").insert([
		{ image: 'https://bit.ly/3jo6hU7', name: 'dragon1', description: 'very nice1'},
	])
}
