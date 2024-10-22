import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import Order from "../typeorm/entities/Order";
import { OrdersRepository } from "../typeorm/repositories/OrdersRepository";
import CustomerRepository from "@modules/customers/typeorm/repositories/CustomersRepository";
import { ProductRepository } from "@modules/products/typeorm/repositories/ProductsRepository";

interface IRequest {
  id: string;
}

class ShowOrderService {
  public async execute({ id }: IRequest): Promise<Order>  {

    const ordersRepository = getCustomRepository(OrdersRepository);
    
    const order = await ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Order not found.', 404);
    }

    return order;
    
  }

}

export default ShowOrderService