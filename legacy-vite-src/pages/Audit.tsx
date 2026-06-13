import React from 'react';
import AuditForm from '../components/AuditForm';

export const Audit: React.FC = () => {
  return (
    <div style={{ paddingTop: '72px' }}>
      <AuditForm onSubmit={(data) => console.log('Audit submitted:', data)} />
    </div>
  );
};
