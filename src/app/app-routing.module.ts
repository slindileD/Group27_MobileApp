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
  {
    path: 'browse-snacks',
    loadChildren: () => import('./browse-snacks/browse-snacks.module').then( m => m.BrowseSnacksPageModule)
  },
  {
    path: 'browse-water',
    loadChildren: () => import('./browse-water/browse-water.module').then( m => m.BrowseWaterPageModule)
  },
  {
    path: 'view-cart',
    loadChildren: () => import('./view-cart/view-cart.module').then( m => m.ViewCartPageModule)
  },
  {
    path: 'view-simba-details',
    loadChildren: () => import('./view-simba-details/view-simba-details.module').then( m => m.ViewSimbaDetailsPageModule)
  },
  {
    path: 'view-lays-details',
    loadChildren: () => import('./view-lays-details/view-lays-details.module').then( m => m.ViewLaysDetailsPageModule)
  },
  {
    path: 'view-maynards-details',
    loadChildren: () => import('./view-maynards-details/view-maynards-details.module').then( m => m.ViewMaynardsDetailsPageModule)
  },
  {
    path: 'add-simba-to-cart',
    loadChildren: () => import('./add-simba-to-cart/add-simba-to-cart.module').then( m => m.AddSimbaToCartPageModule)
  },
  {
    path: 'view-cart-simba',
    loadChildren: () => import('./view-cart-simba/view-cart-simba.module').then( m => m.ViewCartSimbaPageModule)
  },
  {
    path: 'empty-cart',
    loadChildren: () => import('./empty-cart/empty-cart.module').then( m => m.EmptyCartPageModule)
  },
  {
    path: 'update-cart',
    loadChildren: () => import('./update-cart/update-cart.module').then( m => m.UpdateCartPageModule)
  },
  {
    path: 'add-maynards-to-cart',
    loadChildren: () => import('./add-maynards-to-cart/add-maynards-to-cart.module').then( m => m.AddMaynardsToCartPageModule)
  },
  {
    path: 'view-cart-maynards',
    loadChildren: () => import('./view-cart-maynards/view-cart-maynards.module').then( m => m.ViewCartMaynardsPageModule)
  },
  {
    path: 'add-to-lays-cart',
    loadChildren: () => import('./add-to-lays-cart/add-to-lays-cart.module').then( m => m.AddToLaysCartPageModule)
  },
  {
    path: 'view-cart-lays',
    loadChildren: () => import('./view-cart-lays/view-cart-lays.module').then( m => m.ViewCartLaysPageModule)
  },
  {
    path: 'add-aquelle-to-cart',
    loadChildren: () => import('./add-aquelle-to-cart/add-aquelle-to-cart.module').then( m => m.AddAquelleToCartPageModule)
  },
  {
    path: 'view-cart-aquelle',
    loadChildren: () => import('./view-cart-aquelle/view-cart-aquelle.module').then( m => m.ViewCartAquellePageModule)
  },
  {
    path: 'view-aquelle-details',
    loadChildren: () => import('./view-aquelle-details/view-aquelle-details.module').then( m => m.ViewAquelleDetailsPageModule)
  },
  {
    path: 'add-water-world-water-to-cart',
    loadChildren: () => import('./add-water-world-water-to-cart/add-water-world-water-to-cart.module').then( m => m.AddWaterWorldWaterToCartPageModule)
  },
  {
    path: 'add-bulk-water-to-cart',
    loadChildren: () => import('./add-bulk-water-to-cart/add-bulk-water-to-cart.module').then( m => m.AddBulkWaterToCartPageModule)
  },
  {
    path: 'view-cart-bulk-water',
    loadChildren: () => import('./view-cart-bulk-water/view-cart-bulk-water.module').then( m => m.ViewCartBulkWaterPageModule)
  },
  {
    path: 'view-cart-water-world-water',
    loadChildren: () => import('./view-cart-water-world-water/view-cart-water-world-water.module').then( m => m.ViewCartWaterWorldWaterPageModule)
  },
  {
    path: 'view-bulk-water-details',
    loadChildren: () => import('./view-bulk-water-details/view-bulk-water-details.module').then( m => m.ViewBulkWaterDetailsPageModule)
  },
  {
    path: 'view-water-world-water-details',
    loadChildren: () => import('./view-water-world-water-details/view-water-world-water-details.module').then( m => m.ViewWaterWorldWaterDetailsPageModule)
  },
  {
    path: 'browse-bottles',
    loadChildren: () => import('./browse-bottles/browse-bottles.module').then( m => m.BrowseBottlesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
