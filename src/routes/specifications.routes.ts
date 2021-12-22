import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";

const specificationsRoutes = Router();
const createSpecificationController = new CreateSpecificationController();
const listSpecificationsController = new ListSpecificationsController();
specificationsRoutes.post("/", createSpecificationController.handle);

specificationsRoutes.get("/", (req, res) => {
    listSpecificationsController.handle(req, res);
});

export { specificationsRoutes };
