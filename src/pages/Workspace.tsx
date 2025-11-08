import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Play, Save, Share2, FolderTree, Terminal, Sparkles } from "lucide-react";

export default function Workspace() {
  return (
    <div className="h-screen flex flex-col">
      <div className="border-b border-border p-4 flex items-center justify-between bg-sidebar">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold">VibeXCraft-Core</h1>
          <div className="flex gap-2">
            <Button size="sm" className="bg-primary hover:shadow-glow-purple">
              <Play className="w-4 h-4 mr-2" />
              Run
            </Button>
            <Button size="sm" variant="secondary">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button size="sm" variant="secondary">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        <Button size="sm" className="bg-gradient-accent">
          <Sparkles className="w-4 h-4 mr-2" />
          AI Assist
        </Button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 border-r border-border bg-sidebar p-4">
          <div className="flex items-center gap-2 mb-4">
            <FolderTree className="w-5 h-5 text-primary" />
            <h2 className="font-semibold">Files</h2>
          </div>
          
          <div className="space-y-1 text-sm">
            <div className="p-2 hover:bg-sidebar-accent rounded-lg cursor-pointer">
              📁 src
            </div>
            <div className="p-2 pl-6 hover:bg-sidebar-accent rounded-lg cursor-pointer text-muted-foreground">
              📄 App.tsx
            </div>
            <div className="p-2 pl-6 hover:bg-sidebar-accent rounded-lg cursor-pointer text-muted-foreground">
              📄 index.tsx
            </div>
            <div className="p-2 hover:bg-sidebar-accent rounded-lg cursor-pointer">
              📁 components
            </div>
            <div className="p-2 hover:bg-sidebar-accent rounded-lg cursor-pointer">
              📁 utils
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 bg-[#0A0A14]">
            <GlassCard className="h-full p-6">
              <div className="font-mono text-sm space-y-2">
                <div className="text-muted-foreground">// Code editor placeholder</div>
                <div className="text-primary">import <span className="text-accent">React</span> from 'react';</div>
                <div>&nbsp;</div>
                <div className="text-primary">function <span className="text-accent">App</span>() {'{'}</div>
                <div className="pl-4">return (</div>
                <div className="pl-8 text-muted-foreground">&lt;div className="app"&gt;</div>
                <div className="pl-12 text-foreground">Welcome to VibeXCraft</div>
                <div className="pl-8 text-muted-foreground">&lt;/div&gt;</div>
                <div className="pl-4">);</div>
                <div>{'}'}</div>
              </div>
            </GlassCard>
          </div>

          <div className="h-48 border-t border-border bg-sidebar p-4">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold">Terminal</h3>
            </div>
            <div className="font-mono text-sm text-muted-foreground space-y-1">
              <div>$ npm run dev</div>
              <div className="text-primary">✓ Server running at http://localhost:3000</div>
            </div>
          </div>
        </div>

        <div className="w-80 border-l border-border bg-sidebar p-4">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <h2 className="font-semibold">AI Copilot</h2>
          </div>
          
          <div className="space-y-3 text-sm">
            <GlassCard className="p-3 hover:border-accent/50 transition-colors cursor-pointer">
              <p className="font-medium mb-1">💡 Explain</p>
              <p className="text-muted-foreground text-xs">Get code explanations</p>
            </GlassCard>
            
            <GlassCard className="p-3 hover:border-primary/50 transition-colors cursor-pointer">
              <p className="font-medium mb-1">⚡ Optimize</p>
              <p className="text-muted-foreground text-xs">Improve performance</p>
            </GlassCard>
            
            <GlassCard className="p-3 hover:border-accent/50 transition-colors cursor-pointer">
              <p className="font-medium mb-1">🔧 Fix</p>
              <p className="text-muted-foreground text-xs">Debug and repair</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
