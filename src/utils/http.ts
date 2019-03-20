import { Response } from 'express'

class Http {
    static InternalServerResponse = (res: Response, data: any = { msg: 'Internal Server Error' }) => {
        res.status(500).end(JSON.stringify(data))
    }
    
    static BadRequestResponse = (res: Response, data: any = { msg: 'Bad Request' }) => {
        res.status(400).end(JSON.stringify(data))
    }
    
    static UnauthorizedResponse = (res: Response, data: any = { msg: 'Unauthorized' }) => {
        res.status(401).end(JSON.stringify(data))
    }
    
    static ForbiddenResponse = (res: Response, data: any = { msg: 'Forbidden' }) => {
        res.status(403).end(JSON.stringify(data))
    }
    
    static SuccessResponse = (res: Response, data: any) => {
        res.status(200).end(JSON.stringify(data))
    }
    
    static NotFoundResponse = (res: Response, data: any = { msg: 'Not Found' }) => {
        res.status(400).end(JSON.stringify(data))
    }
}

export default Http