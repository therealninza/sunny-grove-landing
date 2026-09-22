import { ArrowLeft, ArrowUpRight, Bitcoin, Cpu, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Overview = () => {
  return (
    <main className="forest min-h-screen">
      {/* Sticky header with back button */}
      <nav className="sticky top-0 z-50 bg-forest-panel/80 backdrop-blur-md border-b border-forest-border/60">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-panel-2 border border-forest-border text-forest-accent-bright hover:bg-forest-panel hover:border-forest-accent/40 font-medium transition-all"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="h-8 w-8 rounded-full bg-forest-panel-2 flex items-center justify-center border border-forest-border">
            <div className="w-3 h-3 rounded-full bg-forest-accent animate-pulse" />
          </div>
        </div>
      </nav>

      {/* Project overview hero */}
      <header className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,hsl(120_35%_16%),transparent)]" />
        <div className="max-w-5xl mx-auto relative">
          <h1 className="text-4xl md:text-6xl font-bold text-forest-text mb-4 tracking-tight">
            Rise Together <span className="text-forest-accent">First Nations</span>
          </h1>
          <p className="text-xl text-forest-muted max-w-2xl leading-relaxed">
            A community garden for Haida Gwaii and beyond!!!
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-1.5 rounded-full bg-forest-panel-2 border border-forest-border text-forest-accent-bright text-sm font-medium flex items-center gap-2">
              <Sun className="h-4 w-4" /> Solar Powered
            </span>
            <span className="px-4 py-1.5 rounded-full bg-forest-panel-2 border border-forest-border text-forest-accent-bright text-sm font-medium flex items-center gap-2">
              <Cpu className="h-4 w-4" /> ASIC Mining
            </span>
            <span className="px-4 py-1.5 rounded-full bg-forest-panel-2 border border-forest-border text-forest-accent-bright text-sm font-medium flex items-center gap-2">
              <Bitcoin className="h-4 w-4" /> Bitcoin Rewards
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-forest-panel border border-forest-border/60 h-auto p-1">
            <TabsTrigger
              value="overview"
              className="py-3 text-base data-[state=active]:bg-forest-panel-2 data-[state=active]:text-forest-accent-bright text-forest-muted"
            >
              Project Overview
            </TabsTrigger>
            <TabsTrigger
              value="bitcoin"
              className="py-3 text-base data-[state=active]:bg-forest-panel-2 data-[state=active]:text-forest-accent-bright text-forest-muted"
            >
              What is Bitcoin
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-12">
            <section>
              <p className="text-lg text-forest-text/90 leading-relaxed">
                Imagine a space in Haida Gwaii where the community can come together year-round to grow fresh food, learn traditional practices, and strengthen bonds across generations. An indoor community garden could transform how Haida Gwaii connects with the land, preserves culture, and supports wellness—all in one green, thriving space.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">Year-Round Access to Fresh Food</h2>
              <p className="text-forest-text/80 leading-relaxed">
                With an indoor garden, Haida Gwaii residents wouldn't have to rely on expensive, store-bought produce, especially during the colder months. Growing fresh vegetables and herbs indoors, right in the heart of the community, means healthy food is available no matter the season. This supports healthier lifestyles and food sovereignty, helping the community become more self-sufficient.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">A Living Classroom of Tradition and Knowledge</h2>
              <p className="text-forest-text/80 leading-relaxed">
                An indoor garden would be a perfect space for elders to pass down knowledge of traditional foods, native plants, and sustainable growing practices. Younger generations could learn hands-on about their heritage and gain valuable skills, from planting to harvesting. This garden wouldn't just grow food; it would cultivate cultural pride and a deep connection to Haida Gwaii's roots.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">Strengthening Community Bonds</h2>
              <p className="text-forest-text/80 leading-relaxed">
                Gardens bring people together, and an indoor community garden would become a shared space for Haida Gwaii. Elders, youth, families, and friends could work side by side, creating stronger connections while contributing to something meaningful. It's a project where everyone's efforts, big or small, contribute to the whole community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">A Path to Wellness</h2>
              <p className="text-forest-text/80 leading-relaxed">
                There's a special kind of wellness that comes from working with plants. Even in winter, community members could come to the garden to relax, connect, and enjoy the peace of green surroundings. An indoor garden would provide a comforting space for mental wellness, giving people a place to gather and feel rejuvenated through nature.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">A Blend of Traditional and Modern Skills</h2>
              <p className="mb-4 text-forest-text/80 leading-relaxed">
                Haida Gwaii's indoor community garden could blend traditional knowledge with modern growing techniques like hydroponics. Learning these methods provides valuable skills for future opportunities, whether in local food production, environmental work, or beyond. This isn't just gardening—it's equipping Haida Gwaii's future generations with knowledge and potential career paths.
              </p>
              <p className="text-forest-text/80 leading-relaxed">
                An indoor community garden for Haida Nation would be more than a project; it would be an investment in health, culture, and unity. Let's bring fresh food, tradition, and community connection to Haida Gwaii all year long, and watch the seeds of today grow into a stronger, healthier tomorrow.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">Research & Innovation</h2>
              <div className="bg-forest-panel p-6 md:p-8 rounded-2xl border border-forest-border/60 space-y-5">
                <p className="text-forest-text/80">
                  Our approach is informed by cutting-edge research in sustainable food production.
                </p>
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S0360544220322763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                >
                  Read: "Data center heated greenhouses, a matter for enhanced food self-sufficiency in sub-arctic regions"
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <div className="pt-2">
                  <a
                    href="/documents/energy-optimization-bitcoin-greenhouse.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Energy optimization of bitcoin mining integrated greenhouse with model predictive control" — Chen & You, Cornell University (Applied Energy, 2025)
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    MPC framework demonstrates up to 15% energy reduction and $1.5M annual profit potential for commercial-scale bitcoin-heated greenhouses.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/documents/energy-modeling-crypto-greenhouse.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Energy Modeling and Techno-Economic Feasibility Analysis of Greenhouses for Tomato Cultivation Utilizing the Waste Heat of Cryptocurrency Miners" — Asgari, McDonald & Pearce, Western University (Energies, 2023)
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    Quasi-steady state thermal model across 6 North American locations shows cryptocurrency waste heat can profitably offset natural gas greenhouse heating.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0378779625007874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Leveraging bitcoin mining machines in demand-response mechanisms to mitigate ramping-induced transients" (Electric Power Systems Research)
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    Demonstrates how flexible Bitcoin miners can act as fast demand-response loads, smoothing grid ramping events and supporting renewable integration.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/documents/energy-economic-environmental-crypto-mining.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Energy, economic and environmental impacts of cryptocurrency mining: a review of sustainable integration pathways in power systems"
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    Comprehensive review of how Bitcoin mining can be sustainably integrated into power systems alongside renewable generation.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0038092X25007820"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Techno-economic assessments of a cogeneration system of large-scale solar photovoltaic energy and Bitcoin cryptocurrency mining" (Solar Energy)
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    Shows how pairing large-scale solar PV with Bitcoin mining improves project economics and utilization of clean energy.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/documents/maximizing-roi-crypto-mining.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Maximizing Return on Investment in Cryptocurrency Mining Through Energy Optimization"
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    Energy optimization strategies that increase profitability and efficiency of cryptocurrency mining operations.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/documents/hybrid-hydropower-pv-mining.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Hybrid Hydropower–PV with Mining Flexibility and Heat Recovery: Article 6-Ready Mitigation Pathways in Central Asia"
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    Explores hybrid hydro+solar systems with flexible Bitcoin mining and waste-heat recovery as Paris Agreement Article 6 mitigation pathways.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="/documents/bitcoin-mining-irish-wind-flexibility.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                  >
                    Read: "Bitcoin mining as supply-side flexibility in Irish wind energy integration"
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>
                  <p className="text-sm text-forest-muted mt-1">
                    Examines how flexible Bitcoin mining loads can absorb curtailed wind generation and improve renewable integration on the Irish grid.
                  </p>
                </div>
                <div className="pt-4 border-t border-forest-border/60">
                  <p className="mb-3 font-semibold text-forest-text">Learn more about our project:</p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-forest-accent">
                    <li>
                      <a
                        href="https://bitcoin-greenhouse.gitbook.io/bitcoin-greenhouse-docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                      >
                        Bitcoin Greenhouse Documentation
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://keirnan.substack.com/p/hlkyakii-to-start-a-fire"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                      >
                        "ḥłk̓yak̓ii" - To Start a Fire
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.makotoshibuya.com/zero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                      >
                        Zero: A Case Study on Bitcoin & Net-Zero Carbon Projects
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facts.bitcoinbeyond66.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors inline-flex items-center gap-2"
                      >
                        Bitcoin Beyond — Facts & Research
                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-forest-text">Frog Chilling Greenhouse Project</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-text">Local Organizations</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-forest-panel p-6 rounded-2xl border border-forest-border/60 hover:border-forest-accent/40 transition-colors">
                      <h4 className="text-xl font-bold mb-2 text-forest-text">Food to School Program</h4>
                      <p className="mb-2 text-forest-text/80"><strong className="text-forest-text">Focus:</strong> Connecting schools with local farms to provide fresh, healthy food to students.</p>
                      <p className="mb-2 text-forest-text/80"><strong className="text-forest-text">Activities:</strong> Local food sourcing, educational opportunities, community engagement, health benefits.</p>
                      <p className="text-forest-text/80"><strong className="text-forest-text">Reach:</strong> Provide Haida Gwaiis locals schools with locally grown food</p>
                    </div>

                    <div className="bg-forest-panel p-6 rounded-2xl border border-forest-border/60 hover:border-forest-accent/40 transition-colors">
                      <h4 className="text-xl font-bold mb-2 text-forest-text">Islands Wellness Society (IWS)</h4>
                      <p className="mb-2 text-forest-text/80"><strong className="text-forest-text">Focus:</strong> Providing various services to promote empowerment, overcome trauma, address violence, promote equality, and enrich the lives of children and families on Haida Gwaii.</p>
                      <p className="mb-2 text-forest-text/80"><strong className="text-forest-text">Key Programs:</strong> Child Care Resource and Referral, Child and Youth Counselling (PEACE Program), Community-Based Victim Services/STV Outreach Program, Women's Counselling, Feed the People Food Bank.</p>
                      <p className="text-forest-text/80"><strong className="text-forest-text">Location:</strong> Haida Gwaii</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-text">Local Restaurants</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Blacktail", "Axe and Anchor", "Haida House", "Angela's Gas Bar",
                      "Bucksnort Cafe", "Gather", "Jag's", "626",
                      "Co-op Grocery", "Causeway Convenience", "J&T's"].map((restaurant) => (
                      <div key={restaurant} className="bg-forest-panel-2 border border-forest-border/60 p-4 rounded-lg text-center hover:border-forest-accent/40 transition-colors">
                        <p className="font-medium text-forest-text/90">{restaurant}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-text">Types of Foods</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-forest-accent-bright">Vertical Gardening</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Cucumbers", "Tomatoes", "Bell Peppers", "Brassicas"].map((item) => (
                          <div key={item} className="bg-forest-panel-2 border border-forest-border/60 p-3 rounded-lg text-center text-forest-text/90">
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-2 text-forest-accent-bright">Root Vegetables</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Potatoes", "Yams", "Carrots", "Onions", "Garlic"].map((item) => (
                          <div key={item} className="bg-forest-panel-2 border border-forest-border/60 p-3 rounded-lg text-center text-forest-text/90">
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-2 text-forest-accent-bright">Fruits</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Berries", "Apples", "Nectarines", "Peaches", "Mangos", "Oranges", "Watermelon", "Cantaloupe"].map((item) => (
                          <div key={item} className="bg-forest-panel-2 border border-forest-border/60 p-3 rounded-lg text-center text-forest-text/90">
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-2 text-forest-accent-bright">Hot Crops</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {["Avocado", "Jalapeno"].map((item) => (
                          <div key={item} className="bg-forest-panel-2 border border-forest-border/60 p-3 rounded-lg text-center text-forest-text/90">
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-text">Income</h3>
                  <div className="bg-forest-panel p-6 rounded-2xl border border-forest-border/60">
                    <p className="mb-4 text-forest-text/80 leading-relaxed">
                      Income for the Frog Chilling Greenhouse Project is derived through the mining of Bitcoin. This mining process is carried out using computers powered by renewable energy sources. The heat generated by these computers is utilized to maintain a year-long growing environment in the greenhouse. This innovative approach not only ensures sustainability but also allows the food grown in the greenhouse to be subsidized by the mining income, resulting in prices that are near zero or even free.
                    </p>
                    <p className="text-forest-text/80 leading-relaxed">
                      Bitcoin mined at the greenhouse is kept in a treasury from which bounties are paid for work done inside the greenhouse. For example, a daily task like watering the plants is worth $50. Anyone who completes the task can claim the bounty, which is paid out in their choice of currency.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-text">Open Source</h3>
                  <div className="bg-forest-panel p-6 rounded-2xl border border-forest-border/60">
                    <p className="text-forest-text/80 leading-relaxed">
                      The Frog Chilling Greenhouse Project and all its data will be open-sourced. This includes the structural design, heat capture engineering, solar output, food yield, and feedback. The aim is to allow others to copy and improve upon the project locally. The repository will be hosted on GitHub at (link to be provided).
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-text">Community Feedback</h3>
                  <div className="bg-forest-panel p-6 rounded-2xl border border-forest-border/60">
                    <p className="mb-4 text-forest-text/80 leading-relaxed">
                      A crowdsourced greenhouse will require input on what food is grown. For this, a voting portal will be hosted for people to add feedback and input and allow for polling and voting on this feedback. For example, if a new fruit is loved in the community, a proposal can be put forward to add it to the greenhouse. Voting can be done online or in person and tallied in real time for users to see.
                    </p>
                    <p className="text-forest-text/80 leading-relaxed">
                      A dream for this project would be to have it gamified, similar to the popular game Stardew Valley, where people can work on the greenhouse virtually and add these improvements to the real-world structure.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-text">Activities</h3>
                  <div className="bg-forest-panel p-6 rounded-2xl border border-forest-border/60">
                    <p className="mb-4 text-forest-text/80">The greenhouse will be a hub of activity and community engagement. Here are some activities that can and will take place:</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      {["Dance Parties", "Yoga Sessions", "Tai Chi Classes", "Meditation Sessions",
                        "Workshops", "Vinyl Night", "Pizza Night", "Weddings", "Festivals"].map((activity) => (
                        <div key={activity} className="bg-forest-panel-2 border border-forest-border/60 p-3 rounded-lg text-center text-forest-text/90">
                          <p>{activity}</p>
                        </div>
                      ))}
                    </div>

                    <p className="mb-4 text-forest-text/80">Other potential activities could include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-forest-text/80 marker:text-forest-accent">
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
          </TabsContent>

          <TabsContent value="bitcoin" className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">Bitcoin is the Mycelium of Money</h2>
              <div className="bg-forest-panel p-6 rounded-2xl border border-forest-border/60">
                <p className="text-lg text-forest-text/80 leading-relaxed mb-6">
                  Understanding Bitcoin is fundamental to understanding our project's vision. Just as mycelium networks connect and nourish entire ecosystems underground, Bitcoin creates a decentralized network that connects economic activity worldwide.
                </p>
                <p className="text-forest-text/80 leading-relaxed mb-6">
                  This insightful article by Brandon Quittem explores the deep parallels between Bitcoin and nature's most efficient networking system - mycelium. It illuminates why Bitcoin represents not just a new form of money, but a fundamental shift in how we think about value, networks, and resilience.
                </p>
                <a
                  href="https://brandonquittem.com/bitcoin-is-the-mycelium-of-money/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-forest-accent-bright hover:text-forest-accent underline decoration-forest-border underline-offset-4 transition-colors text-lg font-semibold"
                >
                  Read: "Bitcoin is the Mycelium of Money" by Brandon Quittem
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-forest-text">Why This Matters for Our Greenhouse</h2>
              <div className="space-y-4 text-forest-text/80 leading-relaxed">
                <p>
                  Our Bitcoin-powered greenhouse embodies these same principles of decentralization and resilience. By converting excess energy from Bitcoin mining into heat for food production, we're creating a symbiotic system that mirrors nature's efficiency.
                </p>
                <p>
                  Just as mycelium networks share resources and information across vast distances, Bitcoin enables value transfer and coordination without central control. Our project demonstrates how this technology can support sustainable, local food production while contributing to a global monetary network.
                </p>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Overview;
