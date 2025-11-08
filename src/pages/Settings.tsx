import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Bell, Link2, Shield, Palette, LogOut } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen p-8 space-y-6">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-muted-foreground mt-1">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-secondary">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6 mt-6">
          <GlassCard hover className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Profile Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Full Name</label>
                <Input defaultValue="Omkar" className="bg-secondary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Username</label>
                <Input defaultValue="omkar" className="bg-secondary/50" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm text-muted-foreground">Email</label>
                <Input type="email" defaultValue="omkar@vibexcraft.com" className="bg-secondary/50" />
              </div>
            </div>

            <Button className="bg-gradient-primary hover:shadow-glow-purple">
              Save Changes
            </Button>
          </GlassCard>

          <GlassCard hover className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Email notifications", desc: "Receive updates via email" },
                { label: "Push notifications", desc: "Get browser notifications" },
                { label: "Project updates", desc: "Team activity notifications" },
                { label: "Community updates", desc: "New posts and comments" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch />
                </div>
              ))}
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6 mt-6">
          <GlassCard hover className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">AI Preferences</h2>
            
            <div className="space-y-4">
              {[
                { label: "Code suggestions", desc: "Real-time AI code completions" },
                { label: "Auto-optimize", desc: "Automatically suggest optimizations" },
                { label: "Learning mode", desc: "AI learns from your coding style" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6 mt-6">
          <GlassCard hover className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Link2 className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Connected Services</h2>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "GitHub", status: "Connected", color: "text-primary" },
                { name: "Google", status: "Not connected", color: "text-muted-foreground" },
                { name: "Figma", status: "Not connected", color: "text-muted-foreground" },
              ].map((service, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className={`text-sm ${service.color}`}>{service.status}</p>
                  </div>
                  <Button size="sm" variant="secondary">
                    {service.status === "Connected" ? "Disconnect" : "Connect"}
                  </Button>
                </div>
              ))}
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6 mt-6">
          <GlassCard hover className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-accent" />
              <h2 className="text-xl font-semibold">Privacy & Security</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { label: "Profile visibility", desc: "Make profile public" },
                { label: "Activity status", desc: "Show when you're active" },
                { label: "Project visibility", desc: "Default projects to public" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl">
                  <div>
                    <p className="font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch />
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border space-y-2">
              <Button variant="destructive" className="w-full">
                Delete Account
              </Button>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6 mt-6">
          <GlassCard hover className="p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Palette className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Appearance</h2>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-secondary/50 rounded-xl">
                <p className="font-medium mb-2">Theme</p>
                <div className="grid grid-cols-3 gap-3">
                  <button className="p-3 bg-background border border-primary rounded-lg text-sm">
                    Dark
                  </button>
                  <button className="p-3 bg-background border border-border rounded-lg text-sm hover:border-primary transition-colors">
                    Light
                  </button>
                  <button className="p-3 bg-background border border-border rounded-lg text-sm hover:border-primary transition-colors">
                    Auto
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>

      <GlassCard className="p-6">
        <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </GlassCard>
    </div>
  );
}
