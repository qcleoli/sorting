/*
    Will check if the bubbleSort(array) function can handle an empty array.
*/

describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  //single item test
  it('handles single item array', function(){
    expect(bubbleSort([2])).toEqual([2]);
  });
  //test 5 items
  it('handles multiple item array', function(){
    expect(bubbleSort([2, 10, 56, 7, 14])).toEqual([2, 7, 10, 14, 56]);
  });

  it('right number of swaps', function(){
    spyOn(window, 'swap').and.callThrough();
    expect(bubbleSort([2, 10, 56, 7, 14]));
    expect(swap.calls.count()).toEqual(3);
  })
  
});

