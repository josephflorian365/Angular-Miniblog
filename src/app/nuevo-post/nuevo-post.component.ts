import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  public nombre: any;
  public post: any;
  public descripcion: any;

  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  public enviar() {
    const post = {
      "nombre": this.nombre,
      "texto": this.post,
      "descripcion": this.descripcion
    };
    this.postService.save(post)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/']);
      });
  }

}
