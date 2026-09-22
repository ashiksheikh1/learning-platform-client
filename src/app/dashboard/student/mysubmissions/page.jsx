
import MySubmissions from '@/components/Dashboard/MySubmission';
import { getSubmissions } from '@/lib/api/submit-assignment-student';


const mySubmissionPage = async() => {
   const submissions = await getSubmissions()
      
  //  console.log(assignment, "aaaaaaaaaaaaaaaaaa")
  return (
    <div>
      <MySubmissions submissions={submissions}></MySubmissions>
    </div>
  );
};

export default mySubmissionPage;