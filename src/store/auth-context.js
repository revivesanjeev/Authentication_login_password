import React,{useState,useEffect} from 'react';

const AuthContext = React.createContext({
    onLogout:()=>{},
    isLoggedIn:false,
     onLogIn:(email,password)=>{}
});


    export const AuthContextProvider=(props)=>{
        const [isLoggedIn,setIsLoggedIn]=useState(false);


       useEffect(() => {
         const storeUserLoggedInInformation =
           localStorage.getItem("isLoggedIn");
         if (storeUserLoggedInInformation === "1") {
           setIsLoggedIn(true);
         }
       }, []);


        const logoutHandler=()=> {
                localStorage.removeItem("isLoggedIn");
            setIsLoggedIn(false);
        };

      const loginHandler=()=> {
          localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
      };

        return <AuthContext.Provider
        value={{
            isLoggedIn:isLoggedIn,
            onLogout:logoutHandler,
            onLogIn:loginHandler, }}
        
        
        >{props.children}</AuthContext.Provider>
    }

    export default AuthContext;