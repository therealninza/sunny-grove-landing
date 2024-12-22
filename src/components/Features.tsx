import { Sun, Leaf, Battery, Droplets } from "lucide-react";

const features = [
  {
    icon: <Sun className="h-8 w-8 text-accent" />,
    title: "Solar Powered",
    description: "100% renewable energy from the sun, reducing operational costs and environmental impact.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-accent" />,
    title: "Optimal Growing",
    description: "Advanced climate control for year-round cultivation of various crops.",
  },
  {
    icon: <Battery className="h-8 w-8 text-accent" />,
    title: "Energy Storage",
    description: "Integrated battery systems ensure 24/7 operation, even during cloudy days.",
  },
  {
    icon: <Droplets className="h-8 w-8 text-accent" />,
    title: "Water Efficient",
    description: "Smart irrigation systems reduce water consumption by up to 90%.",
  },
];

export const Features = () => {
  return (
    <div className="bg-primary py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Why Choose Solar Greenhouses?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};