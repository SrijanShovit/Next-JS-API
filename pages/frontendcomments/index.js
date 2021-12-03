import {useState} from 'react'



function CommentsPage(){
    const [comments, setcomments] = useState([]);

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setcomments(data)
    }
    return (
        <>
        <button onClick={fetchComments}>Load Comments</button>
        {
            comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        {comment.id} {comment.body}
                    </div>
                )
            })
        }
        </>
    )
}

export default CommentsPage