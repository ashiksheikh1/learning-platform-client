import TotalAssignments from '@/components/Dashboard/TotalAssignments';
import { getAssignments } from '@/lib/api/createAssignment';

const studentTotalAssignmentPage = async() => {
 const allAssignment = await getAssignments()
    
//  console.log(assignment, "aaaaaaaaaaaaaaaaaa")
  return (
    <div>
      <TotalAssignments allAssignment={allAssignment}></TotalAssignments>
    </div>
  );
};

export default studentTotalAssignmentPage;