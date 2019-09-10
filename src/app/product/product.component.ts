import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Product';
  imageUrl = 'https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com';
  isDisable = false;
  count = 0;
  name = 'Rifat';

  constructor() { }
  ngOnInit() {

  }

  counter(){
    this.count++;
    this.count === 10 ? this.isDisable = true : this.isDisable = false;
  }
  reset(){
    this.count = 0;
    this.isDisable = false;
  }
}
