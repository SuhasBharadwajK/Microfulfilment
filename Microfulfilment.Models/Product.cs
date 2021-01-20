namespace Microfulfilment.Models
{
    public class Product
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Barcode { get; set; }

        public decimal RetailPrice { get; set; }

        public decimal CostPrice { get; set; }

        public int Stock { get; set; }

        public int MinimumQuantity { get; set; }

        public int MaximumQuantity { get; set; }

        public decimal Weight { get; set; }

        public string WeightUnit { get; set; }
    }
}
