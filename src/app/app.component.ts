import { Component } from '@angular/core';
import { IFlash } from './flash.model';

function getRandomNumber(): number {
  return Math.floor(Math.random() * 10000);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  flashs: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
    },
  ];
  editing = false;
  editingId!: number;

  trackByFlashId(index: number, flash: IFlash): number {
    return flash.id;
  }

  handleToggleCard(flashId: number) {
    const flash = this.flashs.find(flash => flash.id === flashId) as IFlash;
    flash.show = !flash.show;
  }

  handleDelete(flashId: number) {
    this.flashs = this.flashs.filter(flash => flash.id !== flashId);
  }

  handleEdit(flashId: number) {
    this.editing = true;
    this.editingId = flashId;
    // TODO: Add editing logic after adding the form
  }

  handleRememberedChange({flashId, flag}: {flashId: number, flag: any}) {
    const flash = this.flashs.find(flash => flash.id === flashId) as IFlash;
    flash.remembered = flag;
  }
}
