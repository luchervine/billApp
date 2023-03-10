import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBillComponent } from './components/bills/add-bill/add-bill.component';
import { BillDetailsComponent } from './components/bills/bill-details/bill-details.component';
import { BillsComponent } from './components/bills/bills.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NavBarComponent } from './components/layouts/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './help/guards/security.guards';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'customers', component: CustomersComponent },
  {
    path: 'add_bill',
    component: AddBillComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN', 'USER'] },
  },
  {
    path: 'billing',
    component: BillDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] },
  },
  {
    path: 'customer/:customer_id',
    component: BillsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER'] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
