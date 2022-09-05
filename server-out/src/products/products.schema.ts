import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Product extends Document {
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  createdAt: Date;

  readonly readOnlyDate: { name: string; content: string; time: Date };
}

export const ProductSchema = SchemaFactory.createForClass(Product);

ProductSchema.virtual('readOnlyDate').get(function (this: Product) {
  return {
    name: this.name,
    content: this.content,
    time: this.createdAt,
  };
});
