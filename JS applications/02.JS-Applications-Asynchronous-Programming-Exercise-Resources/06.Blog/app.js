function attachEvents() {


    const basePosts = "http://localhost:3030/jsonstore/blog/posts";
    const baseComments = "http://localhost:3030/jsonstore/blog/comments";


    const loadBtn = document.getElementById("btnLoadPosts")
    const viewPostBtn = document.getElementById("btnViewPost");


    fetch(basePosts)
    .then(response => {
        if (!response.ok){throw new Error()
        } else {return response.json()}})
    .then(postData)
    .catch();

    function postData(data){

      for (const key in data) {
        const element = data[key];
        console.log(element.body)
      }
        
   
        
    
    }
    
}

attachEvents();