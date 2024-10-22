import {EntityRepository, Repository, In} from 'typeorm';
import Product from '../entities/Product';

interface IFindProducts {
  id: string;
}

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.findOne({
      where: {
        name,
      }
    });
    return product
  }

  public async findAllByIds(products: IFindProducts[]): Promise<Product[]> {
      
    const productsIds = products.map(products => products.id);

    const existsProducts = await this.find({
      where: {
        id: In(productsIds),
      }
    })

    return existsProducts;

  } 
 
}