import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { AboutItemComponent } from './RoutingDemo/about-item/about-item.component';
import { AboutComponent } from './RoutingDemo/about/about.component';
import { AbouthomeComponent } from './RoutingDemo/abouthome/abouthome.component';
import { ContactComponent } from './RoutingDemo/contact/contact.component';
import { DashBoardComponent } from './RoutingDemo/dash-board/dash-board.component';
import { HomeComponent } from './RoutingDemo/home/home.component';
import { LoginComponent } from './RoutingDemo/login/login.component';
import { LogoutComponent } from './RoutingDemo/logout/logout.component';
import { NotfoundComponent } from './RoutingDemo/notfound/notfound.component';
import { ProductComponent } from './RoutingDemo/product/product.component';
import { ProductOverviewComponent } from './RoutingDemo/product/productoverview.component';
import { ProductdetailsComponent } from './RoutingDemo/productdetails/productdetails.component';
import { UserFormComponent } from './User_Crud_Boot_Api/user-form/user-form.component';
import { UserapicompComponent } from './User_Crud_Boot_Api/userapicomp/userapicomp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    // children: [
    //   { path: '', component: AbouthomeComponent },
    //   { path: 'item/:id', component: AboutItemComponent },
    // ],
  },
  {
    path: 'product',
    component: ProductComponent,
    // children: [
    //   {
    //     path: 'product-detail/:id',
    //     component: ProductdetailsComponent,
    //     children: [
    //       { path: 'overview', component: ProductOverviewComponent },
    //       { path: '', redirectTo: 'overview', pathMatch: 'full' },
    //     ],
    //   },
    // ],
  },
  {path:'dash-board', canActivate: [AuthguardGuard],component:DashBoardComponent},
  { path: 'product-detail/:id', component: ProductdetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotfoundComponent },
  // { path: 'users', component: UserapicompComponent },
  // { path: 'addUser', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
