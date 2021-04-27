const Trips = require('./Trips');
const Location = require('./Location');
const Traveller = require('./Traveller');

Traveller.hasMany(Location, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
})

Location.hasMany(Traveller, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
})

Traveller.hasMany(Trips, {
    foreignKey: 'traveller_id',
    onDelete: 'CASCADE',
})

module.exports = { Trips, Location, Traveller }