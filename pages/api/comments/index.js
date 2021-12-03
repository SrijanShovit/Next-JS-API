import { comments } from "../../../data/comments";

export default function handler(req, res) {

    //handling get requests
    if  (req.method === "GET") {
        res.status(200).json(comments)
    }

    //handling post requests
    else if (req.method === "POST") {
        //extract comment from request's body
        const comment = req.body.comment

        //making new comment 
        const newComment = {
            id:Date.now(),
            body:comment
        }

        //push it to array of comments
        comments.push(newComment)

        //send response
        res.status(201).json(newComment)
    }

    
}