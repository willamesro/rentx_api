import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { hash } from "bcrypt";

interface IRequest {
    name: string;
    password: string;
    email: string;
    driver_license: string;
}

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, password, email, driver_license }: IRequest): Promise<void> {
        const passwordHash = await hash(password, 8)
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyExists){
           throw new Error("User already exists!");
        }
        
        await this.usersRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license
        });
    }

}
export { CreateUserUseCase }