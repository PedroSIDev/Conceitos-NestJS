/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Pedro Silva',
    description: 'O nome completo do usuário',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'FullStack Developer',
    description: 'Cargo ou função',
  })
  @IsString()
  @IsNotEmpty()
  role: string;
}
