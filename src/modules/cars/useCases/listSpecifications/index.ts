import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationUseCase";

const specificationsRepository = SpecificationRepository.getInstace();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
    specificationsRepository
);
const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
);

export { listSpecificationsController };
