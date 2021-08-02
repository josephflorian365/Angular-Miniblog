import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentarioComponent } from './comentario/comentario.component';
import { NuevoPostComponent } from './nuevo-post/nuevo-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'nuevo-post',
    component: NuevoPostComponent
  },
  {
    path: 'post/:id',
    component: ComentarioComponent
  },
  {
    path: 'post/buscar/:id',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
