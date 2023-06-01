function main(str,index){
    if(str.length <= index){
        return str
    }
   return str.slice(0,index - 5).concat(" ... ") + str.slice(str.length - 4)
}


export default main;