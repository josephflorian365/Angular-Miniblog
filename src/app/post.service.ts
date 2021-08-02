import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private uri = 'http://' + window.location.hostname + ':8080/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  public save(post: any) {
    return this.http.post(this.uri + '/posts', post);
  }

  public addComment(idPost: string, comentario: any) {
    return this.http.post(this.uri + '/posts/' + idPost + '/addcomment', comentario);
  }

  public findAll() {
    return this.http.get(this.uri + '/posts/');
  }

  public find(idPost: any) {
    return this.http.get(this.uri + '/post/' + idPost);
  }

  public search(searchPost: any) {
    return this.http.get(this.uri + '/post/search/' + searchPost);
  }
}
