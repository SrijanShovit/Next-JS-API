export default function handler(req, res) {
    const params = req.query.params
    console.log(params)
    res.status(200).json(params)
}

//by default catch all routes are not meant for routes with no parameters -- 404 page returned
//so optional catch all routes can be used  -- after deleting index.js