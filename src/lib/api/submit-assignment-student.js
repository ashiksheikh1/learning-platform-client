const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// Submit assignment
export const submitAssignment = async (submission) => {

  const res = await fetch(`${baseURL}/submissions`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
         Authorization: "Bearer",
    },

    body: JSON.stringify(submission),
  });

  const data = await res.json();

  return data;
};


// getSubmissions alll
export const getSubmissions = async () => {
  const res = await fetch(`${baseURL}/submissions`);

  if (!res.ok) {
    throw new Error("Failed to fetch submissions");
  }

  const data = await res.json();

  return data;
};

// Get single submission
export const getSubmissionById = async (id) => {

  const res = await fetch(
    `${baseURL}/submissions/${id}`
  );

  const data = await res.json();
console.log(data)
  return data;
};



// Instructor review
export const updateSubmissionReview = async (
  id,
  reviewData
) => {

  const res = await fetch(
    `${baseURL}/submissions/${id}/review`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(reviewData),
    }
  );

  const data = await res.json();

  return data;
};