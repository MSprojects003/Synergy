 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Waste Management Solutions",
     
    description: "Comprehensive waste handling and disposal solutions designed to support  operational efficiency,envirmental responsibility, and regular compliance.",
    
    imageUrl: "https://thumbs.dreamstime.com/b/new-phone-model-captured-multiple-angles-ad-ready-layout-new-phone-model-captured-multiple-angles-ad-ready-layout-401654722.jpg",
    alt: "Smartphones",
  },
  {
    title: "Professional Janitorial Services",
    
    description: "End-to-end janitorial services that ensure a clean, healthy, and welcoming environment for your employees and visitors.",
     
    imageUrl: "https://thumbs.dreamstime.com/b/wireless-over-ear-headphones-vibrant-color-explosion-background-stylish-pair-showcased-against-dynamic-backdrop-366208760.jpg",
    alt: "Headphones",
  },
  {
    title: "Pop-up Vas ",
   
    description: "On-demand, short-term deployment of compliant teams for rapid on-site value-added services, including stickering for packaging, relabeling, rework, and other customized packaging and labeling requirements.",
    
    imageUrl: "https://m.media-amazon.com/images/I/81N1pwfMR6L._AC_UF1000,1000_QL80_.jpg",
    alt: "Speakers",
  },
  {
    title: "Event Management",
    
    description: "Professional coordination and execution of corporate and operational events with a focus on compliance, safety, and reliable delivery.",
   
    imageUrl: "https://thumbs.dreamstime.com/b/smartwatch-modern-design-digital-display-dark-background-featuring-showcased-against-ideal-themes-related-to-362622389.jpg",
    alt: "Smartwatches",
  },
  {
    title: "Customized Faculity Management",
     
    description: "Strategic workforce planning and technology-integrated solutions built around each client’s unique operational challenges and compliance needs.",
     
    imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2025/12/BEST-ANDROID-TABLETS-2048px-00133-2x1-1.jpg?auto=webp&quality=75&width=1200",
    alt: "Tablets",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container  ">
        {/* Professional Title + Subtitle */}
        <div className="text-left mb-2 md:mb-6">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground ">
            Our Services
          </h2>
          <p className="mt-3 md:mt-4 sub-text text-lg md:text-xl text-muted-foreground font-thin max-w-3xl mx-0">
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

        {/* Second row - unchanged (Smartwatches 2/5, Tablets 3/5) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Smartwatches */}
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

          {/* Tablets */}
          <Card className="lg:col-span-3 relative overflow-hidden group cursor-pointer h-64 md:h-80">
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
      </div>
    </section>
  );
}