import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.css'],
})
export class ModalPopupComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private activityService: ActivityService,
    private router: Router
  ) {
    this.deleteTitle = data.title;
    this.message = data.message;
    this.deleteId = data.id;
  }

  ngOnInit(): void {}

  deleteTitle: any;
  message: any;
  deleteId: any;
}
