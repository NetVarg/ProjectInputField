import { Component } from '@angular/core';
import { debounceTime } from 'rxjs/operators'; // entry for angular version 6
import { FormGroup, FormControl } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  ngOnInit() {

    this.userForm.get('name').valueChanges.pipe(debounceTime(100)).subscribe(value => {
      //console.log('name has changed:', value);
      this.userForm.get('namecopy').setValue(value);
    });

  }

  public userForm = new FormGroup({
    name: new FormControl(),
    namecopy: new FormControl()
  });

  onFormSubmit() {
    console.log('Entered name: ' + this.userForm.get('namecopy').value);
  }

}