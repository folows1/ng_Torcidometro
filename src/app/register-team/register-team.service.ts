import { Injectable } from '@angular/core';
import { Team } from '../interfaces/team';

@Injectable({
    providedIn: 'root'
})

export class RegisterTeamService {
    private teamList: Team[] = []

    constructor() { }

    saveTeam(team: Team) {
        this.teamList.push(team)
    }

    getTeamList() {
        return this.teamList
    }
}