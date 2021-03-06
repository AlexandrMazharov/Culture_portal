import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const AuthorBiography = ({text, biography}) => {
  const biographyArray = biography;
  return (
    <div>
      <h2 style = {{textAlign: 'center'}}>{text}</h2>
      <Timeline lineColor={'#ddd'}>
        {biographyArray.map((v, i) => {
          return (
            <TimelineItem
              key = {i}
              dateText = {v.year}
              style={{ color: '#34d1b2' }}
            >    
            <p>{v.description}</p>
            </TimelineItem>
          )
        })}      
      </Timeline>
    </div>    
  )
};

export default AuthorBiography;