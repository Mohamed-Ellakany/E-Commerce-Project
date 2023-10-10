import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { CartComponent } from './cart/cart.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { AllordersComponent } from './allorders/allorders.component';


const routes: Routes = [

  { path:'',redirectTo:'home' ,pathMatch:'full'},
{path:'home',canActivate:[authGuard] , component:HomeComponent},
{path:'productDetails/:id',canActivate:[authGuard] , component:ProductDetailsComponent},
{path:'regestration', component:RegestrationComponent },
{path:'forgotPassword' , loadComponent:()=>import("./forgot-pass/forgot-pass.component").then(c=>c.ForgotPassComponent) },
{path:'verifyCode' , loadComponent:()=>import("./verify-code/verify-code.component").then(c=>c.VerifyCodeComponent) },
{path:'resetPass' , loadComponent:()=>import("./reset-password/reset-password.component").then(c=>c.ResetPasswordComponent) },
{ path:'cart',canActivate:[authGuard],component:CartComponent },
{ path:'checkout',canActivate:[authGuard],loadComponent:()=>import("./checkout/checkout.component").then(c=>c.CheckoutComponent) },
{path:'wishlist' , canActivate:[authGuard],component:WishListComponent},
{path:'brands',canActivate:[authGuard] ,loadComponent:()=>import("./brands/brands.component").then(c=>c.BrandsComponent)},
{path:'category' , canActivate:[authGuard] , loadComponent:()=>import("./category/category.component").then(c=>c.CategoryComponent) },

{path:'allorders', canActivate:[authGuard] , component:AllordersComponent},
{path:'**' ,component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
