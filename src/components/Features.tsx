import { Sun, Leaf, Bitcoin, Cpu } from "lucide-react";

const features = [
  {
    icon: <Sun className="h-8 w-8 text-accent" />,
    title: "Solar Integration",
    description: "Innovative solar panel roofing system powers our entire operation while providing optimal growing conditions.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-accent" />,
    title: "ASIC Mining",
    description: "Heat generated from our mining operations maintains perfect growing temperatures while earning Bitcoin.",
  },
  {
    icon: <Bitcoin className="h-8 w-8 text-accent" />,
    title: "Bitcoin Rewards",
    description: "Contributors receive Bitcoin rewards from our mining operations, creating a sustainable investment model.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-accent" />,
    title: "Year-Round Production",
    description: "Controlled environment enables 365 days of food production, maximizing efficiency and output.",
  },
];

export const Features = () => {
  return (
    <div className="bg-primary py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Our Innovative Approach
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