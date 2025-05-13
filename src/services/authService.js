export const login = async (authDetail) => {

    const accessToken = "tokenexample1234"


    setTimeout(() => {

        if(authDetail.password) {

            sessionStorage.setItem("token", JSON.stringify(accessToken))

            return authDetail 
        }
        
    }, 4000);


}

export const register =  async (authDetail) => {

    const accessToken = "tokenexample1234"

    setTimeout(() => {

        if(authDetail.password) {

            sessionStorage.setItem("token", JSON.stringify(accessToken))

            return authDetail 
        }
       
        
    }, 4000);

}



export const logout = async() => {

    setTimeout(() => {
        
        sessionStorage.removeItem

    }, 4000);
}