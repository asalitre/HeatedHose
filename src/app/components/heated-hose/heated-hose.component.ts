import { Component, OnInit } from '@angular/core';
import { HeatedHoseService } from '../../services/heated-hose.service';
import { IHeatedHoseRecord } from '../../interface/IHeatedHoseRecord';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heated-hose',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heated-hose.component.html',
  styleUrl: './heated-hose.component.css'
})
export class HeatedHoseComponent implements OnInit {

  heatedHose!: IHeatedHoseRecord;

  jobID!: string;

  constructor(private heatedHoseService: HeatedHoseService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.jobID = this.route.snapshot.params['id']

    this.heatedHoseService.getHeatedHose(this.jobID).subscribe(
      (response) => {
        this.heatedHose = response.data[0].record
        console.log(this.heatedHose)
      }
    )
  }

}
