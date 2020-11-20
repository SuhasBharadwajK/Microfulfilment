export class Product {
    public id: number;
    public name: string;
    public barcode: string;
    public retailPrice: number;
    public costPrice: number;
    public stock: number;
    public minimumQuantity: number;
    public maximumQuantity: number;

    constructor(args) {
        this.id = args.id;
        this.name = args.name;
        this.barcode = args.barcode;
        this.retailPrice = args.retailPrice;
        this.costPrice = args.costPrice;
        this.stock = args.stock;
        this.minimumQuantity = args.minimumQuantity;
        this.maximumQuantity = args.maximumQuantity;
    }
}