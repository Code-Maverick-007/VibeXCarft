import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle, Share2, Star } from "lucide-react";

export default function Community() {
  const posts = [
    {
      user: "Sarah Dev",
      project: "Real-time Chat App",
      lang: "TypeScript",
      likes: 234,
      comments: 45,
      image: "🚀"
    },
    {
      user: "Alex Code",
      project: "AI Image Generator",
      lang: "Python",
      likes: 567,
      comments: 89,
      image: "🎨"
    },
    {
      user: "Jordan Builder",
      project: "E-commerce Platform",
      lang: "React",
      likes: 432,
      comments: 67,
      image: "🛍️"
    },
  ];

  return (
    <div className="min-h-screen p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Community
        </h1>
        <p className="text-muted-foreground mt-1">Connect, share, and learn together</p>
      </div>

      <Tabs defaultValue="trending" className="w-full">
        <TabsList className="bg-secondary">
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="hackathons">Hackathons</TabsTrigger>
        </TabsList>

        <TabsContent value="trending" className="space-y-6 mt-6">
          {posts.map((post, i) => (
            <GlassCard key={i} hover className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-xl">
                  {post.user[0]}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{post.user}</h3>
                  <p className="text-sm text-muted-foreground">Created a new project</p>
                </div>
                <Button size="sm" variant="secondary">Follow</Button>
              </div>

              <div className="p-4 bg-secondary/50 rounded-xl">
                <div className="text-6xl text-center mb-4">{post.image}</div>
                <h4 className="font-semibold text-lg">{post.project}</h4>
                <p className="text-sm text-muted-foreground">{post.lang}</p>
              </div>

              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
                <Button size="sm" className="ml-auto bg-primary/10 hover:bg-primary/20">
                  Join Workspace
                </Button>
              </div>
            </GlassCard>
          ))}
        </TabsContent>

        <TabsContent value="following">
          <GlassCard className="p-12 text-center">
            <Star className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Follow creators to see their updates here</p>
          </GlassCard>
        </TabsContent>

        <TabsContent value="challenges">
          <GlassCard className="p-12 text-center">
            <p className="text-muted-foreground">Challenges coming soon</p>
          </GlassCard>
        </TabsContent>

        <TabsContent value="hackathons">
          <GlassCard className="p-12 text-center">
            <p className="text-muted-foreground">Hackathons coming soon</p>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
