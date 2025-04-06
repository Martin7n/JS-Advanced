function attachEvents() {


    const basePosts = "http://localhost:3030/jsonstore/blog/posts/";
    const baseComments = "http://localhost:3030/jsonstore/blog/comments/";



    const loadBtn = document.getElementById("btnLoadPosts")
    const viewPostBtn = document.getElementById("btnViewPost");
    const selectPosts = document.getElementById('posts');

    const postTitle = document.getElementById("post-title")
    const postContent = document.getElementById("post-body")
    const ulElmnt = document.getElementById('post-comments');
    let selectedPostID;
    let urll;

    loadBtn.addEventListener("click", loadAllPosts)

    function loadAllPosts(){
        clearPrev()

    fetch(basePosts)
    .then(response => {
        if (!response.ok){throw new Error()
        } else {return response.json()}})
    .then(postData)
    .catch();

    }


    function postData(data){

      for (const key in data) {
        const element = data[key];
        console.log(element.body)

        const newOption = document.createElement('option');
        newOption.value = element.id;
        newOption.textContent = element.title;

        selectPosts.appendChild(newOption)
      };
        
    


      viewPostBtn.addEventListener("click", loadPost);

      function loadPost(event){
       
        selectedPostID = selectPosts.value;
        console.log(selectedPostID)
        let urlPost = basePosts+selectedPostID
     
        fetch(urlPost)
        .then(response => {if (!response.ok){throw new Error()} else {return response.json()}})
        .then(postDetails)
        .catch();

        fetch(baseComments)
        .then(response => {if (!response.ok){throw new Error()} else {return response.json()}})
        .then(commentDetails)
        .catch();

      }

    }

    function postDetails(pstData){
        postTitle.textContent = pstData.title
        postContent.textContent = pstData.body 
        console.log(pstData)
    };

    function clearPrev(){
        postTitle.textContent = "Post Details"
        postContent.textContent = ""
        ulElmnt.replaceChildren()
        
        selectPosts.replaceChildren()

    }
      
    function commentDetails(comData){

        ulElmnt.replaceChildren()
        
        for (const key in comData) {

            const element = comData[key];
           if (element.postId === selectedPostID){
            console.log(element.text)

            const li = document.createElement('li')
            li.textContent = element.text;
            ulElmnt.append(li)
                
            }
        }
    };

}
attachEvents();
