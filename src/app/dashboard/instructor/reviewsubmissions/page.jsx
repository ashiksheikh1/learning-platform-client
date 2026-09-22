import ReviewSubmissions from '@/components/Dashboard/ReviewSubmissions';
import { getSubmissions } from '@/lib/api/submit-assignment-student';



const SubmissionsPage = async() => {
    const submissions = await getSubmissions()
         
      // console.log(submissions, "aaaaaaaaaaaaaaaaaa")
    return (
        <div>
            
         <ReviewSubmissions assignments={submissions}></ReviewSubmissions>
             
             </div>
    );
};

export default SubmissionsPage;