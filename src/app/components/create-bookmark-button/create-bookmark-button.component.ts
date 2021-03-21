import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CreateBookmarkComponent } from '../../modals/create-bookmark-modal/create-bookmark-modal.component';

@Component({
  selector: 'app-create-bookmark-button',
  templateUrl: './create-bookmark-button.component.html',
  styleUrls: ['./create-bookmark-button.component.scss'],
})
export class CreateBookmarkButtonComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private modalController: ModalController) { }

  slideOptions = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  async modalCreateBookMark() {
    const modal = await this.modalController.create({
      component: CreateBookmarkComponent,
      cssClass: 'my-custom-modal',
    });
    return await modal.present();
  }
  //modal para el proceso de creacion de bookmark


}
