
const Main = (str)=>{
    let arr = str.split("'");
  // console.log(arr)

    let back = arr.reduce((a,b)=>{
      
        return a + "&#39;" +b
      },"");

      return back.slice(5);
}

console.log(Main("let"))