import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, FolderGit2, Award, TrendingUp, Settings } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen p-8 space-y-6">
      <GlassCard className="p-8">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center text-3xl font-bold shadow-glow-purple">
            O
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold">Omkar</h1>
                <p className="text-muted-foreground">@omkar • Joined 3 months ago</p>
              </div>
              <Button className="bg-gradient-primary hover:shadow-glow-purple">
                <Settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold">42</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Followers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <FolderGit2 className="w-4 h-4" />
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  Badges
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-secondary">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          <GlassCard hover className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              AI Summary
            </h2>
            <div className="p-4 bg-secondary/50 rounded-xl">
              <p className="text-muted-foreground">
                Your learning trend improved <span className="text-primary font-semibold">32%</span> this month. 
                You're excelling in TypeScript and React development, with consistent daily coding sessions.
              </p>
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard hover className="p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Completed AI Copilot integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-muted-foreground">Published Community Platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Started Analytics Dashboard</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard hover className="p-6">
              <h3 className="font-semibold mb-4">Top Skills</h3>
              <div className="space-y-3">
                {[
                  { skill: "TypeScript", level: 90 },
                  { skill: "React", level: 85 },
                  { skill: "Python", level: 75 },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.skill}</span>
                      <span className="font-medium">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </TabsContent>

        <TabsContent value="portfolio">
          <GlassCard className="p-12 text-center">
            <FolderGit2 className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Portfolio showcase coming soon</p>
          </GlassCard>
        </TabsContent>

        <TabsContent value="achievements">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "First Project", emoji: "🎯", date: "3 months ago" },
              { title: "Code Warrior", emoji: "⚔️", date: "2 months ago" },
              { title: "AI Master", emoji: "🤖", date: "1 month ago" },
              { title: "Team Player", emoji: "🤝", date: "2 weeks ago" },
              { title: "Bug Slayer", emoji: "🐛", date: "1 week ago" },
              { title: "Speed Demon", emoji: "⚡", date: "3 days ago" },
            ].map((badge, i) => (
              <GlassCard key={i} hover className="p-6 text-center">
                <div className="text-5xl mb-3">{badge.emoji}</div>
                <h3 className="font-semibold mb-1">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.date}</p>
              </GlassCard>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="learning">
          <GlassCard className="p-12 text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Learning graph coming soon</p>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
