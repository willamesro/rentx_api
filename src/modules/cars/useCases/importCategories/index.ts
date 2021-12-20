import { CategoriesRespository } from "../../repositories/implementations/CategoriesRespository";
import { ImportCategoriesController } from "./ImportCategoriesController";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

const categoriesRepository = CategoriesRespository.getInstace();
const importCategoriesUseCase = new ImportCategoriesUseCase(
    categoriesRepository
);
const importCategoriesController = new ImportCategoriesController(
    importCategoriesUseCase
);

export { importCategoriesController };
