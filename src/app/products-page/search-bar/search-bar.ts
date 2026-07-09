import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  @Output()
  searchTerm = new EventEmitter<string>();

  onSearchTerm(term: string) {
    this.searchTerm.emit(term);
  }
}
