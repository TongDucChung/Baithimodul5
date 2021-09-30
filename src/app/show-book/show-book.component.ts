import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
books:Book[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data)=>{
      this.books=data;
    })
  }
  deleteBook(id:number){
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data)=>{
      alert("Xóa thành công ");
      this.getProduct()
    })
  }

}
