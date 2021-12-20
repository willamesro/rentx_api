import { Specification } from "../../model/Specifications";
import {
    ISpecificationRepository,
    ICreateSpecificationDTO,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    // eslint-disable-next-line no-use-before-define
    private static INSTACE: SpecificationRepository;
    private constructor() {
        this.specifications = [];
    }
    public static getInstace() {
        if (!this.INSTACE) {
            this.INSTACE = new SpecificationRepository();
        }
        return this.INSTACE;
    }
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specification);
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }
    list(): Specification[] {
        return this.specifications;
    }
}
export { SpecificationRepository };
