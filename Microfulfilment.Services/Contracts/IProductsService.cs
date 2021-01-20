using Microfulfilment.Models;
using System.Collections.Generic;

namespace Microfulfilment.Services.Contracts
{
    public interface IProductsService
    {
        Product GetProduct(int id);

        List<Product> GetProducts();

        Product AddProduct(Product product);

        Product UpdateProduct(int id, Product product);

        bool DeleteProduct(int id);
    }
}
