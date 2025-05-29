import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'tecendoSaberes', // Troque por um segredo forte (use variáveis de ambiente em produção)
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
