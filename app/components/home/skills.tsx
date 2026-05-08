import React from 'react';

const Skills = () => {
  return (
    <div className={'relative flex min-h-screen w-full'}>
      {/* Fade-to-background overlay */}
      <div className="to-dark pointer-events-none absolute top-0 left-0 z-20 h-48 w-full bg-linear-to-t from-transparent" />
      <h2 className="text-4xl">SKILLS</h2>
    </div>
  );
};

export default Skills;
