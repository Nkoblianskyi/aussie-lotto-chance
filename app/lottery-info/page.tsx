import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Trophy, Users, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LotteryInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      <Header />

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-lime-400 to-green-500 bg-clip-text text-transparent mb-6">
              Australian Lottery Information
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover everything you need to know about Australian lottery games, ticket types, and how the draws work.
            </p>
          </div>

          {/* Available Tickets Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Available Ticket Types</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Standard Entry",
                  description: "Choose your own numbers for the draw",
                  features: ["Select 6 numbers", "Multiple game options", "Regular draws"],
                },
                {
                  title: "QuickPick",
                  description: "Let the system randomly select your numbers",
                  features: ["Automatic selection", "Quick and easy", "Random combinations"],
                },
                {
                  title: "System Entry",
                  description: "Play more numbers for increased chances",
                  features: ["Multiple combinations", "Higher coverage", "Better odds"],
                },
              ].map((ticket, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 border-lime-500/30 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{ticket.title}</h3>
                    <p className="text-gray-300 mb-4">{ticket.description}</p>
                    <ul className="space-y-2">
                      {ticket.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-center">
                          <Trophy className="w-4 h-4 text-lime-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Prize Information Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Prize Structure</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 border-lime-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Division Prizes</h3>
                  <div className="space-y-4">
                    {[
                      { division: "Division 1", requirement: "6 matching numbers", description: "Top prize tier" },
                      {
                        division: "Division 2",
                        requirement: "5 matching numbers + bonus",
                        description: "Second tier prize",
                      },
                      { division: "Division 3", requirement: "5 matching numbers", description: "Third tier prize" },
                      { division: "Division 4", requirement: "4 matching numbers", description: "Fourth tier prize" },
                      {
                        division: "Division 5",
                        requirement: "3 matching numbers + bonus",
                        description: "Fifth tier prize",
                      },
                      { division: "Division 6", requirement: "3 matching numbers", description: "Sixth tier prize" },
                    ].map((prize, index) => (
                      <div key={index} className="border-l-4 border-lime-500/30 pl-4">
                        <h4 className="text-white font-semibold">{prize.division}</h4>
                        <p className="text-gray-300 text-sm">{prize.requirement}</p>
                        <p className="text-gray-400 text-xs">{prize.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 border-lime-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">How Prizes Work</h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-lime-400 mr-3 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Prize Pool Distribution</h4>
                        <p className="text-sm">
                          Prizes are distributed across multiple divisions based on ticket sales
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Trophy className="w-5 h-5 text-lime-400 mr-3 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Guaranteed Minimums</h4>
                        <p className="text-sm">Each division has minimum prize guarantees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-lime-400 mr-3 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Prize Claims</h4>
                        <p className="text-sm">Winners have specific timeframes to claim their prizes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Draw Schedule Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Draw Schedule & Process</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 border-lime-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-lime-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">When Draws Happen</h3>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Regular Draws</h4>
                      <p className="text-sm">Weekly draws occur on specific days at set times</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Special Events</h4>
                      <p className="text-sm">Additional draws during special occasions and holidays</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Draw Times</h4>
                      <p className="text-sm">All draws occur in Australian Eastern Standard Time (AEST)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 border-lime-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Trophy className="w-8 h-8 text-lime-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">How Draws Work</h3>
                  </div>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Random Selection</h4>
                      <p className="text-sm">Numbers are drawn using certified random number generation</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Official Verification</h4>
                      <p className="text-sm">All draws are independently verified and audited</p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Result Publication</h4>
                      <p className="text-sm">Results are published immediately after verification</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Game Mechanics Section */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Game Mechanics</h2>
            <Card className="bg-gradient-to-br from-green-900/30 to-yellow-900/30 border-lime-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">How to Play</h3>
                    <ol className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          1
                        </span>
                        <span>Choose your numbers or select QuickPick for random selection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          2
                        </span>
                        <span>Select the number of games you want to play</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          3
                        </span>
                        <span>Choose your entry type (Standard or System)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                          4
                        </span>
                        <span>Wait for the draw and check your results</span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Important Information</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <Trophy className="w-5 h-5 text-lime-400 mr-3 mt-0.5" />
                        <span>All games are subject to official rules and regulations</span>
                      </li>
                      <li className="flex items-start">
                        <Trophy className="w-5 h-5 text-lime-400 mr-3 mt-0.5" />
                        <span>Players must be 18 years or older to participate</span>
                      </li>
                      <li className="flex items-start">
                        <Trophy className="w-5 h-5 text-lime-400 mr-3 mt-0.5" />
                        <span>Responsible gaming practices are encouraged</span>
                      </li>
                      <li className="flex items-start">
                        <Trophy className="w-5 h-5 text-lime-400 mr-3 mt-0.5" />
                        <span>All transactions are secure and encrypted</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
