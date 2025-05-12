export async function getProductList (searchTerm) {
  const api = import.meta.env.VITE_APP_DB_SERVER;

  const response = await fetch(`${api}/products?name_like=${searchTerm ? searchTerm : ""}`);
  console.log(response)

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status
    };
  }

    const data = await response.json()

    console.log(data)

    return data
};


export const getProduct = async (id) => {
    const api = import.meta.env.VITE_APP_DB_SERVER;
    
    const response = await fetch(`${api}/products/${id}`);
    
    if (!response.ok) {
        throw {
            message: response.statusText,
            status: response.status,
        };
    }
    
    const data =await response.json()

    return  data
};
export const getFeaturedList = async (searchTerm) => {
  const api = import.meta.env.VITE_APP_DB_SERVER;

  const response = await fetch(`${api}/featured_products`);

  if (!response.ok) {
    throw {
      message: response.statusText,
      status: response.status,
    };
  }
  
  const data = await response.json()

  console.log(data)

  return data
};


