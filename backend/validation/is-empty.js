// ./validation/is-empty.js -t3:16 -e3:16 -d3:16
const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
}
module.exports = isEmpty;