import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import MainStats from '../components/models/stats/MainStats'
import Leagues from '../components/models/leagues/Leagues'
import League from '../components/models/leagues/League'
import Round from '../components/models/leagues/Round'
import Match from '../components/models/matches/Match'
import Teams from '../components/models/teams/Teams'
import Team from '../components/models/teams/Team'
import TeamInfo from '../components/models/teams/TeamInfo'
import TeamRoster from '../components/models/teams/TeamRoster'
import TeamCalendar from '../components/models/teams/TeamCalendar'
import Player from '../components/models/players/Player'

export default new Router({
  routes: [
    {
      path: '/stats',
      name: 'stats',
      component: MainStats
    },
    {
      path: '/leagues',
      name: 'leagues',
      component: Leagues
    },
    {
      path: '/leagues/:leagueId',
      name: 'league',
      component: League
    },
    {
      path: '/leagues/:leagueId/rounds/:roundId',
      name: 'round',
      component: Round
    },
    {
      path: '/matches/:matchId',
      name: 'match',
      component: Match
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/teams/:teamId',
      name: 'team',
      component: Team,
      children: [
        {
          path: '',
          component: TeamInfo
        },
        {
          path: 'roster',
          name: 'teamRoster',
          component: TeamRoster
        },
        {
          path: 'calendar',
          name: 'teamCalendar',
          component: TeamCalendar
        },
      ]
    },
    {
      path: '/players/:playerId',
      name: 'player',
      component: Player
    },
    {
      path: '*',
      redirect: '/teams'
    }
  ]
})
