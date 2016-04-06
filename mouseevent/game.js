var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
var humanContainerB = new render.DisplayObjectContainer();
humanContainerB.addChild(humanContainer);
var head = new render.Bitmap();
head.x = 10;
head.y = 0;
head.source = "head.png";
humanContainer.addChild(head);
var tbody = new render.Bitmap();
tbody.x = 30;
tbody.y = 130;
tbody.source = "body.png";
humanContainer.addChild(tbody);
var Lhand = new render.Bitmap();
Lhand.x = 140;
Lhand.y = 140;
Lhand.source = "Lhand.png";
humanContainer.addChild(Lhand);
var Rhand = new render.Bitmap();
Rhand.x = -10;
Rhand.y = 140;
Rhand.source = "Rhand.png";
humanContainer.addChild(Rhand);
var Lleg = new render.Bitmap();
Lleg.x = 100;
Lleg.y = 210;
Lleg.source = "Lleg.png";
humanContainer.addChild(Lleg);
var Rleg = new render.Bitmap();
Rleg.x = 50;
Rleg.y = 210;
Rleg.source = "Rleg.png";
humanContainer.addChild(Rleg);
var renderCore = new render.RenderCore();
renderCore.start(humanContainerB, ["head.png", "body.png", "Rhand.png", "Lhand.png", "Rleg.png", "Lleg.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
        this.vr = Math.PI / 7;
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        // this.x = 
        // this.y = 
        // this.rotation =
        this.x += this.vx * duringTime;
        this.rotation += this.vr * duringTime;
    };
    return HumanBody;
}(Body));
humanContainer.x = 200;
humanContainer.y = 200;
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 2;
body.vr = 1;
ticker.start([body]);
var eventCore = new events.EventCore();
//var eventCore2 = new events.EventCore();
eventCore.init();
//eventCore2.init();
var clickhead = 0;
var clickleg = 0;
var headHitTest = function (localPoint, displayObject) {
    alert("\u70B9\u51FB\u4F4D\u7F6E\u4E3A" + localPoint.x + "," + localPoint.y);
    if (localPoint.x > 0 && localPoint.x < 100 && localPoint.y > 0 && localPoint.y < 100) {
        clickhead = 1;
    }
    if ((localPoint.x > 50 && localPoint.x < 100 && localPoint.y > 210 && localPoint.y < 270) || (localPoint.x > 100 && localPoint.x < 150 && localPoint.y > 210 && localPoint.y < 270)) {
        clickleg = 1;
    }
    return true;
};
/*var legHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    alert (`点击位置为${localPoint.x},${localPoint.y}`);
   
    if((localPoint.x > 50 && localPoint.x < 100 && localPoint.y > 210 && localPoint.y < 270 )||(localPoint.x > 100 && localPoint.x < 150 && localPoint.y > 210 && localPoint.y < 270)){
        clickleg = 1;
    }
    return true;
}*/
var headOnClick = function () {
    alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
    /*if(clickhead==1){
        if(clickleg==1){
            body.vx = 2;
            body.vr = 1;
        }else{
            body.vx *=-1;
            body.vr *=-1;
        }
    }
    
    if(clickleg==1){
        if(clickhead==1){
            clickhead=1;
        }
        body.vx=0;
        body.vr=0;
        body.rotation=0;

    }*/
    if (clickhead == 1) {
        body.vx *= -1;
        body.vr *= -1;
        clickhead = 2;
    }
    if (clickleg == 1) {
        body.vx = 0;
        body.vr = 0;
        body.rotation = 0;
    }
    if (clickleg == 1 && clickhead == 2) {
        body.vx = 5;
        body.vr = Math.PI / 2;
        clickhead = 0;
        clickleg = 0;
    }
    console.log(clickhead);
    console.log(clickleg);
};
/*var legOnClick = () => {
    //alert("clicked");
    
    if(clickleg==1){
        body.vx=0;
        body.vr=0;
        body.rotation=0;
    }
    
    console.log(clickleg);
    
}*/
eventCore.register(head, headHitTest, headOnClick);
eventCore.register(Lleg, headHitTest, headOnClick);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxJQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3pELElBQUksZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7QUFDMUQsZUFBZSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQztBQUNWLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFDekIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU5QixJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyxLQUFLLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQztBQUNYLEtBQUssQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO0FBQ1osS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7QUFDMUIsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUvQixJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyxLQUFLLENBQUMsQ0FBQyxHQUFDLEdBQUcsQ0FBQztBQUNaLEtBQUssQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO0FBQ1osS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFDM0IsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUvQixJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyxLQUFLLENBQUMsQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDO0FBQ1osS0FBSyxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7QUFDWixLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUMzQixjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9CLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO0FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7QUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUN6QixjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTlCLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDO0FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFHLENBQUM7QUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUN6QixjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTlCLElBQUksVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBR3pHO0lBQXdCLDZCQUFJO0lBQTVCO1FBQXdCLDhCQUFJO1FBRXhCLE9BQUUsR0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztJQWFqQixDQUFDO0lBVkcsNEJBQVEsR0FBUixVQUFTLFVBQWtCO1FBRXZCLFlBQVk7UUFDWixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsR0FBQyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFDLFVBQVUsQ0FBQztJQUd4QyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBd0IsSUFBSSxHQWUzQjtBQUVELGNBQWMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO0FBQ3JCLGNBQWMsQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDO0FBQ3JCLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsSUFBSSxDQUFDLEVBQUUsR0FBQyxDQUFDLENBQUM7QUFDVixJQUFJLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQztBQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBSXJCLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3ZDLDBDQUEwQztBQUMxQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDakIsb0JBQW9CO0FBRXBCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDakIsSUFBSSxXQUFXLEdBQUcsVUFBQyxVQUFxQixFQUFDLGFBQWtDO0lBQ3ZFLEtBQUssQ0FBRSxtQ0FBUSxVQUFVLENBQUMsQ0FBQyxTQUFJLFVBQVUsQ0FBQyxDQUFHLENBQUMsQ0FBQztJQUUvQyxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUM7UUFDakYsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBRSxJQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDL0ssUUFBUSxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUE7QUFDRDs7Ozs7OztHQU9HO0FBRUgsSUFBSSxXQUFXLEdBQUc7SUFDZCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkIseUJBQXlCO0lBQ3pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FrQkc7SUFDSCxFQUFFLENBQUEsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNmLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2QsU0FBUyxHQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDZCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFFdEIsQ0FBQztJQUVGLEVBQUUsQ0FBQSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUcsU0FBUyxJQUFJLENBQUUsQ0FBQyxDQUFBLENBQUM7UUFDaEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFHQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFMUIsQ0FBQyxDQUFBO0FBQ0Q7Ozs7Ozs7Ozs7O0dBV0c7QUFFSCxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsV0FBVyxDQUFDLENBQUM7QUFDakQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDIn0=