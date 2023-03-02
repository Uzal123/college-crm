import AppLayout from "@/components/layout/AppLayout";
import Navbar from "@/components/navigation/Navbar";
import Topbar from "@/components/Topbar";
import Head from "next/head";
import { Fragment } from "react";

export default function AdminDashboard() {
  const studentData = {
    "Grade 9": 50,
    "Grade 10": 70,
    "Grade 11": 90,
    "Grade 12": 100,
  };

  const facultyData = {
    Science: 10,
    Math: 8,
    English: 6,
    "Social Studies": 4,
  };

  return (
    <AppLayout>

      
        <div className="flex-1">
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-bold mb-4">
                  Total number of students
                </h2>
                <p className="text-gray-500">2500</p>
              </div>
              <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-lg font-bold mb-4">
                  Total number of teachers
                </h2>
                <p className="text-gray-500">100</p>
              </div>
              <div className="bg-white p-6 shadow rounded-lg col-span-2">
                <h2 className="text-lg font-bold mb-4">
                  Recent login activity
                </h2>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">User</th>
                      <th className="text-left">Login Time</th>
                      <th className="text-left">IP Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>02/24/2023 10:30 AM</td>
                      <td>192.168.1.1</td>
                    </tr>
                    <tr>
                      <td>Jane Smith</td>
                      <td>02/24/2023 9:45 AM</td>
                      <td>192.168.1.2</td>
                    </tr>
                    <tr>
                      <td>Mark Johnson</td>
                      <td>02/23/2023 2:15 PM</td>
                      <td>192.168.1.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-6 shadow rounded-lg col-span-2">
                <h2 className="text-lg font-bold mb-4">School Calendar</h2>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left">Date</th>
                      <th className="text-left">Event</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>02/28/2023</td>
                      <td>Parent-Teacher Conference</td>
                    </tr>
                    <tr>
                      <td>03/03/2023</td>
                      <td>Professional Development Day (No School)</td>
                    </tr>
                    <tr>
                      <td>03/14/2023</td>
                      <td>Spring Break</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-white p-6 shadow rounded-lg col-span-2">
                <h2 className="text-lg font-bold mb-4">
                  Latest News and Announcements
                </h2>
                <ul className="list-disc pl-4">
                  <li>Open House is scheduled for April 15th, 2023</li>
                  <li>
                    The school's annual Science Fair will be held on May 5th,
                    2023
                  </li>
                  <li>
                    The school district is planning to introduce a new
                    curriculum next year
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 shadow rounded-lg col-span-2">
                <h2 className="text-lg font-bold mb-4">Graphs and Charts</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4">
                      Student Demographics
                    </h3>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-4">
                      Faculty Members by Department
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 shadow rounded-lg col-span-2">
                <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                <ul className="list-disc pl-4">
                  <li>
                    <a href="/manage-accounts">Manage User Accounts</a>
                  </li>
                  <li>
                    <a href="/create-course">Create New Course</a>
                  </li>
                  <li>
                    <a href="/set-schedule">Set Up Schedule</a>
                  </li>
                  <li>
                    <a href="/generate-reports">Generate Reports</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </AppLayout>
  );
}
