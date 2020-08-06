import { Request, Response } from 'express';

import axios from 'axios'

export default {
    async show(req: Request, res: Response) {
        try {
            const response = await (await axios.get('https://jsonplaceholder.typicode.com/users')).data
            res.send(response)
        } catch (error) {
            console.error(error)
        }
    }
}