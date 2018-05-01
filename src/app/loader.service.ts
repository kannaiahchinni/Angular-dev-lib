import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  public loader = ['<div class="km-overlay">',
  '<div class="km-modal km-vertical" id="modal">',
    '<div class="km-modal-content">',
      '<div class="km-loader km-vertical"></div>',
    '</div>',
  '</div>',
  '</div>'];
  constructor() { }

  showDialog() {
    const div = document.createElement('div');
    div.className = 'km-dialog-loader';
    div.innerHTML = this.loader.join(' ');
    document.body.appendChild(div);
  }

  closeDialog() {
    document.querySelector('.km-dialog-loader').remove();
  }

}

