import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import propertyImage from "@/assets/property-layout.png";

const PropertyLayout = () => {
  const areas = [
    {
      id: "green",
      name: "Greenhouse",
      color: "border-green-500",
      description: "Our main greenhouse facility where we grow fresh produce year-round using heat from Bitcoin mining operations."
    },
    {
      id: "yellow",
      name: "Orchard",
      color: "border-yellow-400",
      description: "Fruit orchard featuring native and adapted species for sustainable food production."
    },
    {
      id: "orange",
      name: "Mill",
      color: "border-orange-400",
      description: "Processing and milling area for our harvested crops and traditional food preparation."
    },
    {
      id: "purple",
      name: "Paintball Field",
      color: "border-purple-400",
      description: "Recreational paintball field area for community events and outdoor activities."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Property Layout</h1>
          <p className="text-lg text-foreground/70 mt-2">
            Explore the different areas of our 5,521 m² (59,429 ft²) property
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Property Image */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Aerial View</CardTitle>
                <CardDescription>
                  310.65 m total distance | 5,521.18 m² total area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={propertyImage} 
                    alt="Aerial view of property layout showing greenhouse, mill, orchard, and paintball field areas" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Each colored box represents a different area of our property. Virtual tours coming soon!
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Area Descriptions */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Property Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {areas.map((area) => (
                <Card key={area.id} className={`border-l-4 ${area.color}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded border-2 ${area.color}`}></div>
                      {area.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Future Plans */}
          <section>
            <Card className="bg-muted">
              <CardHeader>
                <CardTitle>Coming Soon: Virtual Tours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">
                  We're working on creating immersive virtual tours of each area so you can explore our property from anywhere in the world. Stay tuned for updates!
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PropertyLayout;
