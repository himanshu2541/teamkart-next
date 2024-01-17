import React from 'react'
import Team from "@/components/team/Team";

export const metadata = {
  title: 'Team',
  description: 'Team Structure comprises of Undergraduate students from 1st to 5th years. Team Mentors : 4th & 5th years\n' +
    'Team Leader : 3rd year\n' +
    'Team Managers : 3rd year\n' +
    'Team Member : 2nd year\n' +
    'Trainee : 1st year',
}
const TeamPage = () => {
  return (
    <>
      <Team />
    </>
  )
}

export default TeamPage
