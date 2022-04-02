import { Component, OnInit } from '@angular/core';
import { Team } from '../interfaces/team';
import { RegisterTeamService } from '../register-team/register-team.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private registerTeamService: RegisterTeamService) { }
  votes: number[] = []
  teamsName: string[] = []
  teamList: Team[] = []
  chartID: Chart = {} as Chart

  options: any = {
    responsive: true,
    indexAxis: 'y',
    maintainAspectRatio: false,
    scale: {
      ticks: {
        precision: 0
      },
    }
  }


  ngOnInit(): void {
    this.teamList = this.registerTeamService.getTeamList()
    if (this.teamList.length > 0) {
      this.buildChart();
    }
  }

  addCount(team: Team) {
    team.count += 1
    this.renderChart()
  }

  populateArray() {
    this.votes = []
    this.teamsName = []
    this.teamList.forEach(team => {
      this.votes.push(team.count)
      this.teamsName.push(team.name)
    })
  }

  buildChart() {
    this.populateArray()
    this.chartID = new Chart('chartID', {
      type: 'bar',
      data: {
        labels: this.teamsName,
        datasets: [{
          label: 'Votos Por Time',
          data: this.votes,
          borderWidth: 1,
          backgroundColor: 'lightgreen',
          borderColor: 'green',
          hoverBorderWidth: 3,
          hoverBorderColor: 'black',
          hoverBackgroundColor: 'lightgreen'
        }]
      },
      options: this.options
    });
  }

  renderChart() {
    this.chartID.destroy()
    this.buildChart()
  }
}
