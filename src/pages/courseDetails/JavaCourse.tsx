import {
  Code2,
  Server,
  Award,
  Briefcase,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function JavaCourse() {
  const technologies = [
    "Core Java",
    "Advanced Java",
    "Spring Boot",
    "Hibernate",
    "REST APIs",
    "React JS",
    "HTML & CSS",
    "JavaScript",
    "Bootstrap",
    "MySQL",
    "Git & GitHub",
    "AWS Basics",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Courses
          </Link>
        </div>

        {/* Hero Section */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 shadow-xl">
          <Code2 className="h-14 w-14 mb-4" />

          <h1 className="text-3xl font-bold leading-tight">
            Java Full Stack Development
          </h1>

          <p className="mt-4 text-base md:text-lg opacity-90 leading-7 max-w-3xl">
            Learn Core Java, Advanced Java, Spring Boot, Hibernate, REST APIs,
            React JS, MySQL, AWS, Git and real-world application development
            through hands-on projects and placement-focused training.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/20 rounded-xl p-3">
              <Server className="mb-2" />
              100 Days Training
            </div>

            <div className="bg-white/20 rounded-xl p-3">
              <Award className="mb-2" />
              Certification
            </div>

            <div className="bg-white/20 rounded-xl p-3">
              <Briefcase className="mb-2" />
              Placement Support
            </div>

            <div className="bg-white/20 rounded-xl p-3">
              <Code2 className="mb-2" />
              Live Projects
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* Technologies */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              Technologies Covered
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-blue-50 rounded-lg px-3 py-2 text-sm font-medium"
                >
                  ✓ {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-3">
                Projects
              </h2>

              <ul className="space-y-2">
                <li>✔ Online Banking System</li>
                <li>✔ E-Commerce Application</li>
                <li>✔ Employee Management System</li>
                <li>✔ REST API Development</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-3">
                Career Roles
              </h2>

              <p>
                Java Full Stack Developer • Backend Java Developer •
                Software Engineer • Web Application Developer •
                API Developer • Cloud Application Developer
              </p>
            </div>

          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-indigo-700 rounded-3xl text-white text-center p-8">
          <h2 className="text-2xl font-bold">
            Build a High-Paying Java Career
          </h2>

          <p className="mt-3 text-base opacity-90">
            Java • Spring Boot • React • MySQL • Git • AWS
          </p>
        </div>

      </div>
    </div>
  );
}