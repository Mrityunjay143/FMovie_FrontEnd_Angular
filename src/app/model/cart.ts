import { Movies } from './movies';
export class Cart{
id:any;
name: any;
price:any;
imageUrl: any;
quantity:any;
constructor(movie:Movies) {
    this.id = movie.id;
    this.name = movie.name;
    this.imageUrl = movie.imageUrl;
    this.price = movie.price;

    this.quantity = 1;
}
}