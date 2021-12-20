import { Specification } from "../../model/Specifications";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationsUseCase {
    constructor(private specificationsRepository: ISpecificationRepository) {}

    execute(): Specification[] {
        const specifications = this.specificationsRepository.list();
        return specifications;
    }
}
export { ListSpecificationsUseCase };
