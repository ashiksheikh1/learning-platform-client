import ManageAssignments from "@/components/Dashboard/ManageAssignments";
import { getSubmissions } from '@/lib/api/submit-assignment-student';


const ManageAssignmentPage = async() => {
  const assignment = await getSubmissions()
    
//  console.log(assignment, "aaaaaaaaaaaaaaaaaa")

  
  return (
    <div>
        <ManageAssignments assignment={assignment}></ManageAssignments>
    </div>
  );
};

export default ManageAssignmentPage;