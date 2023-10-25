const PaginationData = (pairs, arr) => {
    if (!arr) return "Not array";
    let output = [];
    for (let i = 0; i < arr.length; i = i + pairs) {
      let sub = [];
      for (let j = i; j < i + pairs; j++) {
        if (arr[j]) sub.push(arr[j]);
      }
      output.push(sub);
    }
    return output || "Not catch all data";
  };
  
  export default PaginationData;