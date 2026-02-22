import NavigationBar from './components/custom/NavigationBar';
import './App.css'; // or wherever your global styles are
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavigationBar />
      
      <main className="container mx-auto sm:px-0 lg:px-4 py-4">
        {/* Your job application / hero / sections go here */}
        <Home />
      </main>
    </div>
  );
}

export default App;