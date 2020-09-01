import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
/*Empty array to add a new division*/
public lists = [];

/*Push text into a division*/
  public newAddedTask;


/*this function will not create a new division when the input is empty*/
  public addToLists()
  {
    if (this.newAddedTask == ''){

    }
    else{
      this.lists.push(this.newAddedTask);
      this.newAddedTask = '';
    }

  }
  
/*this function will delete the input/task selected*/
public deleteLists(num, lists){
  console.log("test", lists);
  if(confirm(`Are you sure to delete ${lists}?`)){
    this.lists.splice(num, 1);
  }

}
 

}
