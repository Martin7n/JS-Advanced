async function lockedProfile() {

    const mainUrlProfilesInfo = "http://localhost:3030/jsonstore/advanced/profiles/"
    const divProfile = document.getElementsByClassName('profile')[0];
    
    const users = await getProfiles(mainUrlProfilesInfo);

    Object.values(users).forEach(element => {
        profileConstructor(element)
        console.log(`username: ${element.username}, email: ${element.email}, age: ${element.age}`)
        
    });

    divProfile.remove()



    async function getProfiles(mainUrlProfilesInfo) {
        const response = await fetch(mainUrlProfilesInfo)
        if (!response.ok) {
            throw new Error(`Error: ${response.status} (${response.statusText})`)
        }
        return await response.json()
    }


    
    function profileConstructor(userData){
        const clone = divProfile.cloneNode(true);
        clone.querySelector('input[name="user1Username"]').value =  userData.username;
        clone.querySelector('input[name="user1Email"]').value =  userData.email;
        clone.querySelector('input[name="user1Age"]').value =  userData.age;
        clone.querySelector('input[name="user1Age"]').textContent =  userData.age;

        clone.getElementsByClassName("user1Username")[0].style.display = "none"
        
        const showBtn =  clone.getElementsByTagName('button')[0] 

        showBtn.addEventListener("click", (event) => {

            let checked = showBtn.parentElement.querySelector('input[type="radio"]:checked')
            let div = showBtn.parentElement.getElementsByClassName("user1Username")[0]


            if (checked.value === "lock"){
                console.log("LOCK")
            } else if(showBtn.textContent === "Show more"){
                div.style.display = "inline-block"
                showBtn.textContent = "Hide it"
                console.log(div)
                
            } else {
                div.style.display = "none"
                showBtn.textContent = "Show more"
            } 
        
        })
            
       
        main.appendChild(clone);

    }


}