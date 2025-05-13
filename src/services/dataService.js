const getSession = () => {

    const token = JSON.parse(sessionStorage.getItem("token"))
    return {token}
}

export const getUser = () => {
    const browserData = getSession()

    const user = {
        email: "shubham@example.com",
        name: "Shubham Sarda",
        id: 1
      }

      if(browserData.token) {

        setTimeout(() => {
            return user
        }, 4000);
      }
}

