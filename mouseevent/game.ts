module game {


}

var humanContainer = new render.DisplayObjectContainer();
var humanContainerB = new render.DisplayObjectContainer();
humanContainerB.addChild(humanContainer);
var head = new render.Bitmap();
head.x=10;
head.y=0;
head.source = "head.png";
humanContainer.addChild(head);

var tbody = new render.Bitmap();
tbody.x=30;
tbody.y=130;
tbody.source = "body.png";
humanContainer.addChild(tbody);

var Lhand = new render.Bitmap();
Lhand.x=140;
Lhand.y=140;
Lhand.source = "Lhand.png";
humanContainer.addChild(Lhand);

var Rhand = new render.Bitmap();
Rhand.x=-10;
Rhand.y=140;
Rhand.source = "Rhand.png";
humanContainer.addChild(Rhand);

var Lleg = new render.Bitmap();
Lleg.x=100;
Lleg.y=210;
Lleg.source = "Lleg.png";
humanContainer.addChild(Lleg);

var Rleg = new render.Bitmap();
Rleg.x=50;
Rleg.y=210;
Rleg.source = "Rleg.png";
humanContainer.addChild(Rleg);

var renderCore = new render.RenderCore();
renderCore.start(humanContainerB, ["head.png","body.png","Rhand.png","Lhand.png","Rleg.png","Lleg.png"]);


class HumanBody extends Body {
    
    vr=Math.PI/7;


    onTicker(duringTime: number) {

        // this.x = 
        // this.y = 
        // this.rotation =
        this.x += this.vx*duringTime;
        this.rotation += this.vr*duringTime;


    }
}

humanContainer.x=200;
humanContainer.y=200;
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx=2;
body.vr=1;
ticker.start([body]);



var eventCore = new events.EventCore();
eventCore.init();


var clickhead = 0;
var clickleg = 0;
var headHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    alert (`点击位置为${localPoint.x},${localPoint.y}`);
    var chead = false;
    if(localPoint.x > 0 && localPoint.x < 100 && localPoint.y > 0 && localPoint.y < 100){
        chead = true;
        clickhead = 1;
    }
    

    return chead;
}
var legHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    alert (`点击位置为${localPoint.x},${localPoint.y}`);
    var cleg = false;
    if((localPoint.x > 0 && localPoint.x < 50 && localPoint.y > 0 && localPoint.y < 60 )||(localPoint.x > 50 && localPoint.x < 100 && localPoint.y > 0 && localPoint.y < 60)){
        cleg = true;
        clickleg = 1;

    }
    return cleg;
}

var headOnClick = () => {
    //alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
    if(headHitTest){
        if(legHitTest){
            body.vx = 2;
            body.vr = 1;
        }else{
            body.vx *=-1;
            body.vr *=-1;
        }
    }

    console.log(clickhead);
    console.log(clickleg);
    
}
var legOnClick = () => {
    //alert("clicked");
    
    if(legHitTest){
        body.vx = 0;
        body.vr = 0;
        body.rotation = 0;

    }

    console.log(clickhead);
    console.log(clickleg);
    
}
eventCore.register(Lleg,legHitTest,legOnClick);
eventCore.register(head,headHitTest,headOnClick);











