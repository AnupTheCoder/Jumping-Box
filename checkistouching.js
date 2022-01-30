function isTouching
(o1,movingRect){
  if(o1.x-movingRect.x<movingRect.width/2+o1.width/2&&
    o1.y-movingRect.y<movingRect.height/2+o1.height/2&&
    movingRect.x-o1.x<o1.width/2+movingRect.width/2&&
   movingRect.y-o1.y<o1.height/2+movingRect.height/2)
  {
   return true;
  }
  else{
    return false;
   
  }
}