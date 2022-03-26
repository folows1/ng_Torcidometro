import { Component, OnInit } from '@angular/core';
import { Team } from '../interfaces/team';
import { RegisterTeamService } from '../register-team/register-team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private registerTeamService: RegisterTeamService) { }

  teamList: Team[] = []
  mockTeam = [
    {
      name: 'Manchester United',
      nation: 'England',
      count: 0,
    },
    {
      name: 'Real Madrid',
      nation: 'Spain',
      count: 2,
    },
  ]

  ngOnInit(): void {
    this.teamList = this.registerTeamService.getTeamList()
    this.teamList.push(...this.mockTeam)
  }

  addCount(team: Team) {
    team.count += 1
  }

}
