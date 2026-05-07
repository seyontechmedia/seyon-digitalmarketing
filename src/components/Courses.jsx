import {
  Megaphone,
  BadgeDollarSign,
  ShoppingCart,
  BarChart3,
  PenTool,
  WalletCards,
  Search,
  Users,
} from "lucide-react";

const courseList = [
  {
    icon: <Megaphone size={34} />,
    title: "Social Media Ads",
    desc: "Master Facebook, Instagram, LinkedIn and YouTube advertising campaigns with audience targeting and ad optimization.",
  },

  {
    icon: <BadgeDollarSign size={34} />,
    title: "Google Ads",
    desc: "Learn Search Ads, Display Ads, YouTube Ads and keyword bidding strategies to generate quality leads.",
  },

  {
    icon: <ShoppingCart size={34} />,
    title: "Product Marketing & Landing Pages",
    desc: "Create high-converting landing pages, sales funnels and product marketing campaigns for businesses.",
  },

  {
    icon: <BarChart3 size={34} />,
    title: "Marketing Analytics",
    desc: "Track traffic, conversions and campaign performance using Google Analytics 4, GTM and reporting tools.",
  },

  {
    icon: <PenTool size={34} />,
    title: "Content Marketing",
    desc: "Learn content planning, blogging, copywriting and storytelling strategies that improve engagement.",
  },

  {
    icon: <WalletCards size={34} />,
    title: "Performance & Budget Allocation",
    desc: "Optimize ad spend, ROI and campaign scaling strategies with real-world performance marketing techniques.",
  },

  {
    icon: <Search size={34} />,
    title: "SEO Optimization",
    desc: "Understand technical SEO, on-page SEO, backlinks and ranking strategies to grow organic traffic.",
  },

  {
    icon: <Users size={34} />,
    title: "CRM & Lead Management",
    desc: "Manage customer journeys, automate follow-ups and improve lead nurturing using CRM tools.",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="courses-section py-5 bg-light"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <span className="section-tag">
            OUR COURSES
          </span>

          <h2 className="fw-bold display-5 mt-3">
            Digital Marketing Programs
          </h2>

          <p className="text-muted mt-3">
            Industry-focused practical training
            programs designed to help students,
            freelancers and business owners grow
            their digital skills.
          </p>
        </div>

        {/* Courses */}
        <div className="row g-4">
          {courseList.map((course, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={index}
            >
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
                  <button className="btn btn-primary mt-3">
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