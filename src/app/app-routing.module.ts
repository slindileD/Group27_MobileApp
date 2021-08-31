import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'update-client',
    loadChildren: () => import('./update-client/update-client.module').then( m => m.UpdateClientPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'track-order',
    loadChildren: () => import('./track-order/track-order.module').then( m => m.TrackOrderPageModule)
  },
  {
    path: 'provide-feed-back',
    loadChildren: () => import('./provide-feed-back/provide-feed-back.module').then( m => m.ProvideFeedBackPageModule)
  },
  {
    path: 'search-order',
    loadChildren: () => import('./search-order/search-order.module').then( m => m.SearchOrderPageModule)
  },
  {
    path: 'request-quotation',
    loadChildren: () => import('./request-quotation/request-quotation.module').then( m => m.RequestQuotationPageModule)
  },
  {
    path: 'calculate-quotation',
    loadChildren: () => import('./calculate-quotation/calculate-quotation.module').then( m => m.CalculateQuotationPageModule)
  },
  {
    path: 'reject-quotation',
    loadChildren: () => import('./Accept/reject-quotation/reject-quotation.module').then( m => m.RejectQuotationPageModule)
  },
  {
    path: 'regenerate-order-receipt',
    loadChildren: () => import('./regenerate-order-receipt/regenerate-order-receipt.module').then( m => m.RegenerateOrderReceiptPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
