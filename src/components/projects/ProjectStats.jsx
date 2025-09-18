import React from 'react';

const ProjectStats = ({ projects }) => {
  const stats = [
    {
      value: projects.length,
      label: 'Total Projects',
      color: 'text-purple-600'
    },
    {
      value: projects.filter(p => p.status === 'live').length,
      label: 'Live Projects',
      color: 'text-green-600'
    },
    {
      value: projects.filter(p => p.status === 'development').length,
      label: 'In Development',
      color: 'text-blue-600'
    },
    {
      value: projects.filter(p => p.status === 'planning').length,
      label: 'Coming Soon',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats;