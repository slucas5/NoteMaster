import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import  { NotesService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor(private noteService: NotesService) {}

  ngOnInit() {
    this.notes = this.noteService.getAll();
  }

}
