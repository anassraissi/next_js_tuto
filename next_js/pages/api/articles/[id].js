import { articles } from "@/data";
export default function handler(req,res){
    let resultat;

    for(let i=0;i<articles.length;i++){

    if(articles[i].id==req.query.id){
        resultat=articles[i];
    }
    
    }
    if(resultat){
        res.status(200).json(resultat)
    }
    else{
        res.status(404).json({message:`this id number ${req.query.id} is not found`})
    }
}