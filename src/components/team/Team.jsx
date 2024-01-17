import React from 'react'
import {TEAM_HEADS_DETAILS, TEAM_MANAGERS_DETAILS, TEAM_MEMBERS_DETAILS2} from "./TeamDetails.js";
import './team.css'
import Loading from "@/app/loading";
import Member from "@/components/team/members/Member";
import Heading1 from "@/components/utilities/Heading1";
import RevealWrapper from "@/components/animations/RevealWrapper";

const LazyTeamCard = React.lazy(()=> import('./teamcard/TeamCard.jsx'))

const Team = () => {
  return (<>
    <React.Suspense fallback={<Loading />}>
      <div id={'team'}>
        <div className={'team-inner-container'}>
          <RevealWrapper>
            <Heading1>TEAM MANAGERS</Heading1>
          </RevealWrapper>
          <div className={'team-card-container'}>
            {TEAM_MANAGERS_DETAILS.map((person, index) => {
              return (<LazyTeamCard person={person} key={index}/>)
            })}
          </div>
          <RevealWrapper>
            <Heading1>TEAM HEADS</Heading1>
          </RevealWrapper>
          <div className={'team-card-container'}>
            {TEAM_HEADS_DETAILS.map((person, index) => {
              return (<LazyTeamCard person={person} key={index}/>)
            })}

            <Member members={TEAM_MEMBERS_DETAILS2}/>
          </div>
        </div>
      </div>
    </React.Suspense>
  </>)
}
export default Team
