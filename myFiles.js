// ___.isTouching
function isTouching(object1,object2) {
     if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.width/2+object1.width/2&&object2.y-object1.y<object2.width/2+object1.width/2){
    //3rd for bottom 4th for top 1st right 2nd for left
    return true;

    }
    else{
    return false;
        
        
    }
        
  }

  // ___.bounceOff
function bounceOff(object1,object2){
//for a X velocity
if (object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2) {
object1.velocityX=object1.velocityX*(-1);
object2.velocityX=object2.velocityX*(-1);
}
//for a Y velocity
if (object1.y-object2.y<object2.width/2+object1.width/2&&object2.y-object1.y<object2.width/2+object1.width/2) {
object1.velocityY=object1.velocityY*(-1);
object2.velocityY=object2.velocityY*(-1);
}
}