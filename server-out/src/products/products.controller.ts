import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRequestDto } from './dto/products.request.dto';
import { ProductsService } from './products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProduct() {
    return this.productsService.getAllProduct();
  }

  @Post()
  async createProduct(@Body() body: ProductRequestDto) {
    return await this.productsService.createProduct(body);
  }
}
