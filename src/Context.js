
import React,{useContext,useEffect,useState} from 'react'
const AppContext= React.createContext()


function AppProvider({children}) {
const [goods,setGoods]=useState([])

  useEffect(() => {
      data()   
  }, [])

   const data = async()=>{
    let result = await fetch("http://localhost:8000/api/productlist")
       result= await result.json()
       setGoods(result)
       
   }
   



    return (
        
            <AppContext.Provider 
              value={{goods}}
            >
                 {children}
            </AppContext.Provider>
        
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export  {AppContext, AppProvider}
