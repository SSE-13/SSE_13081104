module game {


}

var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
head.x=10;
head.y=10;
head.source = "head.png";
humanContainer.addChild(head);

var tbody = new render.Bitmap();
tbody.x=10;
tbody.y=10;
tbody.source = "body.png";
humanContainer.addChild(tbody);

var Lhand = new render.Bitmap();
Lhand.x=10;
Lhand.y=10;
Lhand.source = "Lhand.png";
humanContainer.addChild(Lhand);

var Rhand = new render.Bitmap();
Rhand.x=10;
Rhand.y=10;
Rhand.source = "Rhand.png";
humanContainer.addChild(Rhand);

var Lleg = new render.Bitmap();
Lleg.x=10;
Lleg.y=10;
Lleg.source = "Lleg.png";
humanContainer.addChild(Lleg);

var Rleg = new render.Bitmap();
Rleg.x=10;
Rleg.y=10;
Rleg.source = "Rleg.png";
humanContainer.addChild(Rleg);

var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png","body.png","Rhand.png","Lhand.png","Rleg.png","Lleg.png"]);


class HumanBody extends Body {


    onTicker(duringTime: number) {

        // this.x = 
        // this.y = 
        // this.rotation =
        this.x += this.vx*duringTime;
        this.rotation += Math.PI;

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx=2;
ticker.start([body]);











