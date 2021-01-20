using Microfulfilment.Models;
using Microfulfilment.Services.Contracts;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Microfulfilment.API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private IProductsService ProductsService { get; set; }

        public ProductsController(IProductsService productsService)
        {
            this.ProductsService = productsService;
        }

        [HttpGet("{id}")]
        public Product GetProduct(int id)
        {
            return this.ProductsService.GetProduct(id);
        }

        [HttpGet()]
        public List<Product> GetProducts()
        {
            return this.ProductsService.GetProducts();
        }

        [HttpPost()]
        public Product AddProduct(Product product)
        {
            return this.ProductsService.AddProduct(product);
        }

        [HttpPut("{id}")]
        public Product UpdateProduct(int id, Product product)
        {
            return this.ProductsService.UpdateProduct(id, product);
        }

        [HttpDelete("{id}")]
        public bool DeleteProduct(int id)
        {
            return this.ProductsService.DeleteProduct(id);
        }
    }
}
