import { Injectable } from '@nestjs/common';
import { IJwtService } from 'src/domain/adapters/jwt.interface';
import { UserModel } from 'src/domain/models/user';

@Injectable()
export class ResetJWTAuth {
    constructor(private readonly jwtService: IJwtService) {}

    async execute(user:UserModel): Promise<string> {
        const {
            email,
            id,
            name,
        } = user;

        const token = this.jwtService.createToken(
            {name, email, id},
            process.env.JWT_SECRET,
            '30d',
        );

        return token;
    }
}
