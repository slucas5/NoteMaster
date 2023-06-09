import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Note } from 'src/app/shared/note.model'
import { Router } from '@angular/router';
import { NotesService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit{

  note: Note;

  constructor(private notesServices: NotesService, private router: Router){}

  ngOnInit() {  
    this.note  = new Note();
  }

  onSubmit(form: NgForm){
    this.notesServices.add(form.value);
    this.router.navigateByUrl('/')
  }
}
