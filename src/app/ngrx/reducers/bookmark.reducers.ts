import { BookMarkInterface } from './../../interfaces/interfaces';
import * as books from '../actions/bookmark-actions';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

export interface StateBookMarks {
  bookmarklist: BookMarkInterface[];
  bookMark: BookMarkInterface;
  counting: number;
  counterGroups: string[];
  headerGroups: string[];
  tablesComplete: any[];
}

export const initialStateBookMarks: StateBookMarks = {
  bookmarklist: [],
  counting: null,
  bookMark: null,
  counterGroups: [],
  headerGroups: [],
  tablesComplete: [],
};

  //===========================================================================================
  const _bookMarkReducer = createReducer(
  initialStateBookMarks,
  on(books.setArrayOfBookMarks, (state, { arrayBookmarkCreated }) => ({
    ...state,

    bookmarklist: { ...state.bookmarklist, ...arrayBookmarkCreated },
    //adicion de bookmark

    counting: arrayBookmarkCreated.length,
    //conteo de bookmarks

    counterGroups: arrayBookmarkCreated.reduce(function (r, a) {
      //agrupacion de bookmar
      r[a.group] = r[a.group] || [];
      r[a.group].push(r[a.group]);
      return r;
    }, Object.create(null)),
    //Agrupadno por grupos los distintos objetos de elementos creados

    tablesComplete: Object.values(
      arrayBookmarkCreated.reduce(
        (result, { group, id, link, linkForIframe, title }) => {
          // Create new group
          if (!result[group])
            result[group] = {
              group,
              groups: [],
            };
          // Append to group
          result[group].groups.push({
            id,
            link,
            title,
            linkForIframe,
            group,
          });
          return result;
        },
        {}
      )
    ),
  })),
  //creando una tabla final con cada grupo de encabezado asi como los objetos
  //correspondientes

  on(books.createBook, (state, { bookmarkCreated }) => ({
    ...state,
    bookMark: bookmarkCreated,
  })),
  //creando bookmark

  on(books.deleteBoook, (state, { arrayBookmarkCreated }) => ({
    ...state,
    bookmarklist: { ...(state.bookmarklist = []), ...arrayBookmarkCreated },
  }))
  //accion que elimina el listado de bookmarklist y actualiza de nuevo
  //con un nuevo array
);

export function BookMarkReducer(state, action) {
  return _bookMarkReducer(state, action);
}
