import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalPopupComponent } from 'src/app/component/modal-popup/modal-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private activityService: ActivityService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllActivities();
  }

  activity: any[] = [];
  getAllActivities() {
    this.activityService.getActivities().subscribe((res) => {
      this.activity = res.data;
    });
  }

  createActivity() {
    const data = {
      title: 'baru baru',
      email: 'bayusarifudin@gmail.com',
    };

    this.activityService.createActivity(data).subscribe({
      next: (res) => {
        this.getAllActivities();
      },
    });
  }

  showDialog: boolean = false;
  showAlert: boolean = false;
  setShowDialog = () => {
    this.showDialog = !this.showDialog;
  };
  setShowAlert = () => {
    this.showAlert = !this.showAlert;
  };

  activateModal = (id: string): void => {
    this.activityService.getActivity(id).subscribe((res) => {
      const deleteActivity = this.dialogRef.open(ModalPopupComponent, {
        data: {
          title: res.title,
          id: res.id,
          message: 'Apakah anda yakin menghapus activity',
        },
      });

      deleteActivity.afterClosed().subscribe(() => {
        this.activityService
          .deleteActivity(res.id)
          .subscribe(() => this.getAllActivities());
        this.setShowAlert();
      });
    });
  };

  handleDelete = () => {
    console.log('first');

    this.setShowDialog();
    this.setShowAlert();
  };
}
