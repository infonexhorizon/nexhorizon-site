import { Cloud, Server, Award, Briefcase, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function DevOpsCourse() {
  const tools = [
    "Linux","Git","Docker","Kubernetes","Jenkins","Terraform",
    "Ansible","AWS","Azure","Google Cloud","Prometheus","Grafana"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12">
  <div className="max-w-6xl mx-auto px-6">

    <div className="mb-6">
      <Link
        to="/courses"
        className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Courses
      </Link>
    </div>

        <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-red-600 text-white p-10 shadow-xl">
          <Cloud className="h-14 w-14 mb-4"/>
          <h1 className="text-3xl font-bold leading-tight">DevOps with Multi-Cloud & AI</h1>
          <p className="mt-4 text-base md:text-lg opacity-90 leading-7 max-w-3xl">
            Learn modern DevOps practices with Docker, Kubernetes, CI/CD,
            Terraform, Jenkins, AWS, Azure and Google Cloud through
            real-time projects, cloud automation and production deployments.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/20 rounded-xl p-3"><Server className="mb-2"/>Live Labs</div>
            <div className="bg-white/20 rounded-xl p-3"><Award className="mb-2"/>Certification</div>
            <div className="bg-white/20 rounded-xl p-3"><Briefcase className="mb-2"/>Placement Support</div>
            <div className="bg-white/20 rounded-xl p-3"><Cloud className="mb-2"/>Multi Cloud</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Technologies Covered</h2>

            <div className="grid grid-cols-2 gap-3">
              {tools.map((t)=>(
                <div key={t} className="bg-orange-50 rounded-lg px-3 py-2 text-sm font-medium">
                  ✓ {t}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-3">Projects</h2>
              <ul className="space-y-2">
                <li>✔ CI/CD Pipeline</li>
                <li>✔ Kubernetes Deployment</li>
                <li>✔ Multi-Cloud Infrastructure</li>
                <li>✔ Monitoring Dashboard</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-3">Career Roles</h2>
              <p>
                DevOps Engineer • Cloud Engineer • SRE • Platform Engineer •
                Kubernetes Engineer • Automation Engineer
              </p>
            </div>

          </div>

        </div>

        <div className="mt-10 bg-red-600 rounded-3xl text-white text-center p-8">
          <h2 className="text-2xl font-bold">Build a High-Paying Cloud Career</h2>
          <p className="mt-3 text-base opacity-90">
            Docker • Kubernetes • Terraform • Jenkins • AWS • Azure • GCP
          </p>

        </div>

      </div>
    </div>
  );
}