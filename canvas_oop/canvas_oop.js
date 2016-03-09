var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 基类，负责处理x,y,rotation 等属性
 */
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.y = 0;
        //a = 0;
        //b = 0;
        this.rotation = 0;
    }
    DisplayObject.prototype.draw = function (context) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        //context.scale(this.a,this.b);
        this.render(context);
        context.restore();
    };
    DisplayObject.prototype.render = function (context) {
    };
    return DisplayObject;
}());
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.apply(this, arguments);
        this.width = 100;
        this.height = 100;
    }
    Bitmap.prototype.render = function (context) {
        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0, this.width, this.height);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    };
    return Bitmap;
}(DisplayObject));
var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.apply(this, arguments);
        this.width = 800;
        this.height = 600;
        this.color = '#FF0000';
    }
    Rect.prototype.render = function (context) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    };
    return Rect;
}(DisplayObject));
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
        this.text = 'pcq';
        this.font = "20px Arial";
        this.style = '#000000';
    }
    TextField.prototype.render = function (context) {
        //context.font = "20px Arial";
        //context.fillStyle = '#000000';
        //context.fillText('Blood', 0, 20);
        context.font = this.font;
        context.fillStyle = this.style;
        context.fillText(this.text, 0, 20);
    };
    return TextField;
}(DisplayObject));
function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject = renderQueue[i];
        displayObject.draw(context);
    }
}
var imagePool = {};
function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function (imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;
        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        function onLoadError() {
            alert('资源加载失败:' + imageUrl);
        }
    });
}
var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var rect = new Rect();
rect.width = 100;
rect.height = 30;
rect.color = '#00FF00';
var rect2 = new Rect();
rect2.width = 100;
rect2.height = 100;
rect2.x = 5;
rect2.y = 200;
//rect2.rotation = Math.PI / 8;
rect2.color = '#FFFFF0';
var text = new TextField();
text.x = 10;
text.text = 'Blood';
text.font = "20px Arial";
text.style = '#000000';
var text2 = new TextField();
text2.x = 10;
text2.y = 205;
text2.text = 'Chat Here';
text2.font = "20px Arial";
text2.style = '#000000';
var text3 = new TextField();
text3.x = 10;
text3.y = 235;
text3.text = 'Hello';
text3.font = "10px Arial";
text3.style = '#000000';
var text4 = new TextField();
text4.x = 300;
text4.y = 106;
text4.text = 'A Place';
text4.font = "5px Arial";
text4.style = '#000000';
var bitmap = new Bitmap();
//bitmap.x = 100;
//bitmap.y = 100;
//bitmap.a = 1.5;
//bitmap.b = 1.5;
bitmap.source = 'bg.jpg';
bitmap.width = 400;
bitmap.height = 300;
var bitmap2 = new Bitmap();
bitmap2.x = 295;
bitmap2.y = 5;
bitmap2.source = 'ground.jpg';
bitmap2.height = 100;
bitmap2.width = 100;
var bitmap3 = new Bitmap();
bitmap3.x = 200;
bitmap3.y = 150;
bitmap3.source = 'character.jpg';
bitmap3.height = 100;
bitmap3.width = 100;
//渲染队列
var renderQueue = [bitmap, rect, rect2, text, text2, bitmap2, text3, bitmap3, text4];
//资源加载列表
var imageList = ['bg.jpg', 'ground.jpg', 'character.jpg'];
//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function () {
    drawQueue(renderQueue);
});
