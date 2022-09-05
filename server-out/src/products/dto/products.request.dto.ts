import { IsNotEmpty, IsString } from 'class-validator';

export class ProductRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
