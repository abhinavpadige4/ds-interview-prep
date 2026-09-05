```typescript
interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 px-4 text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-primary">
          Ace Your Data Science Interview
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Master Python, Statistics, ML, SQL, System Design & Behavioral questions with interactive practice and progress tracking.
        </p>
        <button 
          onClick={onGetStarted}
          className="btn-primary text-lg px-8 py-4"
        >
          Start Preparing
        </button>
      </div>
    </section>
  );
}
