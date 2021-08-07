import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'design-web', loadChildren: './home/design-web/design-web.module#DesignWebPageModule' },
  { path: 'flashcard', loadChildren: './home/flashcard/flashcard.module#FlashcardPageModule' },
  { path: 'selector', loadChildren: './home/flashcard/selector/selector.module#SelectorPageModule' },
  { path: 'adding-css', loadChildren: './home/flashcard/adding-css/adding-css.module#AddingCSSPageModule' },
  { path: 'addcss1', loadChildren: './home/flashcard/adding-css/addcss1/addcss1.module#Addcss1PageModule' },
  { path: 'addcss2', loadChildren: './home/flashcard/adding-css/addcss2/addcss2.module#Addcss2PageModule' },
  { path: 'addcss2ans', loadChildren: './home/flashcard/adding-css/addcss2/addcss2ans/addcss2ans.module#Addcss2ansPageModule' },
  { path: 'selector1', loadChildren: './home/flashcard/selector/selector1/selector1.module#Selector1PageModule' },
  { path: 'background', loadChildren: './home/flashcard/background/background.module#BackgroundPageModule' },
  { path: 'bkg1', loadChildren: './home/flashcard/background/bkg1/bkg1.module#Bkg1PageModule' },
  { path: 'bkg2', loadChildren: './home/flashcard/background/bkg2/bkg2.module#Bkg2PageModule' },
  { path: 'bkg2ans', loadChildren: './home/flashcard/background/bkg2/bkg2ans/bkg2ans.module#Bkg2ansPageModule' },
  { path: 'bkg3', loadChildren: './home/flashcard/background/bkg3/bkg3.module#Bkg3PageModule' },
  { path: 'bkg3ans', loadChildren: './home/flashcard/background/bkg3/bkg3ans/bkg3ans.module#Bkg3ansPageModule' },
  { path: 'bkg4', loadChildren: './home/flashcard/background/bkg4/bkg4.module#Bkg4PageModule' },
  { path: 'bkg4ans', loadChildren: './home/flashcard/background/bkg4/bkg4ans/bkg4ans.module#Bkg4ansPageModule' },
  { path: 'bkg5', loadChildren: './home/flashcard/background/bkg5/bkg5.module#Bkg5PageModule' },
  { path: 'bkg5ans', loadChildren: './home/flashcard/background/bkg5/bkg5ans/bkg5ans.module#Bkg5ansPageModule' },
  { path: 'bkg6', loadChildren: './home/flashcard/background/bkg6/bkg6.module#Bkg6PageModule' },
  { path: 'bkg6ans', loadChildren: './home/flashcard/background/bkg6/bkg6ans/bkg6ans.module#Bkg6ansPageModule' },
  { path: 'font', loadChildren: './home/flashcard/font/font.module#FontPageModule' },
  { path: 'font1', loadChildren: './home/flashcard/font/font1/font1.module#Font1PageModule' },
  { path: 'font2', loadChildren: './home/flashcard/font/font2/font2.module#Font2PageModule' },
  { path: 'font2ans', loadChildren: './home/flashcard/font/font2/font2ans/font2ans.module#Font2ansPageModule' },
  { path: 'font3', loadChildren: './home/flashcard/font/font3/font3.module#Font3PageModule' },
  { path: 'font3ans', loadChildren: './home/flashcard/font/font3/font3ans/font3ans.module#Font3ansPageModule' },
  { path: 'font4', loadChildren: './home/flashcard/font/font4/font4.module#Font4PageModule' },
  { path: 'font4ans', loadChildren: './home/flashcard/font/font4/font4ans/font4ans.module#Font4ansPageModule' },
  { path: 'text', loadChildren: './home/flashcard/text/text.module#TextPageModule' },
  { path: 'boxmodel', loadChildren: './home/flashcard/boxmodel/boxmodel.module#BoxmodelPageModule' },
  { path: 'text1', loadChildren: './home/flashcard/text/text1/text1.module#Text1PageModule' },
  { path: 'text2', loadChildren: './home/flashcard/text/text2/text2.module#Text2PageModule' },
  { path: 'text2ans', loadChildren: './home/flashcard/text/text2/text2ans/text2ans.module#Text2ansPageModule' },
  { path: 'text3', loadChildren: './home/flashcard/text/text3/text3.module#Text3PageModule' },
  { path: 'text3ans', loadChildren: './home/flashcard/text/text3/text3ans/text3ans.module#Text3ansPageModule' },
  { path: 'text4', loadChildren: './home/flashcard/text/text4/text4.module#Text4PageModule' },
  { path: 'text4ans', loadChildren: './home/flashcard/text/text4/text4ans/text4ans.module#Text4ansPageModule' },
  { path: 'text5', loadChildren: './home/flashcard/text/text5/text5.module#Text5PageModule' },
  { path: 'text5ans', loadChildren: './home/flashcard/text/text5/text5ans/text5ans.module#Text5ansPageModule' },
  { path: 'text6', loadChildren: './home/flashcard/text/text6/text6.module#Text6PageModule' },
  { path: 'text6ans', loadChildren: './home/flashcard/text/text6/text6ans/text6ans.module#Text6ansPageModule' },
  { path: 'text7', loadChildren: './home/flashcard/text/text7/text7.module#Text7PageModule' },
  { path: 'text7ans', loadChildren: './home/flashcard/text/text7/text7ans/text7ans.module#Text7ansPageModule' },
  { path: 'text8', loadChildren: './home/flashcard/text/text8/text8.module#Text8PageModule' },
  { path: 'text8ans', loadChildren: './home/flashcard/text/text8/text8ans/text8ans.module#Text8ansPageModule' },
  { path: 'text9', loadChildren: './home/flashcard/text/text9/text9.module#Text9PageModule' },
  { path: 'text9ans', loadChildren: './home/flashcard/text/text9/text9ans/text9ans.module#Text9ansPageModule' },
  { path: 'selector1ans', loadChildren: './home/flashcard/selector/selector1/selector1ans/selector1ans.module#Selector1ansPageModule' },
  { path: 'selector2', loadChildren: './home/flashcard/selector/selector2/selector2.module#Selector2PageModule' },
  { path: 'selector2ans', loadChildren: './home/flashcard/selector/selector2/selector2ans/selector2ans.module#Selector2ansPageModule' },
  { path: 'selector3', loadChildren: './home/flashcard/selector/selector3/selector3.module#Selector3PageModule' },
  { path: 'selector3ans', loadChildren: './home/flashcard/selector/selector3/selector3ans/selector3ans.module#Selector3ansPageModule' },
  { path: 'selector4', loadChildren: './home/flashcard/selector/selector4/selector4.module#Selector4PageModule' },
  { path: 'selector4ans', loadChildren: './home/flashcard/selector/selector4/selector4ans/selector4ans.module#Selector4ansPageModule' },
  { path: 'selector5', loadChildren: './home/flashcard/selector/selector5/selector5.module#Selector5PageModule' },
  { path: 'selector5ans', loadChildren: './home/flashcard/selector/selector5/selector5ans/selector5ans.module#Selector5ansPageModule' },
  { path: 'selector6', loadChildren: './home/flashcard/selector/selector6/selector6.module#Selector6PageModule' },
  { path: 'selector6ans', loadChildren: './home/flashcard/selector/selector6/selector6ans/selector6ans.module#Selector6ansPageModule' },
  { path: 'boxmodel1', loadChildren: './home/flashcard/boxmodel/boxmodel1/boxmodel1.module#Boxmodel1PageModule' },
  { path: 'boxmodel2', loadChildren: './home/flashcard/boxmodel/boxmodel2/boxmodel2.module#Boxmodel2PageModule' },
  { path: 'boxmodel2ans', loadChildren: './home/flashcard/boxmodel/boxmodel2/boxmodel2ans/boxmodel2ans.module#Boxmodel2ansPageModule' },
  { path: 'boxmodel3', loadChildren: './home/flashcard/boxmodel/boxmodel3/boxmodel3.module#Boxmodel3PageModule' },
  { path: 'boxmodel3ans', loadChildren: './home/flashcard/boxmodel/boxmodel3/boxmodel3ans/boxmodel3ans.module#Boxmodel3ansPageModule' },
  { path: 'test', loadChildren: './home/test/test.module#TestPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
