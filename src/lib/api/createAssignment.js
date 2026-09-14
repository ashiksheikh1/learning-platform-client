const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
console.log(baseURL,"baseURLlllll")
export const createAssignment = async (assignment) => {
  console.log(assignment,"asssigmentttt")
  const res = await fetch(`${baseURL}/assignments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(assignment),
  });

  const data = await res.json();
console.log(data, "dataaaaa")
  return data;
};