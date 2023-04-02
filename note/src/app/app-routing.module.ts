import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';


//rotas
const routes: Routes = [
  {path: '', component:MainLayoutComponent, children: [
    {path:'', component:ListComponent},
    {path: ':id', component: NoteDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
