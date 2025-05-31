import { Component,OnInit } from '@angular/core';
import{CommonModule} from '@angular/common'; // Importing CommonModule for common directives like ngIf, ngFor, etc.
import{DataService} from '../data.service';
import { User } from '../models/user.model'; // Import the User model


@Component({
  selector: 'app-home',
  standalone: true,
  // Note: The `imports` array is empty because this component does not use any other components or modules.
  // The component is standalone, so we don't need to import it into a module
  // and we can use it directly in the template of other components.  
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ✅ Corrected this line
})
export class HomeComponent implements OnInit {
  users : any[] = [];
  constructor(private dataService: DataService) { }
  ngOnInit() {
     this.dataService.getUsers().subscribe(
    (data: User[]) => {
      this.users = data;
      console.log(this.users);  // Log to see if data is received
    },
    (error) => {
      console.error('Error fetching users:', error);
    }
  );
  
  }
   editUser(user: User) {
    console.log('Editing user:', user);
    // You can open a modal, navigate to a route, or show an inline form
  }
}
