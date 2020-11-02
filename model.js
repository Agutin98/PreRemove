'use strict';

// Define schema
module.exports = (module) => {

	/**
	 * Schema
	 */
	module.schema = new global.database.mongodb.mongoose.Schema({
		id: { type: String },
		name: { type: String, required: true, unique: true },
		icon: { type: String },
		mapIcon: { type: String }
	}, {
		timestamps: true
	});

	module.schema.pre('remove', function(next) {
		global.helpers.database.preRemove(global.modules.subcategories.model, {category: this._id});
		next(); 
	})
};
