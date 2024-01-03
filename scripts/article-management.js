const deleteArticleBtnElements = document.querySelectorAll('.delete-btn');

async function deleteArticle(event) {
    const btnElement = event.target;
    const articleId = btnElement.dataset.articleid;
    const csrfToken = btnElement.dataset.csrf;


    const response = await fetch('/admin/articles/'+ articleId + '?_csrf=' + csrfToken, {
        method:'DELETE'
    });

    if(!response.ok){
        alert('Something Went Wrong');
        return;
    }

    btnElement.parentElement.parentElement.parentElement.remove();
}

for (const deleteArticleBtnElement of deleteArticleBtnElements) {
    deleteArticleBtnElement.addEventListener('click',deleteArticle)
}