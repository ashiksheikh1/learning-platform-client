import Link from "next/link";

export default function ReviewSubmissions({ assignments }) {
 
  const getStatusStyle = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700 border border-green-200";

      case "Needs Improvement":
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";

      case "Pending":
        return "bg-gray-100 text-gray-700 border border-gray-200";

      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
    }
  };

  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-[1000px] text-left">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Student
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Assignment
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Submitted
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Status
            </th>

            <th className="px-6 py-4 text-sm font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {assignments?.map((item, index) => (
            <tr
              key={item._id || index}
              className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
            >
              {/* Student */}
              <td className="px-6 py-5">
                <div>
                  <p className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {item.user?.name}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {item.user?.email}
                  </p>
                </div>
              </td>

              {/* Assignment */}
              <td className="px-6 py-5">
                <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                  {item.assignmentId}
                </span>
              </td>

              {/* Submitted */}
              <td className="px-6 py-5">
                <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
                  {item.submittedAt}
                </span>
              </td>

              {/* Status */}
              <td className="px-6 py-5">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </td>

              {/* Action */}
              <td className="px-6 py-5">
                <Link
                  href={`/dashboard/instructor/reviewsubmissions/${item._id}`}
                  className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
                >
                  View Work
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}