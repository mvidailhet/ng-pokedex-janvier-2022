import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {
    console.log('logging service created');
  }

  logItemCreated(itemName: string) {
    console.warn(`created item ${itemName}`);
  }
}
