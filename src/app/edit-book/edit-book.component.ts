import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Book} from "../model/book";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
formGroup:FormGroup=new FormGroup({
  title: new FormControl(),
  author: new FormControl(),
  description: new FormControl()
})
id!:number;

  constructor(private http:HttpClient,private activeRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((data)=>{
      this.id=+data.get('id')!;
      this.showEdit(this.id)});
  }
  saveBook(){
    this.router.navigate([""])
  }
showEdit(id:number){
  console.log(id)
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe(data=>{
      this.formGroup=new FormGroup({
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description)
      })
    })
}
}
