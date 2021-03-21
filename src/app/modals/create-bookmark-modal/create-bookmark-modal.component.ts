import { StateBookMarks } from './../../ngrx/reducers/bookmark.reducers';
import { BookMarkInterface } from './../../interfaces/interfaces';
import { BookmarkService } from './../../services/bookmark.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../../globalReducer';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopupsComponent } from '../../popups/popups/popups.component';


@Component({
  selector: 'app-create-bookmark',
  templateUrl: './create-bookmark-modal.component.html',
  styleUrls: ['./create-bookmark-modal.component.scss'],
})
export class CreateBookmarkComponent implements OnInit {
  createForm: FormGroup;
  allBooks: BookMarkInterface[] = [];
  counter: number = null;
  groups: String[] = ['Work', 'Leisure', 'Personal', 'Sports'];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: BookmarkService,
    private stateStore: Store<GlobalAppState>,
    private pops: PopoverController,
    private modal: ModalController
  ) {
    this.groups;
    // console.log(this.groups);
  }

  ngOnInit() {
    this.groups;

    this.getAllBooks();

    // console.log(this.groups);
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required],
      group: ['', Validators.required],
    });
  }

  //===========================================================================================
  async createBook() {
    let { title, link, group } = await this.createForm.value;

    if (this.createForm.invalid) {
      return;
    }

    if (!this.validURLHttps(link)) {
      this.showPop();
      return;
    }

    const v1options = await {
      node: [title, link, group],
      clockseq: 0x1234,
      msecs: new Date('2011-11-01').getTime(),
      nsecs: 5678,
    };

    let id = await uuidv4(v1options);

    let linkForIframe = `${link}&embedded=true`; //link modificado para mostrar dentor de iframe

    await this.service.createBookMarkService(
      id,
      title,
      link,
      linkForIframe,
      group
    );

    await this.getAllBooks();
    this.modal.dismiss();
  }
  //creando bookmark

  //===========================================================================================
  async getAllBooks() {
    await this.stateStore
      .select('bookReducers')
      .subscribe(async (data: StateBookMarks) => {
        if (data.tablesComplete) {
          this.allBooks = await data.tablesComplete;
          this.counter = await data.counting;
        }
      });
    // console.log(this.allBooks);
  }
  //obteniendo array de bookmarks

  //===========================================================================================
  validURLHttps(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ); // fragment locator
    return !!pattern.test(str);
  }
  //validador de link url

  //===========================================================================================
  async showPop() {
    const pop = await this.pops.create({
      component: PopupsComponent,
    });
    await pop.present();
    return setTimeout(() => {
      pop.dismiss();
    }, 1000);
  }
  //mostrando el popup de error por no valido url
}
