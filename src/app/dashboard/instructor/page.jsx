// import InstructorDashboard from '@/components/Dashboard/InstructorDashboard';
import InstructorDashboard from '@/components/Dashboard/InstructorDashboard';
import { getAssignments } from '@/lib/api/createAssignment';
import { getSubmissions } from '@/lib/api/submit-assignment-student';


const page = async() => {
 const allsubmision = await getSubmissions()
        const getAssignmentsAll = await getAssignments()
      // console.log(getAssignmentsAll, "aaaaaaaaaaaaaaaaaa")
     
  return (
    <div>
      <InstructorDashboard getAssignmentsAll={getAssignmentsAll} allsubmision={allsubmision}></InstructorDashboard>
    </div>
  );
};

export default page;