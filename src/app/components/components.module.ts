import { AllBookmarksModule } from './all-bookmarks/all-bookmarks.module';
import { BookmarkPipesModule } from './../pipes/bookmark-pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { AllBookmarksComponent } from './all-bookmarks/all-bookmarks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  // declarations: [AllBookmarksComponent, BookmarkComponent],
  imports: [CommonModule, IonicModule,ReactiveFormsModule,FormsModule,BookmarkPipesModule,AllBookmarksModule],
})
export class ComponentsModule {}
