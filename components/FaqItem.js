import React from 'react';

const FaqItem = ({ title, content, isActive, onClick }) => {
  return (
    <div 
      className={`transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'bg-slate-200 rounded-lg' 
          : 'hover:bg-slate-200 hover:rounded-lg'
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg font-medium leading-tight">{title}</h3>
        <span className="ml-4">
          {isActive ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </span>
      </div>
      {isActive && (
        <div className="p-4 pt-0">
          <div className="text-gray-600">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
