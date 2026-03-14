import { Card, CardContent } from "@/components/ui/card";
import service1 from "@/assets/pictures/service/service1.jpeg"
import service2 from "@/assets/pictures/service/service2.jpeg"
import service3 from "@/assets/pictures/service/service3.jpeg"
import service4 from "@/assets/pictures/service/service4.jpeg" 
import service5 from "@/assets/pictures/service/service5.jpeg"
import service6 from "@/assets/pictures/about1.jpeg"

const services = [
  {
    title: "WORKFORCE SUPPLY & MANAGEMENT",
    description: "Flexible deployment of skilled, verified, and complianceready workers tailored to meet the evolving demands of logistics operations.",
    imageUrl: service5,
  },
  {
    title: "Waste Management Solutions",
    description: "Comprehensive waste handling and disposal solutions designed to support  operational efficiency,envirmental responsibility, and regular compliance.",
    imageUrl: service4,
    alt: "Smartphones",
  },
  {
    title: "Professional Janitorial Services",
    description: "End-to-end janitorial services that ensure a clean, healthy, and welcoming environment for your employees and visitors.",
    imageUrl: service3,
    alt: "Headphones",
  },
  {
    title: "Pop-up Vas ",
    description: "On-demand, short-term deployment of compliant teams for rapid on-site value-added services, including stickering for packaging, relabeling, rework, and other customized packaging and labeling requirements.",
    imageUrl: service2,
    alt: "Speakers",
  },
  {
    title: "Event Management",
    description: "Professional coordination and execution of corporate and operational events with a focus on compliance, safety, and reliable delivery.",
    imageUrl: service6,
    alt: "Smartwatches",
  },
  {
    title: "Customized Facility Management",
    description: "Strategic workforce planning and technology-integrated solutions built around each client's unique operational challenges and compliance needs.",
    imageUrl: service1,
    alt: "Tablets",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container  ">
        {/* Professional Title + Subtitle */}
        <div className="text-left mb-2 md:mb-6">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-[#059587] ">
            Our Services
          </h2>
          <p className="mt-3 md:mt-4 sub-text text-lg md:text-xl text-[#066057] font-thin max-w-3xl mx-0">
            Empowering your lifestyle with cutting-edge technology solutions
          </p>
        </div>

        {/* First row - 3 cards with custom approximate widths (32% / 35% / 33%) */}
        <div className="flex flex-col lg:flex-row gap-6 mb-6 lg:mb-8">
          {services.slice(0, 3).map((service, index) => (
            <Card
              key={index}
              className={`
                relative overflow-hidden group cursor-pointer h-64 md:h-80 flex-1 
                ${index === 0 ? "lg:basis-[30%]" : ""}
                ${index === 1 ? "lg:basis-[45%]" : ""}
                ${index === 2 ? "lg:basis-[25%]" : ""}
                transition-all duration-300 hover:shadow-xl
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.imageUrl}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <CardContent className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white z-10">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base opacity-80 line-clamp-3">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="flex flex-col lg:flex-row gap-6 mb-6 lg:mb-8">
          {services.slice(3, 6).map((service, index) => (
            <Card
              key={index}
              className={`
                relative overflow-hidden group cursor-pointer h-64 md:h-80 flex-1 
                ${index === 4 ? "lg:basis-[40%]" : ""}
                ${index === 5 ? "lg:basis-[33%]" : ""}
                ${index === 6 ? "lg:basis-[27%]" : ""}
                transition-all duration-300 hover:shadow-xl
              `}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.imageUrl}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Content */}
              <CardContent className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white z-10">
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base opacity-80 line-clamp-3">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second row - (Pop-up Vas 2/5, Event Management 3/5) 
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 lg:mb-8">
          {/* Pop-up Vas 
          <Card className="lg:col-span-2 relative overflow-hidden group cursor-pointer h-64 md:h-80">
            <div className="absolute inset-0">
              <img
                src={services[3].imageUrl}
                alt={services[3].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <CardContent className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white z-10">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{services[3].title}</h3>
                <p className="text-sm md:text-base opacity-80 line-clamp-3">{services[3].description}</p>
              </div>
            </CardContent>
          </Card>

        
          <Card className="lg:col-span-3 relative overflow-hidden group cursor-pointer h-72 md:h-80">
            <div className="absolute inset-0">
              <img
                src={services[4].imageUrl}
                alt={services[4].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <CardContent className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white z-10">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{services[4].title}</h3>
                <p className="text-sm md:text-base opacity-80 line-clamp-3">{services[4].description}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Third row - Customized Facility Management (full width) */}
      {/* Third row - Customized Facility Management (full width) 
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
  <Card className="lg:col-span-5 relative overflow-hidden group cursor-pointer h-96 md:h-[28rem]">  <div className="absolute inset-0">
              <img
                src={services[5].imageUrl}
                alt={services[5].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>

            <CardContent className="relative h-full flex flex-col justify-between p-6 md:p-8 text-white z-10">
              <div> 
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{services[5].title}</h3>
                <p className="text-sm md:text-base opacity-80 line-clamp-3">{services[5].description}</p>
              </div> 
            </CardContent>
          </Card>
        </div>*/}

      </div>
    </section>
  );
}