import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Olá! Sou a IA da Upciga. Posso tirar dúvidas sobre nossos módulos, instalação ou suporte. Como posso ajudar?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue("");
    
    // Adiciona mensagem do usuário na tela
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
    setIsLoading(true);

    try {
      // Conexão com seu Webhook n8n
      const response = await fetch("https://bossycaracal-n8n.cloudfy.cloud/webhook/57a4dce2-6183-49fa-8330-0971d014230a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatInput: userMsg })
      });

      const data = await response.json();
      console.log("Resposta do n8n:", data); // Para debug no console do navegador

      let botText = "";

      // CORREÇÃO: Verifica se o retorno é um Array (comum no n8n) e pega o primeiro item
      if (Array.isArray(data) && data.length > 0) {
        botText = data[0].output || data[0].text || data[0].message;
      } 
      // Fallback: Verifica se é um objeto simples
      else if (data && typeof data === 'object') {
        botText = data.output || data.text || data.message;
      }

      // Se ainda assim não encontrar texto
      if (!botText) {
        botText = "Desculpe, não consegui processar a resposta. Tente novamente.";
      }
      
      setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: "bot" }]);

    } catch (error) {
      console.error("Erro de conexão:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: "Estou com instabilidade na conexão. Por favor, me chame no WhatsApp.", sender: "bot" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      
      {/* Janela do Chat */}
      {isOpen && (
        <Card className="w-[340px] sm:w-[380px] h-[550px] max-h-[80vh] flex flex-col shadow-2xl border-primary/20 animate-in slide-in-from-bottom-10 fade-in duration-300 overflow-hidden rounded-2xl">
          {/* Header */}
          <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-full border border-white/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm flex items-center gap-2">
                  Assistente Upciga <Sparkles className="w-3 h-3 text-yellow-300" />
                </p>
                <p className="text-xs opacity-80 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> 
                  Online agora
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-white/20 text-white rounded-full h-8 w-8" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Área de Mensagens */}
          <ScrollArea className="flex-1 p-4 bg-muted/30">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === "user" 
                        ? "bg-primary text-primary-foreground rounded-br-none" 
                        : "bg-white border border-border text-foreground rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2">
                  <div className="bg-white border border-border p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-xs text-muted-foreground font-medium">Digitando...</span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-3 bg-background border-t border-border">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2 bg-muted/50 p-1.5 rounded-full border border-border focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
              <Input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua dúvida aqui..." 
                className="border-0 bg-transparent focus-visible:ring-0 shadow-none h-10 px-4"
                autoFocus
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !inputValue.trim()} 
                className="h-9 w-9 rounded-full shrink-0 shadow-sm"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <div className="mt-2 text-center">
               <a 
                 href="https://wa.me/5583999007432" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-[10px] text-muted-foreground/80 hover:text-primary transition-colors uppercase tracking-wide font-semibold"
               >
                 Atendimento Humano via WhatsApp
               </a>
            </div>
          </div>
        </Card>
      )}

      {/* Botão Flutuante (Trigger) */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300 relative group border-2 border-white/20"
        >
          {/* Badge de notificação */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
          
          <MessageCircle className="w-7 h-7" />
          
          {/* Tooltip Mobile/Desktop */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-background border border-border px-4 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none hidden md:block">
            <p className="text-sm font-bold text-foreground">Dúvidas?</p>
            <p className="text-xs text-muted-foreground">Fale com nossa IA</p>
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-background border-t border-r border-border transform rotate-45"></div>
          </div>
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;