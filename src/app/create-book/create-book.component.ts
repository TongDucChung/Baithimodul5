import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  formgroup!: FormGroup;

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    this.formgroup = new FormGroup({
      title: new FormControl('', Validators.minLength(1)),
      author: new FormControl('', Validators.minLength(1)),
      description: new FormControl(true)
    })
  }

  createBook() {
    this.http.post<Book>('http://localhost:3000/books', this.formgroup.value).subscribe((data => {
      alert("Tạo thành công");
      this.router.navigate([""]);
    }))
  }

}
