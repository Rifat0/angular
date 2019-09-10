import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Product';
  imageUrl = 'https://via.placeholder.com/150/0000FF/808080%20?Text=Digital.com';
  constructor() { }

  ngOnInit() {
  }

}
