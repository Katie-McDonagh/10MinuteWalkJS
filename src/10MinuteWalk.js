function tenMinuteWalk(directions){
  if(directions.length === 10){

    var numOfNorth = 0;
    var numOfSouth = 0;
    var numOfWest = 0;
    var numOfEast = 0;

    for(var i=0;i<directions.length;i++){
      if(directions[i] === "n"){
       numOfNorth++;
      } else if(directions[i] === "s"){
      numOfSouth++;
     } else if(directions[i] === "w"){
       numOfWest++;
     } else{
       numOfEast++;
     }
    }
      if(numOfNorth === numOfSouth && numOfWest === numOfEast){
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }
