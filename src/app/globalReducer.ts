import { ActionReducerMap } from '@ngrx/store';
import * as globalBook from './ngrx/reducers/bookmark.reducers';

export interface GlobalAppState {
  bookReducers: globalBook.StateBookMarks;
}

export const globalReducer: ActionReducerMap<GlobalAppState> = {
  bookReducers: globalBook.BookMarkReducer,
};
