"use strict";
const fs = require('fs');
function readFile() {
    var map_path = __dirname + "/map.json";
    var content = fs.readFileSync(map_path, "utf-8");
    var obj = JSON.parse(content);
    var mapData = obj.map;
    return mapData;
}
function writeFile() {
    var map_path = __dirname + "/map.json";
    var content = JSON.stringify({ map: mapData });
    fs.writeFileSync(map_path, content, "utf-8");
}
function createMapEditor() {
    var world = new editor.WorldMap();
    var rows = mapData.length;
    var cols = mapData[0].length;
    for (var col = 0; col < rows; col++) {
        for (var row = 0; row < cols; row++) {
            var tile = new editor.Tile();
            tile.setWalkable(mapData[row][col]);
            tile.x = col * editor.GRID_PIXEL_WIDTH;
            tile.y = row * editor.GRID_PIXEL_HEIGHT;
            tile.ownedCol = col;
            tile.ownedRow = row;
            tile.width = editor.GRID_PIXEL_WIDTH;
            tile.height = editor.GRID_PIXEL_HEIGHT;
            world.addChild(tile);
            eventCore.register(tile, events.displayObjectRectHitTest, onTileClick);
        }
    }
    return world;
}
function onTileClick(tile) {
    console.log(tile);
    var a = mapData[tile.ownedRow][tile.ownedCol];
    var walkable = 0;
    if (a == 0) {
        walkable = 1;
    }
    else {
        walkable = 0;
    }
    tile.setWalkable(walkable);
    mapData[tile.ownedRow][tile.ownedCol] = walkable;
    console.log(a);
    //writeFile();
}
var buttonOnClick = () => {
    if (events.displayObjectRectHitTest) {
        writeFile();
    }
};
function savechange() {
    var button = new render.DisplayObjectContainer();
    var shape = new render.Rect();
    shape.width = 50;
    shape.height = 30;
    shape.color = "#BBFFFF";
    var t = new render.TextField;
    t.text = "Save";
    button.addChild(shape);
    button.addChild(t);
    eventCore.register(button, events.displayObjectRectHitTest, buttonOnClick);
    return button;
}
var mapData = readFile();
var renderCore = new render.RenderCore();
var eventCore = new events.EventCore();
eventCore.init();
var editor = createMapEditor();
//renderCore.start(editor);
var save = savechange();
save.x = 200;
var c = new render.DisplayObjectContainer();
c.width = 500;
c.height = 500;
c.x = 0;
c.y = 0;
c.addChild(save);
c.addChild(editor);
renderCore.start(c);
