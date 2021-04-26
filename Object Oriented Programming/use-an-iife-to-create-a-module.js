
let funModule=(function (){
  return{
   isCuteMixin:function(){
     obj.isCute = function() {
      return true;
      }
    },
  singMixin:function() {
     obj.sing = function() {
    console.log("Singing to an awesome tune");
      }
    }
  }
})()