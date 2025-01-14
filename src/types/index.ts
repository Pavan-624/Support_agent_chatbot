export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface CDPSource {
  name: 'Segment' | 'mParticle' | 'Lytics' | 'Zeotap';
  selector: string;
}