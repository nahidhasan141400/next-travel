
const Main = (str)=>{
  if(!str){
    return ""
  }
  if(str.indexOf("'") == -1){
    return str
  }
  let arr = str.split("'");

  let back = arr.reduce((a,b)=>{
    
      return a + "&#39;" +b
    },"");

    return back.slice(5);
}

export default Main;
// exports.Module = Main;

// export const newFormate =(str)=>{
//   function escapeQuotes(str) {
//     return str.replace(/(["'])/g, "\\$1");
//   }
  
  
//  escapeQuotes(input);
// }