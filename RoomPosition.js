/**
 * An object representing the specified position in the room.
 * Every RoomObject in the room contains RoomPosition as the pos property.
 * The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 *
 * @param {number} x X position in the room.
 * @param {number} y Y position in the room.
 * @param {string} roomName The room name.
 *
 * @class
 * @constructor
 *
 * @see {@link https://docs.screeps.com/api/#RoomPosition}
 */
RoomPosition = function(x, y, roomName) { };

RoomPosition.prototype =
{
    /**
     * The name of the room.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.roomName}
     *
     * @type {string}
     */
    roomName: "",

    /**
     * X position in the room.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.x}
     *
     * @type {number}
     */
    x: 0,

    /**
     * Y position in the room.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.y}
     *
     * @type {number}
     */
    y: 0,

    /**
     * Create new ConstructionSite at the specified location.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.createConstructionSite}
     *
     * @type {function}
     *
     * @param {string} structureType One of the STRUCTURE_* constants.
     * @param {string} [name] The name of the structure, for structures that support it (currently only spawns).
     *
     * @return {number|OK|ERR_INVALID_TARGET|ERR_FULL|ERR_INVALID_ARGS|ERR_RCL_NOT_ENOUGH}
     */
    createConstructionSite: function(structureType, name) { },

    /**
     * Create new Flag at the specified location.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.createFlag}
     *
     * @type {function}
     *
     * @param {string} [name] The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param {string} [color] The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param {string} [secondaryColor] The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     *
     * @return {string|number|ERR_NAME_EXISTS|ERR_INVALID_ARGS} The name of a new flag, or one of the following error codes: ERR_NAME_EXISTS, ERR_INVALID_ARGS.
     */
    createFlag: function(name, color, secondaryColor) { },

    /**
     * Find an object with the shortest path from the given position.
     * Uses A* search algorithm and Dijkstra's algorithm.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.findClosestByPath}
     *
     * @type {function}
     *
     * @param {number|Array<RoomPosition>|Array<RoomObject>} type See Room.find.
     * @param {object} [opts] An object containing pathfinding options (see Room.findPath)
     * @param {object|function|string} [opts.filter] Only the objects which pass the filter using the Lodash.filter method will be used.
     * @param {string} [opts.algorithm] One of the following constants:
                                        astar is faster when there are relatively few possible targets;
                                        dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.
                                        The default value is determined automatically using heuristics.
     * @param {boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is false.
     * @param {boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure. The default value is false.
     * @param {boolean} [opts.ignoreRoads] Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.
     * @param {function(string, CostMatrix)} [opts.costCallback] You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     * @param {Array} [opts.ignore] An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {Array} [opts.avoid] An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {number} [opts.maxOps] The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     * @param {boolean} [opts.serialize] If true, the result path will be serialized using Room.serializePath. The default is false.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     * @param {number} [opts.range] Find a path to a position in specified linear range of target. The default is 0.
     * @param {number} [opts.plainCost] Cost for walking on plain positions. The default is 1.
     * @param {number} [opts.swampCost] Cost for walking on swamp positions. The default is 5.

     * @note Alternative function: findClosestByPath: function(objects, opts)
     * @param {array} objects An array of room's objects or RoomPosition objects that the search should be executed against.

     * @return {object|null} The closest object if found, null otherwise.
     */
    findClosestByPath: function(type, opts) { },

    /**
     * Find an object with the shortest linear distance from the given position.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.findClosestByRange}
     *
     * @type {function}
     *
     * @param {number|Array<RoomPosition>|Array<RoomObject>} type See Room.find.
     * @param {object} [opts]
     * @param {object|function|string} [opts.filter] Only the objects which pass the filter using the Lodash.filter method will be used.
     *
     * @note Alterative function: findClosestByRange: function(objects, opts)
     * @param {array} objects An array of room's objects or RoomPosition objects that the search should be executed against.
     *
     * @return {object|null} The closest object if found, null otherwise.
     */
    findClosestByRange: function(type, opts) { },

    /**
     * Find all objects in the specified linear range.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.findInRange}
     *
     * @type {function}
     *
     * @param {number|Array<RoomPosition>|Array<RoomObject>} type See Room.find.
     * @param {number} range The range distance.
     * @param {object} [opts] See Room.find.
     *
     * @note Alternative function: findInRange(objects, range, opts)
     * @param {array} objects An array of room's objects or RoomPosition objects that the search should be executed against.
     *
     * @return {array} An array with the objects found.
     */
    findInRange: function(type, range, opts) { },

    /**
     * Find an optimal path to the specified position using A* search algorithm.
     * This method is a shorthand for Room.findPath.
     * If the target is in another room, then the corresponding exit will be used as a target.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.findPathTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     * @param {object} [opts] An object containing pathfinding options flags (see Room.findPath for more details).
     * @param {boolean} [opts.ignoreCreeps] Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default value is false.
     * @param {boolean} [opts.ignoreDestructibleStructures] Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure. The default value is false.
     * @param {boolean} [opts.ignoreRoads] Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the new PathFinder is enabled.
     * @param {function(string, CostMatrix)} [opts.costCallback] You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback, it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     * @param {Array} [opts.ignore] An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {Array} [opts.avoid] An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     * @param {number} [opts.maxOps] The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     * @param {number} [opts.heuristicWeight] Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying A* algorithm mechanics! The default value is 1.2.
     * @param {boolean} [opts.serialize] If true, the result path will be serialized using Room.serializePath. The default is false.
     * @param {number} [opts.maxRooms] The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     * @param {number} [opts.range] Find a path to a position in specified linear range of target. The default is 0.
     * @param {number} [opts.plainCost] Cost for walking on plain positions. The default is 1.
     * @param {number} [opts.swampCost] Cost for walking on swamp positions. The default is 5.
     *
     * @note Alternative function: findPathTo(target, opts)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {array} An array with path steps in the following format:
                         [
                            { x: 10, y: 5, dx: 1,  dy: 0, direction: RIGHT },
                            { x: 10, y: 6, dx: 0,  dy: 1, direction: BOTTOM },
                            { x: 9,  y: 7, dx: -1, dy: 1, direction: BOTTOM_LEFT },
                             ...
                         ]
     */
    findPathTo: function(x, y, opts) { },

    /**
     * Get linear direction to the specified position.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.getDirectionTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: getDirectionTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|TOP|TOP_RIGHT|RIGHT|BOTTOM_RIGHT|BOTTOM|BOTTOM_LEFT|LEFT|TOP_LEFT} A number representing one of the direction constants.
     */
    getDirectionTo: function(x, y) { },

    /**
     * Get linear range to the specified position.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.getRangeTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: getRangeTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number} A number of squares to the given position.
     */
    getRangeTo: function(x, y) { },

    /**
     * Check whether this position is in the given range of another position.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.inRangeTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     * @param {number} range The range distance.
     *
     *
     * @note Alternative function: inRangeTo(target, range)
     * @param {RoomPosition} target The target position.
     *
     * @return {boolean}
     */
    inRangeTo: function(x, y, range) { },

    /**
     * Check whether this position is the same as the specified position.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.isEqualTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: isEqualTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {boolean}
     */
    isEqualTo: function(x, y) { },

    /**
     * Check whether this position is on the adjacent square to the specified position.
     * The same as inRangeTo(target, 1)
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.isNearTo}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x X position in the room.
     * @param {number} [y] Y position in the room.
     *
     * @note Alternative function: isNearTo(target)
     * @param {object} target Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {boolean}
     */
    isNearTo: function(x, y) { },

    /**
     * Get the list of objects at the specified room position.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.look}
     *
     * @type {function}
     *
     * @return {Array<LookResultItem>} An array with objects at the specified position in the following format:
                         [
                            { type: 'creep', creep: {...} },
                            { type: 'structure', structure: {...} },
                            ...
                            { type: 'terrain', terrain: 'swamp' }
                         ]
     */
    look: function() { },

    /**
     * Get an object with the given type at the specified room position.
     *
     * @see {@link https://docs.screeps.com/api/#RoomPosition.lookFor}
     *
     * @type {function}
     *
     * @param {string} type One of the LOOK_* constants.
     *
     * @return {array} An array of objects of the given type at the specified position if found.
     */
    lookFor: function(type) { }
};

/**
 * @typedef {Object} LookResultItem
 * @property {'creep' | 'structure' | 'terrain'} type
 * @property {Creep} [creep]
 * @property {Structure} [structure]
 * @property {string} [terrain]
 */
