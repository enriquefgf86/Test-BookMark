import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalAppState } from '../globalReducer';
import { BookMarkInterface } from '../interfaces/interfaces';
import * as bookMarkActions from '../ngrx/actions/bookmark-actions';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  allForms: BookMarkInterface[] = [];

  constructor(private stateStore: Store<GlobalAppState>) {}

  //===========================================================================================
  async createBookMarkService(
    id: string,
    title: string,
    link: string,
    linkForIframe: string,
    group: string
  ) {
    let objectBookMark: BookMarkInterface = await {
      id,
      title,
      link,
      linkForIframe,
      group,
    };
    // console.log(objectBookMark);
    //creando objeto de toipo BookMarkInterface para triggerizar reducer

    await this.stateStore.dispatch(
      bookMarkActions.createBook({ bookmarkCreated: objectBookMark })
    );
    //triggerizando accion de creado de bookmark en ngrx

    await this.allForms.push(objectBookMark);
    console.log(this.allForms);
    //adicionando a la variable allForms el nuevo objeto creado

    this.stateStore.dispatch(
      bookMarkActions.setArrayOfBookMarks({
        arrayBookmarkCreated: this.allForms,
      })
    );
    //triggerizando accion de adicion a array de bookmarks en ngrx
    return objectBookMark;
  }
  //Servicio creacion de bookmark

  //===========================================================================================
  async deleteBookMark(id) {
    //console.log(id);
    await this.allForms.splice(
      this.allForms.findIndex((key) => key.id === id),
      1
    );
    // console.log(this.allForms);
    // console.log(newAllForm);
    //accediendo al array de bookmark y borrando el objeto que corresponda
    //con el id traido por parametro

    this.stateStore.dispatch(
      bookMarkActions.setArrayOfBookMarks({
        arrayBookmarkCreated: this.allForms,
      })
    );
    //triggerizando el nuevo arraymomodificado  a ngrx

    this.stateStore.dispatch(
      bookMarkActions.deleteBoook({
        arrayBookmarkCreated: this.allForms,
      })
    );
    //triggerizando el nuevo arraymomodificado  a ngrx
  }
  //borrado de bookmark
}
