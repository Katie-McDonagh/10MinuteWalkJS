function tenMinuteWalk(directions){
  if(directions.length === 10){

    var numOfNorth = 0;
    var numOfSouth = 0;

    for(var i=0;i<directions.length;i++){
      if(directions[i] === "n"){
       numOfNorth++;
      } else if(directions[i] === "s"){
      numOfSouth++;
     }
    }
      if(numOfNorth === numOfSouth){
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }
