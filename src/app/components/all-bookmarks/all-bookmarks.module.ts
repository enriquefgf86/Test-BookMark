import { AllBookmarksComponent } from './all-bookmarks.component';
import { BookmarkPipesModule } from './../../pipes/bookmark-pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookmarkPipesModule
  ],
  providers:[BookmarkPipesModule]
})
export class AllBookmarksModule { }
