import AnalyticsChart from '@/components/AnalyticsChart';
import { getAssignments } from '@/lib/api/createAssignment';
import { getSubmissions } from '@/lib/api/submit-assignment-student';
import React from 'react';

const AnalyticsPage = async() => {
  const allsubmision = await getSubmissions()
          const getAssignmentsAll = await getAssignments()
          
  return (
    <div>
      <AnalyticsChart allsubmision={allsubmision} getAssignmentsAll={getAssignmentsAll}></AnalyticsChart>
    </div>
  );
};

export default AnalyticsPage;