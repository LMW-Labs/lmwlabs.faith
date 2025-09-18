import React from 'react';
import { ExternalLink, Github, Clock, Star } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-800 border-green-200';
      case 'development': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'planning': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'live': return 'Live';
      case 'development': return 'In Development';
      case 'planning': return 'Coming Soon';
      default: return 'Unknown';
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${project.featured ? 'ring-2 ring-purple-200' : ''}`}>
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="bg-purple-500 text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
              <Star className="w-3 h-3 fill-current" />
              Featured
            </div>
          </div>
        )}
        
        {/* Live Stats Overlay for Special Projects */}
        {project.id === 'threadripper' && (
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-2 text-white text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>{project.stats.threads?.toLocaleString()} analyzed</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-purple-600 font-medium">{project.subtitle}</p>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className={`flex items-center gap-1 px-2 py-1 bg-gray-50 rounded-md text-xs ${tech.color}`}>
                  <IconComponent className="w-3 h-3" />
                  <span className="text-gray-700">{tech.name}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Stats */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-lg">
            {Object.entries(project.stats).map(([key, value], index) => (
              <div key={index} className="text-center">
                <div className="font-bold text-gray-900 text-sm">{value}</div>
                <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-md text-xs font-medium">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          {project.links.demo && project.links.demo !== '#' && (
            <a 
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          )}
          {project.links.github && project.links.github !== '#' && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-300 hover:border-gray-400 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.status === 'planning' && (
            <div className="flex-1 bg-gray-100 text-gray-500 px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;