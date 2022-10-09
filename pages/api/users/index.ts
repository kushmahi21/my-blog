import dbconnect from "../../../utils/dbConnect";
import User from "../../../models/User";

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const {method} = req;
    
    dbconnect();

    if(method === "GET"){
        try{
           const users = await User.find();
           res.status(200).json(users);
           
        }catch(error){
            res.status(500).json(error);
        }
    }

    if(method === "POST"){
        try{
            const user = await User.create(req.body); 
            res.status(201).json(user);
            console.log(req.body)
        }catch(error){
            res.status(500).json(error);
        }

    }
  };
   