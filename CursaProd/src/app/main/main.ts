import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- 1. Обязательно импортируем

@Component({
  selector: 'app-main',
  imports: [FormsModule], // <-- 2. Добавляем в imports
  templateUrl: './main.html',
  styleUrls: ['./main.scss'],
})

export class Main {
  text1: string = '';
  text2: string = '';
  moveText() {
    if (this.text1) {
      this.text2 = this.text1; // переносим во второй
      this.text1 = ''; // очищаем первый
    } else if (this.text2) {
      this.text1 = this.text2; // переносим обратно в первый
      this.text2 = ''; // очищаем второй
    }
  }
}
