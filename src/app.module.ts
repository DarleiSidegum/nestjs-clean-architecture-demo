import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';
import { LoggerModule } from './infra/services/logger/logger.module';
import { ExceptionsModule } from './infra/exceptions/exceptions.module';
import { BcryptModule } from './infra/services/bcrypt/bcrypt.module';
import { JwtModule } from './infra/services/jwt/jwt.module';

@Module({
  imports: [
    HttpModule, 
    DatabaseModule,
    LoggerModule,
    BcryptModule,
    JwtModule,
    ExceptionsModule,
  ]
})
export class AppModule {}
