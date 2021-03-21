import { BookMarkInterface } from './../interfaces/interfaces';
import { StateBookMarks } from './../ngrx/reducers/bookmark.reducers';
import { BookmarkService } from './../services/bookmark.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalAppState } from '../globalReducer';
import { Store } from '@ngrx/store';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  id: string = '';
  showLink: boolean = false;
  allBooks: BookMarkInterface[] = [];
  selectedBookMark: BookMarkInterface;

  constructor(
    private service: BookmarkService,
    private router: Router,
    private route: ActivatedRoute,
    private stateStore: Store<GlobalAppState>,
    public sanitizerurl: DomSanitizer
  ) {}
  async ngOnInit() {
    await this.getSeletectedBookMark();
    //console.log(this.allBooks);
  }

  //===========================================================================================
  async getSeletectedBookMark() {
    this.id = await this.route.snapshot.params['id'];
    //console.log(this.id);

    this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        //console.log(data);

        let allBooks = await data.bookmarklist;
        this.allBooks = await Object.values(allBooks);

        this.selectedBookMark = await this.allBooks.find(
          (result) => result.id === this.id
        );
        //console.log(this.selectedBookMark);
        if (this.selectedBookMark) {
          this.sanitizerurl.bypassSecurityTrustUrl(this.selectedBookMark.link);
        }
      });
  }
  //obteniendo el bookmark seleccionado
}
