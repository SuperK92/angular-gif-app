
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Gif } from '../../../gifs/interfaces/gifs.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  get tagsHist(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag(tag : string): void {
    this.gifsService.searchTag(tag);
  }

}
