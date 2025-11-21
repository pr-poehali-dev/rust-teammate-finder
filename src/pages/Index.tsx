import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Player {
  id: number;
  name: string;
  rating: number;
  hours: number;
  role: string;
  online: boolean;
  avatar: string;
}

interface Team {
  id: number;
  name: string;
  members: number;
  maxMembers: number;
  rating: number;
  description: string;
}

interface Server {
  id: number;
  name: string;
  players: number;
  maxPlayers: number;
  map: string;
  online: boolean;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockPlayers: Player[] = [
    { id: 1, name: 'CyberWarrior', rating: 2847, hours: 1247, role: 'Raider', online: true, avatar: '🔥' },
    { id: 2, name: 'NeonGhost', rating: 2654, hours: 982, role: 'Builder', online: true, avatar: '⚡' },
    { id: 3, name: 'PixelSniper', rating: 2489, hours: 756, role: 'Sniper', online: false, avatar: '🎯' },
    { id: 4, name: 'TechRaider', rating: 2301, hours: 634, role: 'Farmer', online: true, avatar: '💎' },
  ];

  const mockTeams: Team[] = [
    { id: 1, name: 'Cyber Legion', members: 8, maxMembers: 10, rating: 3200, description: 'Hardcore PvP clan' },
    { id: 2, name: 'Neon Raiders', members: 5, maxMembers: 8, rating: 2950, description: 'Chill farming crew' },
    { id: 3, name: 'Pixel Wolves', members: 6, maxMembers: 10, rating: 2780, description: 'Active builders' },
  ];

