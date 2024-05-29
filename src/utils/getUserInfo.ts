export const getUserHS  = async () : Promise<string> => {


   const score = await  localStorage.getItem('hs')
   console.log("user score",score)
   return score ?? "0"
}

export const setUserHs = async (score:number) => {
   await localStorage.setItem("hs",score.toString())
}