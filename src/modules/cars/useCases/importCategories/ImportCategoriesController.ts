import { Request, Response } from "express";

import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
    constructor(private importCateforiesUseCase: ImportCategoriesUseCase) {}

    handle(req: Request, res: Response): Response {
        const { file } = req;
        this.importCateforiesUseCase.execute(file);
        return res.send();
    }
}

export { ImportCategoriesController };
