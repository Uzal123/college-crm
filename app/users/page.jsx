import React from "react";
import AppLayout from "@/components/layout/AppLayout";

const page = () => {
  const data = [
    {
      name: "John Smith",
      email: "johnsmith@example.com",
      phone: "123-456-7890",
      grade: "A",
      rollNo: "001",
      status: "Active",
    },
    {
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: "555-555-5555",
      grade: "B",
      rollNo: "002",
      status: "Inactive",
    },
    {
      name: "Bob Johnson",
      email: "bjohnson@example.com",
      phone: "555-123-4567",
      grade: "B+",
      rollNo: "003",
      status: "Active",
    },
    {
      name: "Sarah Thompson",
      email: "sthompson@example.com",
      phone: "555-987-6543",
      grade: "C",
      rollNo: "004",
      status: "Inactive",
    },
    {
      name: "David Lee",
      email: "dlee@example.com",
      phone: "555-555-1234",
      grade: "A+",
      rollNo: "005",
      status: "Active",
    },
    {
      name: "Emily Chen",
      email: "echen@example.com",
      phone: "555-789-1234",
      grade: "B",
      rollNo: "006",
      status: "Inactive",
    },
    {
      name: "Michael Kim",
      email: "mkim@example.com",
      phone: "555-222-3333",
      grade: "C+",
      rollNo: "007",
      status: "Active",
    },
    {
      name: "Linda Rodriguez",
      email: "lrodriguez@example.com",
      phone: "555-111-2222",
      grade: "A",
      rollNo: "008",
      status: "Inactive",
    },
    {
      name: "Tom Baker",
      email: "tbaker@example.com",
      phone: "555-555-7777",
      grade: "B-",
      rollNo: "009",
      status: "Active",
    },
    {
      name: "Karen Chen",
      email: "kchen@example.com",
      phone: "555-444-5555",
      grade: "C-",
      rollNo: "010",
      status: "Inactive",
    },
    {
      name: "Chris Davis",
      email: "cdavis@example.com",
      phone: "555-333-2222",
      grade: "B+",
      rollNo: "011",
      status: "Active",
    },
    {
      name: "Rachel Green",
      email: "rgreen@example.com",
      phone: "555-111-1111",
      grade: "A",
      rollNo: "012",
      status: "Inactive",
    },
    {
      name: "George Harrison",
      email: "gharrison@example.com",
      phone: "555-444-6666",
      grade: "C+",
      rollNo: "013",
      status: "Active",
    },
    {
      name: "Catherine Smith",
      email: "csmith@example.com",
      phone: "555-888-9999",
      grade: "B-",
      rollNo: "014",
      status: "Inactive",
    },
  ];
  return (
    <AppLayout>
      <div className="flex w-full p-6">
        <div className="bg-secondary w-full p-6 rounded-lg">
          <div className="flex justify-between p-2 w-full ">
            <div className="flex gap-4 font-semibold text-lg text-light">
              <button className="border-b-2 text-xl ">Students</button>
              <button>Teachers</button>
            </div>
            <div>
              <button className="bg-main px-10 py-2 font-semibold text-light rounded-lg">
                Add new student
              </button>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search for students"
              className="p-2 rounded-lg w-full"
            />
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">USN</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Phone</th>
                  <th className="px-4 py-2">Grade</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "" : ""}>
                    <td className="border px-4 py-2">{item.rollNo}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.phone}</td>
                    <td className="border px-4 py-2">{item.grade}</td>
                    <td className="border px-4 py-2">{item.email}</td>
                    <td className="border px-4 py-2">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default page;
