import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {
  public post: any;
  private idPost: any;
  public comentario: any;
  public nombre: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PostService
  ) { }

  ngOnInit(): void {
    this.idPost = this.route.snapshot.paramMap.get('id');
    this.service.find(this.idPost)
      .subscribe(response => {
        this.post = response;
      }, err => {
        this.router.navigate(['/']);
      });
    console.log(this.idPost);
  }

  public enviar() {
    const data = {
      "comentario": this.comentario,
      "nombre": this.nombre
    };

    this.service.addComment(this.post.id, data)
    .subscribe(response => {
      this.ngOnInit();
    });
  }

}
