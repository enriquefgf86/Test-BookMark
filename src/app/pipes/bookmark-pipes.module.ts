import { BookmarkPipePipe } from './bookmark-pipe.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BookmarkPipePipe],
  imports: [
    CommonModule
  ],
  exports:[BookmarkPipePipe]
})
export class BookmarkPipesModule {
  // static forRoot(): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  //   throw new Error('Method not implemented.');
  // }
}
