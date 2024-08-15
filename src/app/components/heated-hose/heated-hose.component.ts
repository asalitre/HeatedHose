import { Component, OnInit } from '@angular/core';
import { HeatedHoseService } from '../../services/heated-hose.service';
import { IHeatedHoseRecord } from '../../interface/IHeatedHoseRecord';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heated-hose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heated-hose.component.html',
  styleUrl: './heated-hose.component.css'
})
export class HeatedHoseComponent implements OnInit {

  heatedHose!: IHeatedHoseRecord;

  constructor(private heatedHoseService: HeatedHoseService) {}

  ngOnInit() {
    this.heatedHoseService.getHeatedHose('123456').subscribe(
      (response) => {
        this.heatedHose = response.data[0].record
        console.log(this.heatedHose)
      }
    )
  }

}
