import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LesProjetsCagnottesComponent } from './app/lesprojetscagnottes.component';
import { AuthGuard } from './_guards';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './app/users/users.component';
import { EditOrganizationComponent } from './app/organizations/edit/edit-organization.component';
import { OrganizationsComponent } from './app/organizations/list/list-organizations.component';
import { BudgetsComponent } from './app/budgets/budgets.component';
import { ProfileComponent } from './app/profile/profile.component';
import { ReportComponent } from './app/report/report.component';
import { GettingStartedComponent } from './app/documentation/getting-started/getting-started.component';
import { AboutComponent } from './about/about.component';
import { ListIdeasComponent } from './app/ideas/list-ideas/list-ideas.component';
import { EditProjectComponent } from './app/projects/edit/edit-project.component';
import { ListProjectsComponent } from './app/projects/list/list-projects.component';
import { ViewProjectComponent } from './app/projects/view/view-project.component';
import { ListNewsComponent } from './app/news/list/list-news.component';
import { EditNewsComponent } from './app/news/edit/edit-news.component';

const routes: Routes = [
  {
    path: '', component: LesProjetsCagnottesComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/projects', pathMatch: 'full' },
      { path: 'news/new', component: EditNewsComponent },
      { path: 'news/:id/edit', component: EditNewsComponent },
      { path: 'news', component: ListNewsComponent },
      { path: 'organizations/new', redirectTo: 'organizations/edit/0' },
      { path: 'organizations/edit/microsoft', component: EditOrganizationComponent },
      { path: 'organizations/edit/:id', component: EditOrganizationComponent },
      { path: 'organizations/edit/slack/:id', component: EditOrganizationComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'projects/new', component: EditProjectComponent },
      { path: 'projects/:idProject/news/new', component: EditNewsComponent },
      { path: 'projects/:id/edit', component: EditProjectComponent },
      { path: 'projects/:id', component: ViewProjectComponent },
      { path: 'projects', component: ListProjectsComponent },
      { path: 'ideas', component: ListIdeasComponent },
      { path: 'budgets', component: BudgetsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'report', component: ReportComponent },
      { path: 'users', component: UsersComponent },
      { path: 'doc/getting-started', component: GettingStartedComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'login/slack', component: LoginComponent },
  { path: 'login/ms', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
