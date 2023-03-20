import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private activityService: ActivityService) {}

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

  deleteTitle: string = '';
  deleteId: string = '';
  activateModal = (id: string) => {
    this.setShowDialog();
    this.activityService.getActivity(id).subscribe((res) => {
      this.deleteTitle = res.id;
      this.deleteTitle = res.title;
      return this.deleteId;
    });
  };

  handleDelete = () => {
    if (this.deleteId) {
      this.activityService.deleteActivity(this.deleteId).subscribe((res) => {
        this.getAllActivities();
      });

      console.log('first');
    }

    this.setShowDialog();
    this.setShowAlert();
  };
}
