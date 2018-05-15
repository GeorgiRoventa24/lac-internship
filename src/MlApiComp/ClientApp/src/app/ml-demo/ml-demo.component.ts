import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ml-demo',
  templateUrl: './ml-demo.component.html',
  styleUrls: ['./ml-demo.component.scss']
})
export class MlDemoComponent implements OnInit {

  status: string;
  image: string;
  demoList: string[];

  constructor() {
    this.status = "not selected";
    this.demoList = new Array<string>();
    this.demoList.push("hei 1");
    this.demoList.push("hei 3");

  }

  ngOnInit() {
  }
  onFileSelected($event) {
    this.status = $event.targetfiles[0];
    let reader = new FileReder();

    reader.onload = (e) => {  
      this.image = reder.result;
    }
    reader.readAsDataURL($event.targetfiles[0]);
  }

}
