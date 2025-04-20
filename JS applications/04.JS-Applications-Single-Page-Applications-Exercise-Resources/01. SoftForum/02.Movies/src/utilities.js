

export  function personalFavoriteCheckResponseFunction(response){
    if (!response.ok) throw new Error("Error");
    return response.json()
};


export function preventDefaultOnLinks(...elements) {
    elements.forEach(el => {
        if (!el) return;

        if (el instanceof HTMLAnchorElement) {
            el.addEventListener('click', e => e.preventDefault());
        } else if (el instanceof Element) {
            const links = el.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', e => e.preventDefault());
                console.log(`prevented -> ${link}`)
            });
        }
    });
}




export function clearLoginForm() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    document.getElementById('repeatPassword').value = "";

}


// export function preventDefaultOfElements(...args){


//     [...args].forEach(
//         el => {el.addEventListener('click', e => {e.preventDefault()})}
//     );

// };


// export function preventDefaultOnLinks(...links) {
//     links.forEach(link => {
//         if (link instanceof HTMLAnchorElement) {
//             link.addEventListener('click', e => e.preventDefault());
//         }
//     });
// }