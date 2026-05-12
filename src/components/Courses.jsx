import {
  Inbox,
  BadgeDollarSign,

  BarChart3,
  PenTool,


  Search,
  Users,
  LineChart,
  Target,
  UserCircle,
  BrainCircuit,
  MessageCircle,
  Share2,
} from "lucide-react";

const courseList = [
  {
    icon: <BrainCircuit size={36} />,
    title: "AI Digital Marketing",
    desc: "Learn AI tools like ChatGPT, Canva AI for automation workflows and smart marketing strategies for faster growth.",
  },

  {
    icon: <Share2 size={36} />,
    title: "Social Media Marketing",
    desc: "Master Instagram, Facebook, YouTube and LinkedIn marketing to grow brands and engagement.",
  },

  {
    icon: <Target size={36} />,
    title: "Google Ads & Meta Ads",
    desc: "Run high-converting ad campaigns with targeting, optimization and scaling strategies.",
  },

  {
    icon: <Users size={36} />,
    title: "Lead Generation Techniques",
    desc: "Generate quality leads using ads, funnels, landing pages and organic methods.",
  },

  {
    icon: <BarChart3 size={36} />,
    title: "Sales Funnel Creation",
    desc: "Build complete funnels from awareness to conversion using proven marketing systems.",
  },

  {
    icon: <MessageCircle size={36} />,
    title: "WhatsApp Automation Marketing",
    desc: "Automate customer messaging, campaigns and follow-ups using WhatsApp tools.",
  },

  {
    icon: <Inbox size={36} />,
    title: "Email & Bulk Marketing",
    desc: "Create powerful email campaigns and bulk messaging strategies for customer retention.",
  },

  {
    icon: <PenTool size={36} />,
    title: "Content & Graphic Marketing",
    desc: "Design engaging creatives, branding posts and content strategies for marketing success.",
  },

  {
    icon: <Search size={36} />,
    title: "SEO Optimization",
    desc: "Improve website ranking with keyword research, backlinks and technical SEO.",
  },

  {
    icon: <UserCircle size={36} />,
    title: "LinkedIn Personal Branding",
    desc: "Build professional authority and attract clients through LinkedIn branding strategies.",
  },

 { icon: <LineChart size={36} />, title: "Marketing Analytics", desc: "Track traffic, conversions and campaign performance using Google Analytics 4, GTM and reporting tools.", },

  {
    icon: <BadgeDollarSign size={36} />,
    title: "Performance & Budget Allocation",
    desc: "Learn ROI optimization, ad budgeting and performance scaling techniques.",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="courses-section py-5 bg-light">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <span className="section-tag">
            OUR COURSES
          </span>

          <h2 className="fw-bold display-5 mt-3">
            AI Powered Digital Marketing Course Programs
          </h2>

          <p className="text-muted mt-3">
            The List of Course of Industry-ready training programs designed for students, freelancers and business owners.
          </p>

        </div>

        {/* Course Cards */}
        <div className="row g-4">

          {courseList.map((course, index) => (
            <div className="col-lg-3 col-md-6" key={index}>

              <div className="course-card card border-0 shadow-sm h-100">

                <div className="card-body p-4">

                  {/* Icon */}
                  <div className="course-icon mb-4">
                    {course.icon}
                  </div>

                  {/* Title */}
                  <h4 className="fw-bold mb-3">
                    {course.title}
                  </h4>

                  {/* Description */}
                  <p className="text-muted">
                    {course.desc}
                  </p>

                  {/* Button */}
                  <button className="btn btn-primary mt-3 w-100">
                    Explore Module
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Courses;