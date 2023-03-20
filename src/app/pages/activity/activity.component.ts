import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { TodoService } from 'src/app/services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { ModalPopupComponent } from 'src/app/component/modal-popup/modal-popup.component';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
})
export class ActivityComponent implements OnInit {
  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.activityId = this.route.snapshot.paramMap.get('id');

    this.getAllTodo();
    this.getActivity();
  }

  activityTitle: string = '';
  getActivity() {
    this.activityService.getActivity(this.activityId).subscribe((res) => {
      this.activityTitle = res.title;
    });
  }

  newActivityTitle = '';
  updateActivityName() {
    const data = {
      title: this.newActivityTitle,
    };

    if (this.newActivityTitle.length) {
      this.activityService.updateActivity(this.activityId, data).subscribe({
        next: (res) => {
          this.router.navigate(['/detail/' + this.activityId]);
        },
      });
    }
  }

  todo: any[] = [];
  activityId: any;

  getAllTodo = () => {
    this.todoService.getAllTodoList(this.activityId).subscribe((res) => {
      console.log(res.data);
      this.todo = res.data;
    });
  };

  showForm: boolean = false;
  setShowForm = () => {
    this.showForm = !this.showForm;
  };

  todoName: string = '';
  priority: any | string;

  selectPriority = [
    { type: 'Very High', color: 'bg-primary-red' },
    { type: 'High', color: 'bg-orange-400' },
    { type: 'Medium', color: 'bg-green-500' },
    { type: 'Low', color: 'bg-blue-600' },
    { type: 'Very Low', color: 'bg-purple-700' },
  ];

  createTodo = () => {
    const data = {
      title: this.todoName,
      activity_group_id: this.activityId,
    };

    if (this.todoName.length) {
      this.todoService.createTodo(data).subscribe({
        next: (res) => {
          this.getAllTodo();
        },
      });
    }

    this.setShowForm();
  };

  activateModal = (id: string): void => {
    this.todoService.getTodoList(id).subscribe((res) => {
      const deleteActivity = this.dialogRef.open(ModalPopupComponent, {
        data: {
          title: res.title,
          id: res.id,
          message: 'Apakah anda yakin menghapus list item',
        },
      });

      deleteActivity.afterClosed().subscribe(() => {
        this.todoService.deleteTodo(res.id).subscribe(() => this.getAllTodo());
      });
    });
  };
}
