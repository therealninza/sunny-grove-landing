import { ArrowLeft, Bitcoin, Cpu, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Overview = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with back button */}
      <div className="bg-primary py-4">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      {/* Project overview hero */}
      <div className="bg-accent text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Rise Together First Nations</h1>
          <p className="text-xl mb-6 max-w-4xl">
            "Growing Together: An Indoor Community Garden for Haida Nation"
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Sun className="h-5 w-5 text-yellow-400" />
              <span className="text-white">Solar Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Cpu className="h-5 w-5 text-blue-400" />
              <span className="text-white">ASIC Mining</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Bitcoin className="h-5 w-5 text-orange-400" />
              <span className="text-white">Bitcoin Rewards</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <p className="text-lg mb-6">
              Imagine a space in Haida Gwaii where the community can come together year-round to grow fresh food, learn traditional practices, and strengthen bonds across generations. An indoor community garden could transform how Haida Gwaii connects with the land, preserves culture, and supports wellness—all in one green, thriving space.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Year-Round Access to Fresh Food</h2>
            <p className="mb-6">
              With an indoor garden, Haida Gwaii residents wouldn't have to rely on expensive, store-bought produce, especially during the colder months. Growing fresh vegetables and herbs indoors, right in the heart of the community, means healthy food is available no matter the season. This supports healthier lifestyles and food sovereignty, helping the community become more self-sufficient.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">A Living Classroom of Tradition and Knowledge</h2>
            <p className="mb-6">
              An indoor garden would be a perfect space for elders to pass down knowledge of traditional foods, native plants, and sustainable growing practices. Younger generations could learn hands-on about their heritage and gain valuable skills, from planting to harvesting. This garden wouldn't just grow food; it would cultivate cultural pride and a deep connection to Haida Gwaii's roots.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Strengthening Community Bonds</h2>
            <p className="mb-6">
              Gardens bring people together, and an indoor community garden would become a shared space for Haida Gwaii. Elders, youth, families, and friends could work side by side, creating stronger connections while contributing to something meaningful. It's a project where everyone's efforts, big or small, contribute to the whole community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">A Path to Wellness</h2>
            <p className="mb-6">
              There's a special kind of wellness that comes from working with plants. Even in winter, community members could come to the garden to relax, connect, and enjoy the peace of green surroundings. An indoor garden would provide a comforting space for mental wellness, giving people a place to gather and feel rejuvenated through nature.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">A Blend of Traditional and Modern Skills</h2>
            <p className="mb-6">
              Haida Gwaii's indoor community garden could blend traditional knowledge with modern growing techniques like hydroponics. Learning these methods provides valuable skills for future opportunities, whether in local food production, environmental work, or beyond. This isn't just gardening—it's equipping Haida Gwaii's future generations with knowledge and potential career paths.
            </p>
            <p className="mb-6">
              An indoor community garden for Haida Nation would be more than a project; it would be an investment in health, culture, and unity. Let's bring fresh food, tradition, and community connection to Haida Gwaii all year long, and watch the seeds of today grow into a stronger, healthier tomorrow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Research & Innovation</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="mb-4">
                Our approach is informed by cutting-edge research in sustainable food production. Data centers generate significant heat that can be repurposed for greenhouse heating, especially valuable in sub-arctic regions.
              </p>
              <a 
                href="https://www.sciencedirect.com/science/article/pii/S0360544220322763" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline transition-colors inline-flex items-center gap-2"
              >
                Read: "Data center heated greenhouses, a matter for enhanced food self-sufficiency in sub-arctic regions"
                <span className="text-xs">↗</span>
              </a>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Frog Chilling Greenhouse Project</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Local Organizations</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-2">Food to School Program</h4>
                    <p className="mb-2"><strong>Focus:</strong> Connecting schools with local farms to provide fresh, healthy food to students.</p>
                    <p className="mb-2"><strong>Activities:</strong> Local food sourcing, educational opportunities, community engagement, health benefits.</p>
                    <p><strong>Reach:</strong> Provide Haida Gwaiis locals schools with locally grown food</p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-xl font-bold mb-2">Islands Wellness Society (IWS)</h4>
                    <p className="mb-2"><strong>Focus:</strong> Providing various services to promote empowerment, overcome trauma, address violence, promote equality, and enrich the lives of children and families on Haida Gwaii.</p>
                    <p className="mb-2"><strong>Key Programs:</strong> Child Care Resource and Referral, Child and Youth Counselling (PEACE Program), Community-Based Victim Services/STV Outreach Program, Women's Counselling, Feed the People Food Bank.</p>
                    <p><strong>Location:</strong> Haida Gwaii</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Local Restaurants</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["Blacktail", "Axe and Anchor", "Haida House", "Angela's Gas Bar", 
                    "Bucksnort Cafe", "Gather", "Jag's", "626", 
                    "Co-op Grocery", "Causeway Convenience", "J&T's"].map((restaurant) => (
                    <div key={restaurant} className="bg-muted p-4 rounded-lg text-center">
                      <p className="font-medium">{restaurant}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Types of Foods</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-2">Vertical Gardening</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Cucumbers", "Tomatoes", "Bell Peppers", "Brassicas"].map((item) => (
                        <div key={item} className="bg-muted p-3 rounded-lg text-center">
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-2">Root Vegetables</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Potatoes", "Yams", "Carrots", "Onions", "Garlic"].map((item) => (
                        <div key={item} className="bg-muted p-3 rounded-lg text-center">
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-2">Fruits</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Berries", "Apples", "Nectarines", "Peaches", "Mangos", "Oranges", "Watermelon", "Cantaloupe"].map((item) => (
                        <div key={item} className="bg-muted p-3 rounded-lg text-center">
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-2">Hot Crops</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Avocado", "Jalapeno"].map((item) => (
                        <div key={item} className="bg-muted p-3 rounded-lg text-center">
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Income</h3>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="mb-4">
                    Income for the Frog Chilling Greenhouse Project is derived through the mining of Bitcoin. This mining process is carried out using computers powered by renewable energy sources. The heat generated by these computers is utilized to maintain a year-long growing environment in the greenhouse. This innovative approach not only ensures sustainability but also allows the food grown in the greenhouse to be subsidized by the mining income, resulting in prices that are near zero or even free.
                  </p>
                  <p>
                    Bitcoin mined at the greenhouse is kept in a treasury from which bounties are paid for work done inside the greenhouse. For example, a daily task like watering the plants is worth $50. Anyone who completes the task can claim the bounty, which is paid out in their choice of currency.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Open Source</h3>
                <div className="bg-muted p-6 rounded-lg">
                  <p>
                    The Frog Chilling Greenhouse Project and all its data will be open-sourced. This includes the structural design, heat capture engineering, solar output, food yield, and feedback. The aim is to allow others to copy and improve upon the project locally. The repository will be hosted on GitHub at (link to be provided).
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Community Feedback</h3>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="mb-4">
                    A crowdsourced greenhouse will require input on what food is grown. For this, a voting portal will be hosted for people to add feedback and input and allow for polling and voting on this feedback. For example, if a new fruit is loved in the community, a proposal can be put forward to add it to the greenhouse. Voting can be done online or in person and tallied in real time for users to see.
                  </p>
                  <p>
                    A dream for this project would be to have it gamified, similar to the popular game Stardew Valley, where people can work on the greenhouse virtually and add these improvements to the real-world structure.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Activities</h3>
                <div className="bg-muted p-6 rounded-lg">
                  <p className="mb-4">The greenhouse will be a hub of activity and community engagement. Here are some activities that can and will take place:</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    {["Dance Parties", "Yoga Sessions", "Tai Chi Classes", "Meditation Sessions", 
                      "Workshops", "Vinyl Night", "Pizza Night", "Weddings", "Festivals"].map((activity) => (
                      <div key={activity} className="bg-accent/10 p-3 rounded-lg text-center">
                        <p>{activity}</p>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mb-4">Other potential activities could include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Art Exhibitions: Showcasing local artists and their work.</li>
                    <li>Cooking Classes: Teaching healthy recipes using greenhouse-grown produce.</li>
                    <li>Community Meetings: Providing a space for local organizations and groups to meet.</li>
                    <li>Live Music Performances: Hosting local musicians and bands.</li>
                    <li>Educational Tours: Offering tours of the greenhouse for schools and community groups.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Overview;
