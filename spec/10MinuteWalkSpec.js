describe ("tenMinuteWalk", function(){
  it ("returns true when given 10 directions, equal amounts of N+S and E+W directions", function(){
    expect(tenMinuteWalk(['w', 's', 'e', 'e', 'n', 'n', 'e', 's', 'w', 'w'])).toEqual(true)
  })

  it ("returns false when given an array with a length less than 10", function(){
    expect(tenMinuteWalk(['n'])).toEqual(false)
  })
});
