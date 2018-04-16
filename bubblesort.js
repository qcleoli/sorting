/*

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
});

*/

function bubbleSort(arr){
    // initial arr: [20, 12, 3]
    // after first for-loop: [12, 20, 3], [12, 3, 20], 
    // after second for-loop: [3,12,20]
    // after third for-loop: [3,12,20]
    do{
      var count = 0;
      for(var i = 1; i < arr.length; i++){
            var temp;    
            if(arr[i] < arr[i - 1]){
                count++;
                temp = arr[i-1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }

        }
    }while(count > 0)
    
    return arr;
}