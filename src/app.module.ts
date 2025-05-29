import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CulturalAspectsModule } from './modules/cultural-aspects/aspect.module';
import { LanguagesModule } from './modules/languages/language.module';
import { OriginalPeoplesModule } from './modules/original-peoples/people.module';
import { RegionsModule } from './modules/regions/region.module';
import { TerminologiesModule } from './modules/terminologies/terminologies.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    CulturalAspectsModule,
    LanguagesModule,
    OriginalPeoplesModule,
    RegionsModule,
    TerminologiesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
