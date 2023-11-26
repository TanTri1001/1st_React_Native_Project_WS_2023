


const BASE_URL = 'https://dummyjson.com';
export async function load(path) {
    const response = await fetch(`${BASE_URL}${path}`);
    if(response.ok){
        const data = await response.json();
        return data
    }
    throw new Error ('Post cannot be found')
}