//Es ts cuando no regresa un componente de react
//Se grabará en el local storage si no existe y si existe lo borro
const toggleFavorite = (id: number) => { //Función para agregar a favoritos
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]'); //Es un arreglo de lo que se haya grabado
    if(favorites.includes(id)){
        favorites = favorites.filter(pokeId => pokeId !== id);
    }else{
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites)); //Representacion JSON en string

} 

const existInFavorites = (id: number): boolean => {
    if(typeof window === 'undefined') return false; //si se está haciendo del lado del servidor regresaré un false, resuelve error 500 de localStorage
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id); //Si incluye regresa un true y si no un false
}

const pokemons = () :number[] =>{
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default{
    toggleFavorite,
    existInFavorites,
    pokemons,
}