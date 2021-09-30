// import { Component, OnInit } from '@angular/core';
// import {HttpClient} from "@angular/common/http";
// import {Book} from "../model/book";
// import {ActivatedRoute, Router} from "@angular/router";
//
// @Component({
//   selector: 'app-showdetail',
//   templateUrl: './showdetail.component.html',
//   styleUrls: ['./showdetail.component.css']
// })
// export class ShowdetailComponent implements OnInit {
//   books!:Book;
//   id!:number;
//   constructor(private http: HttpClient,private activerouter: ActivatedRoute,private router:Router) { }
//
//   ngOnInit(): void {
//     this.activerouter.params.subscribe((data=> this.id=data.name))
//
//     this.getProductDetail(this.id)
//   }
//   getProductDetail(id:number){
//     this.http.get<Book>(`http://localhost:3000/books,${id}`).subscribe((data)=>{
//       this.books=data;
//     })
//   }
// }
