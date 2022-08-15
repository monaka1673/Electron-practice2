// DOMContentLoadedイベント
// ➀WebブラウザがグローバルオブジェクトであるWindowオブジェクトを生成
// ➁WindowオブジェクトのプロパティとしてDocumentオブジェクトが生成される
// ➂DocumentオブジェクトはDOMツリーを読み込む
// ➃解析が終わるとDOMContentLoadedイベントが発火される
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('comment-form').onsubmit=()=>{
        const commentInput = document.getElementById('comment-input');
        if(commentInput.value===''){
            return false;
        }
        const newComment = document.createElement('li');
        newComment.innerText = commentInput.value;
        document.getElementById('comments').appendChild(newComment);
        commentInput.value='';
        return false;
    };
});