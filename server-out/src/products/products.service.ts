import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { timeStamp } from 'console';
import { Model } from 'mongoose';
import { ProductRequestDto } from './dto/products.request.dto';
import { Product } from './products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async getAllProduct() {
    const all = await this.productModel.find();
    const readonly = all.map((user) => user.readOnlyDate);
    return readonly;
  }

  async createProduct(body: ProductRequestDto) {
    const { name, content } = body;
    const product = await this.productModel.create({
      name,
      content,
    });

    return product.readOnlyDate;
  }
}
