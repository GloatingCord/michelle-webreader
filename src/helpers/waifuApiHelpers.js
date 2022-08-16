// Defining async function
export async function getapi(api_url) {
    
    // Storing response
    const response = await fetch(api_url);
    
    // Storing data in form of JSON
    const data = await response.json();
    console.log(data[0]);
    return data.images[0].url;
}