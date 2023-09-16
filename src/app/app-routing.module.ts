import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [ AuthGuard ]
    },
    {
        path: "**",
        redirectTo: "/login"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
