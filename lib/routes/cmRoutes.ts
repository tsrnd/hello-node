import { ContactController } from './../controllers/crmController';
import {Request, Response} from "express";

export class Routes {

    public contactController: ContactController = new ContactController();
    public routes(app): void {
        
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfully'
            })
        })
        
        //Contact
        app.route('/contact')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfully'
                })
            })
            // .post((req: Request, res: Response) => {
            //     res.status(200).send({
            //         message: 'POST request successfully'
            //     })
            // })
            // .get(this.contactController.getContact)
            .post(this.contactController.addNewContact);

        //Contact detail
        app.route('/contact/:contactId')
            // .get((req: Request, res: Response) => {
            //     res.status(200).send({
            //         message: req.url
            //     })
            // // })
            // .put((req: Request, res: Response) => {
            //     res.status(200).send({
            //         message: 'PUT request successfully'
            //     })
            // })
            // .delete((req: Request, res: Response) => {
            //     res.status(200).send({
            //         message: 'DELETE request successfully'
            //     })
            // })
            .get(this.contactController.getContactWithId)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);
    }
}