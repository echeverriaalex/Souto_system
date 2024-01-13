export class Product{
    id?: number;
    image?: string;
    brand?: string | null | undefined;
    description?: string | null | undefined;
    code?: string | null | undefined;
    price?: number | null | undefined;
    createdAt?: string | null | undefined;
    updatedAt?: string | null | undefined;

    /*
    constructor(id:number, image:string, brand:string, 
        description:string, code:string, price:number, 
        createdAt:string, updatedAt:string){

        this.id = id;
        this.image = image;
        this.brand = brand;
        this.description = description;
        this.code = code;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    */
}