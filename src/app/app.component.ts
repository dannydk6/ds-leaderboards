import { Component } from '@angular/core'

export interface TeamScore {
  rank: number
  team: string
  score: number
  lastSubmission: string
}

const TABLE: TeamScore[] = [
  { rank: 1, team: 'The Tigers', score: 35, lastSubmission: '8:00pm' },
  { rank: 2, team: 'The Engineers', score: 30, lastSubmission: '8:01pm' },
  { rank: 3, team: 'The Somethings', score: 22, lastSubmission: '7:48pm' },
  { rank: 4, team: 'The Song Team', score: 18, lastSubmission: '8:12pm' }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ds-leaderboards'
  displayedColumns: string[] = ['rank', 'team', 'score', 'lastSubmission']
  dataSource = TABLE
}
