import React from 'react';
import { CoursePart } from '../types';

const Content = ({ courseParts }: { courseParts: Array<CoursePart> }) => (
  <div>
    {courseParts.map((p) => (<p key={p.name}>{p.name} {p.exerciseCount}</p>))}
  </div>
);

export default Content;
