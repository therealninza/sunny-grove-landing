export const Stats = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-accent mb-2">90%</div>
            <div className="text-lg">Energy Cost Reduction</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-accent mb-2">365</div>
            <div className="text-lg">Days of Growing Season</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-accent mb-2">50t</div>
            <div className="text-lg">CO₂ Saved Annually</div>
          </div>
        </div>
      </div>
    </div>
  );
};