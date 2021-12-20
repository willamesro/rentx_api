import { Request, Response } from "express";

import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";

class ListSpecificationsController {
    constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}

    handle(req: Request, res: Response): Response {
        const all = this.listSpecificationsUseCase.execute();
        return res.json(all);
    }
}
export { ListSpecificationsController };
