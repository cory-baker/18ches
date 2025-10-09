// Script to create a hex coordinate map for the 18xx board game

// Extract coordinates from static-board.html
const hexCoordinates = [
    {x: 100, y: 273.21}, {x: 100, y: 619.62}, {x: 100, y: 1139.23},
    {x: 250, y: 186.6}, {x: 250, y: 359.81}, {x: 250, y: 533.01}, {x: 250, y: 706.22}, {x: 250, y: 879.42}, {x: 250, y: 1052.63}, {x: 250, y: 1225.83},
    {x: 400, y: 273.21}, {x: 400, y: 446.41}, {x: 400, y: 619.62}, {x: 400, y: 792.82}, {x: 400, y: 966.03}, {x: 400, y: 1139.23},
    {x: 550, y: 186.6}, {x: 550, y: 359.81}, {x: 550, y: 533.01}, {x: 550, y: 706.22}, {x: 550, y: 879.42}, {x: 550, y: 1052.63},
    {x: 700, y: 100}, {x: 700, y: 273.21}, {x: 700, y: 446.41}, {x: 700, y: 619.62}, {x: 700, y: 792.82}, {x: 700, y: 966.03}, {x: 700, y: 1139.23},
    {x: 850, y: 186.6}, {x: 850, y: 359.81}, {x: 850, y: 533.01}, {x: 850, y: 706.22}, {x: 850, y: 879.42}, {x: 850, y: 1052.63}, {x: 850, y: 1225.83},
    {x: 1000, y: 100}, {x: 1000, y: 273.21}, {x: 1000, y: 446.41}, {x: 1000, y: 619.62}, {x: 1000, y: 792.82}, {x: 1000, y: 966.03}, {x: 1000, y: 1139.23},
    {x: 1150, y: 186.6}, {x: 1150, y: 359.81}, {x: 1150, y: 533.01}, {x: 1150, y: 1052.63}, {x: 1150, y: 1225.83},
    {x: 1300, y: 273.21}, {x: 1300, y: 446.41}, {x: 1300, y: 619.62}, {x: 1300, y: 792.82},
    {x: 1450, y: 186.6}, {x: 1450, y: 359.81}, {x: 1450, y: 533.01}, {x: 1450, y: 706.22}, {x: 1450, y: 879.42},
    {x: 1600, y: 100}, {x: 1600, y: 273.21}, {x: 1600, y: 446.41}, {x: 1600, y: 619.62},
    {x: 1750, y: 186.6}, {x: 1750, y: 359.81}
];

// Grid system mapping
// Horizontal: A-L (A=0, B=1, ..., L=11)
// Vertical: 1-14 (1=1, 2=2, ..., 14=14)
//
// From the SVG:
// Horizontal axis starts at x=150 with 150px intervals: A=150, B=300, C=450, etc.
// Vertical axis starts at y=86.6 with ~86.6px intervals

const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

// Calculate column based on x coordinate
// x=150 offset + 150px intervals, but hex coordinates seem to be offset by -50px
function getColumn(x) {
    // Adjust for the hex offset and axis offset
    const adjustedX = x + 50; // hex coordinates appear to be 50px less than axis
    const colIndex = Math.round((adjustedX - 150) / 150);
    return columns[colIndex] || null;
}

// Calculate row based on y coordinate
// Starting at y=86.6 with ~86.6px intervals
function getRow(y) {
    const adjustedY = y - 37.5; // Account for the translate offset
    const rowNum = Math.round((adjustedY - 86.6) / 86.6) + 1;
    return rowNum >= 1 && rowNum <= 14 ? rowNum : null;
}

// Create the map
const hexMap = new Map();

hexCoordinates.forEach(coord => {
    const col = getColumn(coord.x);
    const row = getRow(coord.y);

    if (col && row) {
        const gridRef = `${col}${row}`;
        hexMap.set(gridRef, {x: coord.x, y: coord.y});
        console.log(`hexMap.set('${gridRef}', {x: ${coord.x}, y: ${coord.y}});`);
    } else {
        console.log(`Could not map coordinate {x: ${coord.x}, y: ${coord.y}} - col: ${col}, row: ${row}`);
    }
});

console.log('\n// Complete hex map:');
console.log('const hexMap = new Map();');
Array.from(hexMap.entries()).sort().forEach(([key, value]) => {
    console.log(`hexMap.set('${key}', {x: ${value.x}, y: ${value.y}});`);
});
