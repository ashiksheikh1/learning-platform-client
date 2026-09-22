const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;
export const updateProfile = async (id, profileData) => {
    console.log(id, profileData)
  const res = await fetch(`${baseURL}/user/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
  });

  const data = await res.json();
console.log(data)
  return data;
};