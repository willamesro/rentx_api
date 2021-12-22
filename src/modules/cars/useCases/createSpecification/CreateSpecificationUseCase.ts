import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
        ) { }

   async execute({ name, description }: IRequest): Promise<void> {
        const speficationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (speficationAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationRepository.create({ name, description });
    }
}
export { CreateSpecificationUseCase };
