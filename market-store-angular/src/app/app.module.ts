import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxSummernoteModule } from 'ngx-summernote';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderMobileComponent } from './modules/header-mobile/header-mobile.component';
import { HeaderPromotionComponent } from './modules/header-promotion/header-promotion.component';
import { HeaderComponent } from './modules/header/header.component';
import { NewletterComponent } from './modules/newletter/newletter.component';
import { AccountBreadcrumbComponent } from './pages/account/account-breadcrumb/account-breadcrumb.component';
import { AccountDisputesComponent } from './pages/account/account-profile/account-disputes/account-disputes.component';
import { AccountMessagesComponent } from './pages/account/account-profile/account-messages/account-messages.component';
import { AccountMySalesComponent } from './pages/account/account-profile/account-my-sales/account-my-sales.component';
import { AccountMyShoppingComponent } from './pages/account/account-profile/account-my-shopping/account-my-shopping.component';
import { AccountMyStoreComponent } from './pages/account/account-profile/account-my-store/account-my-store.component';
import { AccountNewStoreComponent } from './pages/account/account-profile/account-new-store/account-new-store.component';
import { AccountOrdersComponent } from './pages/account/account-profile/account-orders/account-orders.component';
import { AccountProfileComponent } from './pages/account/account-profile/account-profile.component';
import { AccountWishlistComponent } from './pages/account/account-profile/account-wishlist/account-wishlist.component';
import { AccountComponent } from './pages/account/account.component';
import { BecomeAVendorComponent } from './pages/become-a-vendor/become-a-vendor.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { HomeFeaturesComponent } from './pages/home/home-features/home-features.component';
import { HomeHotTodayComponent } from './pages/home/home-hot-today/home-hot-today.component';
import { HomePromotionsComponent } from './pages/home/home-promotions/home-promotions.component';
import { HomeShowcaseComponent } from './pages/home/home-showcase/home-showcase.component';
import { HomeTopCategoriesComponent } from './pages/home/home-top-categories/home-top-categories.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CallToActionComponent } from './pages/product/call-to-action/call-to-action.component';
import { ProductBreadcrumbComponent } from './pages/product/product-breadcrumb/product-breadcrumb.component';
import { BoughtTogetherComponent } from './pages/product/product-left/bought-together/bought-together.component';
import { ProductLeftComponent } from './pages/product/product-left/product-left.component';
import { ReviewsComponent } from './pages/product/product-left/reviews/reviews.component';
import { VendorStoreComponent } from './pages/product/product-left/vendor-store/vendor-store.component';
import { ProductRightComponent } from './pages/product/product-right/product-right.component';
import { ProductComponent } from './pages/product/product.component';
import { RelatedProductComponent } from './pages/product/related-product/related-product.component';
import { SimilarBoughtComponent } from './pages/product/similar-bought/similar-bought.component';
import { BestSalesItemComponent } from './pages/products/best-sales-item/best-sales-item.component';
import { ProductsBreadcrumbComponent } from './pages/products/products-breadcrumb/products-breadcrumb.component';
import { ProductsRecommendedComponent } from './pages/products/products-recommended/products-recommended.component';
import { ProductsShowcaseComponent } from './pages/products/products-showcase/products-showcase.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';
import { SearchBreadcrumbComponent } from './pages/search/search-breadcrumb/search-breadcrumb.component';
import { SearchShowcaseComponent } from './pages/search/search-showcase/search-showcase.component';
import { SearchComponent } from './pages/search/search.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { StoreListComponent } from './pages/store-list/store-list.component';
import { KeysPipe } from './pipes/keys.pipe';
import { UrlsecurePipe } from './pipes/urlsecure.pipe';











@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPromotionComponent,
    HeaderMobileComponent,
    NewletterComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    Error404Component,
    HomeBannerComponent,
    HomeFeaturesComponent,
    HomePromotionsComponent,
    HomeHotTodayComponent,
    HomeTopCategoriesComponent,
    HomeShowcaseComponent,
    ProductsBreadcrumbComponent,
    BestSalesItemComponent,
    ProductsRecommendedComponent,
    ProductsShowcaseComponent,
    SearchBreadcrumbComponent,
    SearchShowcaseComponent,
    CallToActionComponent,
    ProductBreadcrumbComponent,
    ProductLeftComponent,
    ProductRightComponent,
    UrlsecurePipe,
    BoughtTogetherComponent,
    VendorStoreComponent,
    ReviewsComponent,
    SimilarBoughtComponent,
    RelatedProductComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    AccountBreadcrumbComponent,
    AccountProfileComponent,
    AccountWishlistComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    AccountMyShoppingComponent,
    BecomeAVendorComponent,
    AccountNewStoreComponent,
    AccountMyStoreComponent,
    KeysPipe,
    AccountMySalesComponent,
    AccountOrdersComponent,
    AccountDisputesComponent,
    AccountMessagesComponent,
    StoreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger'
    }),
    NgxSummernoteModule,
    TagInputModule,
    BrowserAnimationsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
