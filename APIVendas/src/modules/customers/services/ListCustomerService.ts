import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomerRepository from "../typeorm/repositories/CustomersRepository";


class ListCustomerService {
  public async execute(): Promise<Customer[]>  {

    const customersRepository = getCustomRepository(CustomerRepository);
    
    const customers = await customersRepository.find();

    return customers;

  }
}

export default ListCustomerService