export const getData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok){
        return false;
    }
    return await response.json();
}