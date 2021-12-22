import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationsRepository: ISpecificationRepository) {}

    async execute(): Promise<Specification[]> {
        const specification = await this.specificationsRepository.list();
        return specification;
    }
}
export { ListSpecificationsUseCase };
