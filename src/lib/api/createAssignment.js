const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
// console.log(baseURL,"baseURLlllll")
export const createAssignment = async (assignment) => {
  // console.log(assignment,"asssigmentttt")
  const res = await fetch(`${baseURL}/assignments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(assignment),
  });

  const data = await res.json();
// console.log(data, "dataaaaa")
  return data;
};

// getassignment alll
export const getAssignments = async () => {
  const res = await fetch(`${baseURL}/assignments`);

  if (!res.ok) {
    throw new Error("Failed to fetch assignments");
  }

  const data = await res.json();

  return data;
};

export const deleteAssignment = async (id) => {
  const res = await fetch(`${baseURL}/assignments/${id}`, {
    method: "DELETE",
  });

  const data = await res.json();

  // console.log(data, "delete assignment");

  return data;
};