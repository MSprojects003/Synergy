 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Innovative Smartphones",
    subtitle: "Infinite Possibilities",
    description: "Experience the Power of innovative smartphones",
    buttonText: "Explore Mobiles",
    imageUrl: "https://thumbs.dreamstime.com/b/new-phone-model-captured-multiple-angles-ad-ready-layout-new-phone-model-captured-multiple-angles-ad-ready-layout-401654722.jpg",
    alt: "Smartphones",
  },
  {
    title: "Audio Excellence Collection",
    subtitle: "Immerse Yourself in Sound",
    description: "Surround Yourself with Sound",
    buttonText: "All Headphones",
    imageUrl: "https://thumbs.dreamstime.com/b/wireless-over-ear-headphones-vibrant-color-explosion-background-stylish-pair-showcased-against-dynamic-backdrop-366208760.jpg",
    alt: "Headphones",
  },
  {
    title: "Immersive Speaker Collection",
    subtitle: "Surround Yourself with Sound",
    description: "Stay Connected, Stay Active",
    buttonText: "Browse Speakers",
    imageUrl: "https://m.media-amazon.com/images/I/81N1pwfMR6L._AC_UF1000,1000_QL80_.jpg",
    alt: "Speakers",
  },
  {
    title: "Futuristic Smartwatches",
    subtitle: "Stay Connected, Stay Active",
    description: "Elevate Your Productivity",
    buttonText: "Explore Smart Watches",
    imageUrl: "https://thumbs.dreamstime.com/b/smartwatch-modern-design-digital-display-dark-background-featuring-showcased-against-ideal-themes-related-to-362622389.jpg",
    alt: "Smartwatches",
  },
  {
    title: "Tablets",
    subtitle: "Elevate Your Productivity",
    description: "Explore our collection of Tablets that would boost your productivity.",
    buttonText: "Get a Tablet",
    imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2025/12/BEST-ANDROID-TABLETS-2048px-00133-2x1-1.jpg?auto=webp&quality=75&width=1200",
    alt: "Tablets",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container  ">
        {/* Professional Title + Subtitle */}
        <div className="text-left mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground ">
            Our Services
          </h2>
          <p className="mt-3 md:mt-4 text-lg md:text-xl text-muted-foreground font-thin max-w-3xl mx-0">
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
                  <p className="text-sm md:text-base opacity-90 mb-1 font-medium">{service.subtitle}</p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base opacity-80 line-clamp-3">{service.description}</p>
                </div>

                <div className="flex justify-end">
                  <a href={`/services/${service.alt.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-5 shadow-sm transition-all"
                    >
                      {service.buttonText}
                    </Button>
                  </a>
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
                <p className="text-sm md:text-base opacity-90 mb-1 font-medium">{services[3].subtitle}</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{services[3].title}</h3>
                <p className="text-sm md:text-base opacity-80 line-clamp-3">{services[3].description}</p>
              </div>

              <div className="flex justify-end">
                <a href={`/services/${services[3].alt.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button
                    variant="secondary"
                    className="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-5 shadow-sm transition-all"
                  >
                    {services[3].buttonText}
                  </Button>
                </a>
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
                <p className="text-sm md:text-base opacity-90 mb-1 font-medium">{services[4].subtitle}</p>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">{services[4].title}</h3>
                <p className="text-sm md:text-base opacity-80 line-clamp-3">{services[4].description}</p>
              </div>

              <div className="flex justify-end">
                <a href={`/services/${services[4].alt.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button
                    variant="secondary"
                    className="bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-5 shadow-sm transition-all"
                  >
                    {services[4].buttonText}
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}