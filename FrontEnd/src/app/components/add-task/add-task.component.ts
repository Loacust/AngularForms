import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm;

  constructor(private formBuilder:FormBuilder) {
    this.taskForm = formBuilder.group({
      title: ['',[Validators.required,Validators.minLength(3)]],
      description:['',[Validators.required]],
      date:['',[Validators.required]],
      time:['',[Validators.required]],
      priority_level:['',[Validators.required]],
      category:['',[Validators.required]],
      progress_level:['',[Validators.required]],

    })
   }

  ngOnInit(): void {
  }
  addTask(){
  }

// getter methods

get titleFormControl(){
  return this.taskForm.get('title')!;
}
get descriptionFormControl(){
  return this.taskForm.get('description')!;
}
get dateFormControl(){
  return this.taskForm.get('date')!;
}
get priority_levelFormControl(){
  return this.taskForm.get('priority_level')!;
}
get categoryFormControl(){
  return this.taskForm.get('category')!;
}
get progress_levelFormControl(){
  return this.taskForm.get('progress_level')!;
}

}