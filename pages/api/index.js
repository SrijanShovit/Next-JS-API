export default function handler(req,res){
    // .json is a function to send json response
    res.status(200).json({name:'Home API Route'})
}