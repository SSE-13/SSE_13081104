var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
head.x = 10;
head.y = 10;
head.source = "head.png";
humanContainer.addChild(head);
var tbody = new render.Bitmap();
tbody.x = 10;
tbody.y = 10;
tbody.source = "body.png";
humanContainer.addChild(tbody);
var Lhand = new render.Bitmap();
Lhand.x = 10;
Lhand.y = 10;
Lhand.source = "Lhand.png";
humanContainer.addChild(Lhand);
var Rhand = new render.Bitmap();
Rhand.x = 10;
Rhand.y = 10;
Rhand.source = "Rhand.png";
humanContainer.addChild(Rhand);
var Lleg = new render.Bitmap();
Lleg.x = 10;
Lleg.y = 10;
Lleg.source = "Lleg.png";
humanContainer.addChild(Lleg);
var Rleg = new render.Bitmap();
Rleg.x = 10;
Rleg.y = 10;
Rleg.source = "Rleg.png";
humanContainer.addChild(Rleg);
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png", "body.png", "Rhand.png", "Lhand.png", "Rleg.png", "Lleg.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        // this.x = 
        // this.y = 
        // this.rotation =
        this.x += this.vx * duringTime;
        this.rotation += Math.PI;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 2;
ticker.start([body]);
//# sourceMappingURL=game.js.map