  const mockServers: Server[] = [
    { id: 1, name: 'RU | Cyber Battlefield x5', players: 143, maxPlayers: 200, map: 'Procedural Map', online: true },
    { id: 2, name: 'EU | Neon Wasteland x3', players: 89, maxPlayers: 150, map: 'Barren', online: true },
    { id: 3, name: 'US | Tech Zone x10', players: 201, maxPlayers: 300, map: 'Savas Island', online: true },
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      <div className="relative z-10">
        <header className="border-b border-primary/20 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center neon-border">
                  <Icon name="Cpu" className="text-primary" size={24} />
                </div>
                <h1 className="text-2xl font-bold neon-text">RUST.FINDER</h1>
              </div>
              
              <nav className="hidden md:flex items-center gap-6">
                <a href="#players" className="text-foreground/80 hover:text-primary transition-colors">Игроки</a>
                <a href="#teams" className="text-foreground/80 hover:text-primary transition-colors">Команды</a>
                <a href="#servers" className="text-foreground/80 hover:text-primary transition-colors">Серверы</a>
                <a href="#ratings" className="text-foreground/80 hover:text-primary transition-colors">Рейтинг</a>
              </nav>

              <Button className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="UserPlus" className="mr-2" size={18} />
                Регистрация
              </Button>
            </div>
          </div>
        </header>

        <section className="py-20 px-4">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="animate-slide-up">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 neon-text">
                НАЙДИ СВОЮ
                <br />
                <span className="text-secondary glitch">КОМАНДУ</span>
              </h2>
              <p className="text-xl text-foreground/70 mb-12 font-light">
                Платформа для поиска тимейтов в RUST. Создавай команды, находи игроков и доминируй на серверах.
              </p>
            </div>

            <div className="flex gap-4 max-w-2xl mx-auto mb-12 animate-slide-up">
              <div className="relative flex-1">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Input
                  placeholder="Поиск игроков, команд или серверов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-card border-primary/30 focus:border-primary neon-border"
                />
              </div>
              <Button size="lg" className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="Search" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {[
                { icon: 'Users', label: 'Игроков', value: '15,847', color: 'text-primary' },
                { icon: 'Shield', label: 'Команд', value: '2,341', color: 'text-secondary' },
                { icon: 'Server', label: 'Серверов', value: '487', color: 'text-accent' },
                { icon: 'TrendingUp', label: 'Онлайн', value: '3,256', color: 'text-primary' },
              ].map((stat, idx) => (
                <Card key={idx} className="bg-card/50 border-primary/20 backdrop-blur-sm neon-border hover:neon-glow transition-all animate-slide-up">
                  <CardContent className="p-6 text-center">
                    <Icon name={stat.icon as any} className={`mx-auto mb-2 ${stat.color}`} size={32} />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="players" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-primary/20 mb-8">
                <TabsTrigger value="players" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Users" className="mr-2" size={18} />
                  Игроки
                </TabsTrigger>
                <TabsTrigger value="teams" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Shield" className="mr-2" size={18} />
                  Команды
                </TabsTrigger>
                <TabsTrigger value="servers" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Server" className="mr-2" size={18} />
                  Серверы
                </TabsTrigger>
              </TabsList>

              <TabsContent value="players" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {mockPlayers.map((player) => (
                    <Card key={player.id} className="bg-card/80 border-primary/20 hover:border-primary/50 transition-all backdrop-blur-sm group hover:neon-border">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">
                              {player.avatar}
                            </div>
                            <div>
                              <CardTitle className="flex items-center gap-2">
                                {player.name}
                                {player.online && (
                                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                                )}
                              </CardTitle>
                              <CardDescription>{player.role}</CardDescription>
                            </div>
                          </div>
                          <Badge className="bg-secondary/20 text-secondary border-secondary/50">
                            {player.rating} MMR
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-foreground/60">
                            <Icon name="Clock" size={16} />
                            {player.hours}ч в игре
                          </div>
                          <Button size="sm" className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50">
                            <Icon name="UserPlus" className="mr-1" size={16} />
                            Добавить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="teams" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {mockTeams.map((team) => (
                    <Card key={team.id} className="bg-card/80 border-primary/20 hover:border-primary/50 transition-all backdrop-blur-sm hover:neon-border">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Icon name="Shield" className="text-secondary" size={20} />
                              {team.name}
                            </CardTitle>
                            <CardDescription>{team.description}</CardDescription>
                          </div>
                          <Badge className="bg-accent/20 text-accent border-accent/50">
                            {team.rating}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-foreground/60 text-sm">
                            <Icon name="Users" size={16} />
                            {team.members}/{team.maxMembers} игроков
                          </div>
                          <Button size="sm" className="bg-secondary/20 hover:bg-secondary text-secondary hover:text-primary-foreground border border-secondary/50">
                            <Icon name="Send" className="mr-1" size={16} />
                            Вступить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="servers" className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {mockServers.map((server) => (
                    <Card key={server.id} className="bg-card/80 border-primary/20 hover:border-primary/50 transition-all backdrop-blur-sm hover:neon-border">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="flex items-center gap-2">
                              <Icon name="Server" className="text-primary" size={20} />
                              {server.name}
                            </CardTitle>
                            <CardDescription>{server.map}</CardDescription>
                          </div>
                          {server.online && (
                            <Badge className="bg-accent/20 text-accent border-accent/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1.5 animate-pulse-glow" />
                              ONLINE
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-foreground/60 text-sm">
                            <Icon name="Users" size={16} />
                            {server.players}/{server.maxPlayers}
                          </div>
                          <Button size="sm" className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/50">
                            <Icon name="Play" className="mr-1" size={16} />
                            Подключиться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <footer className="border-t border-primary/20 mt-20 py-8 backdrop-blur-sm bg-background/80">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Icon name="Cpu" className="text-primary" size={20} />
                  RUST.FINDER
                </h3>
                <p className="text-sm text-foreground/60">
                  Платформа для поиска команды в RUST
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-sm">Разделы</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-primary transition-colors">Поиск игроков</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Команды</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Серверы</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm">Информация</h4>
                <ul className="space-y-2 text-sm text-foreground/60">
                  <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-sm">Связь</h4>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-primary/30 hover:border-primary">
                    <Icon name="MessageCircle" size={18} />
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/30 hover:border-primary">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-primary/10 text-center text-sm text-foreground/40">
              © 2024 RUST Teammate Finder. Powered by cyberpunk technology
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
