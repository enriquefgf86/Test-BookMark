import { BookMarkInterface, TableFinal } from './../../interfaces/interfaces';
import { StateBookMarks } from './../../ngrx/reducers/bookmark.reducers';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../../globalReducer';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-all-bookmarks',
  templateUrl: './all-bookmarks.component.html',
  styleUrls: ['./all-bookmarks.component.scss'],
})
export class AllBookmarksComponent implements OnInit {
  allBooks: BookMarkInterface[] = [];
  bookmarks: BookMarkInterface[] = [];
  tables: TableFinal[] = [];
  byGroup: string[] = [];
  constructor(
    private service: BookmarkService,
    private router: Router,
    private stateStore: Store<GlobalAppState>
  ) {}

  ngOnInit() {
    this.updtateBookMarks();
    this.getFinaltables();
  }
  //===========================================================================================
  updtateBookMarks() {
    this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        //console.log(data);
        if (data.bookmarklist)
          this.allBooks = await Object.values(data.bookmarklist);
        this.byGroup = await data.counterGroups;
        //console.log(this.allBooks);
        this.byGroup = Object.keys(data.counterGroups);
        //console.log(this.byGroup);
      });
  }
  //actualizando estados de bookmark

  //===========================================================================================
  getFinaltables() {
    this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        //console.log(data);
        if (data.tablesComplete) {
          this.tables = await [...data.tablesComplete];
        }
        //console.log(this.tables);
      });
  }
  //obteniendo estructura final para obtencion de tablas en el muestro de todos
  //los bookmarks

  //===========================================================================================
  async deleteBookMark(event) {
    let id = await event.target.id;
    //  //console.log(id);
    this.service.deleteBookMark(id);
  }
  //llamando el servicio de borrado de bookmark

  //===========================================================================================
  seeBookMark(event) {
    // //console.log(event.target.id);
    this.router.navigate([`/bookmark/${event.target.id}`]);
  }
  //yendo a la vista del bookmark seleccionado

  //===========================================================================================
  groupClassifier(array: BookMarkInterface[]) {
    array.reduce(function (r, a) {
      r[a.group] = r[a.group] || [];
      r[a.group].push(r[a.group]);
      return r;
    }, Object.create(null));
  }
  //clasificando por grupos
}
