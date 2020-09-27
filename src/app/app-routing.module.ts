import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [{
  path: 'main',
  component: MainComponent,
  children: [
    { path: '', component: ProfileComponent },
    { path: 'profile', component: ProfileComponent },
    {
      path: 'posts', component: PostsComponent
    },
    {
      path: 'gallery', component: GalleryComponent
    },
    { path: 'todo', component: TodoComponent }
  ]
},
{
  path: '',
  component: HomeComponent
},
{
  path: '**',
  component: MainComponent,

}];
export const profileRoutes: Routes = [
  {
    path: 'main', component: MainComponent,

  },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
