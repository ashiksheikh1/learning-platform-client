import StudentHomePage from '@/components/Dashboard/StudentHomePage';
import { getSubmissions } from '@/lib/api/submit-assignment-student';


const OverViewPage = async() => {
    const submissions = await getSubmissions()
        
    //  console.log(assignment, "aaaaaaaaaaaaaaaaaa")
  return (
    <div>
      <StudentHomePage submissions={submissions}></StudentHomePage>
    </div>
  );
};

export default OverViewPage;