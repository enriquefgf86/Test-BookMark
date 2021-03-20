import { BookmarkPipesModule } from './../pipes/bookmark-pipes.module';
import { AllBookmarksComponent } from './../components/all-bookmarks/all-bookmarks.component';
import { ModalsModule } from './../modals/modals.module';
import { ComponentsModule } from './../components/components.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { CreateBookmarkButtonComponent } from '../components/create-bookmark-button/create-bookmark-button.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    MatToolbarModule,
    MatIconModule,
    ComponentsModule,
    ModalsModule,BookmarkPipesModule
  ],
  declarations: [Tab1Page,AllBookmarksComponent,CreateBookmarkButtonComponent],
})
export class Tab1PageModule {}
