

export  function personalFavoriteCheckResponseFunction(response){
    if (!response.ok) throw new Error("Error");
    return response.json()
}