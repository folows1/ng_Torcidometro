import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Team } from '../interfaces/team';
import { RegisterTeamService } from '../register-team/register-team.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {

  constructor(private registerTeamService: RegisterTeamService) { }

  newTeam: Team = {} as Team
  teamList: Team[] = []

  saveData(form: NgForm) {
    this.newTeam.count = 0
    this.registerTeamService.saveTeam(this.newTeam)
    this.newTeam = {} as Team
    form.resetForm()
  }

  checkNation() {
    const index = this.registerTeamService.getTeamList().findIndex(d => d.nation === this.newTeam.nation && d.name === this.newTeam.name)
    return index !== -1
  }

  ngOnInit(): void {
  }

}
