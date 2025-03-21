/**
 * A flag.
 * Flags can be used to mark particular spots in a room.
 * Flags are visible to their owners only.
 *
 * @see {@link https://docs.screeps.com/api/#Flag}
 *
 * @class
 * @extends {RoomObject}
 */
Flag = function() { };

Flag.prototype =
{
    /**
     * Flag primary color. One of the COLOR_* constants.
     *
     * @see {@link https://docs.screeps.com/api/#Flag.color}
     *
     * @type {number}
     */
    color: 0,

    /**
     * A shorthand to Memory.flags[flag.name].
     * You can use it for quick access the flag's specific memory data object.
     *
     * @see {@link https://docs.screeps.com/api/#Flag.memory}
     *
     * @type {*}
     */
    memory: {},

    /**
     * Flag’s name.
     * You can choose the name while creating a new flag, and it cannot be changed later.
     * This name is a hash key to access the flag via the Game.flags object.
     *
     * @see {@link https://docs.screeps.com/api/#Flag.name}
     *
     * @type {string}
     */
    name: "",

    /**
     * Flag secondary color. One of the COLOR_* constants.
     *
     * @see {@link https://docs.screeps.com/api/#Flag.secondaryColor}
     *
     * @type {number}
     */
    secondaryColor: 0,

    /**
     * Remove the flag.
     *
     * @see {@link https://docs.screeps.com/api/#Flag.remove}
     *
     * @type {function}
     *
     * @return {number|OK}
     */
    remove: function() { },

    /**
     * Set new color of the flag.
     *
     * @see {@link https://docs.screeps.com/api/#Flag.setColor}
     *
     * @type {function}
     *
     * @param {string} color Primary color of the flag. One of the COLOR_* constants.
     * @param {string|undefined|null} [secondaryColor] Secondary color of the flag. One of the COLOR_* constants.
     *
     * @return {number|OK|ERR_INVALID_ARGS}
     */
    setColor: function(color, secondaryColor) { },

    /**
     * Set new position of the flag.
     *
     * @see {@link https://docs.screeps.com/api/#Flag.setPosition}
     *
     * @type {function}
     *
     * @param {number|RoomPosition|RoomObject} x The X position in the room.
     * @param {number} [y] The Y position in the room.
     *
     * @note Alternative function: setPosition(pos)
     * @param {object} pos Can be a RoomPosition object or any object containing RoomPosition.
     *
     * @return {number|OK|ERR_INVALID_TARGET}
     */
    setPosition: function(x, y) { }
};
