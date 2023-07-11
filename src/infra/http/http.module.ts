import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { UsersController } from "./controllers/user.controller";
import { CreateUser } from "src/application/use-cases/user/create-user";

const USE_CASES_USER = [
    CreateUser,
    // UpdateUser,
    // DeleteUser
    // FindUser,
    // FindManyUser,
    // FindAllUser,
]

@Module({
    imports:[DatabaseModule],
    controllers:[UsersController],
    providers:[
        ...USE_CASES_USER,
    ]
})

export class HttpModule{}