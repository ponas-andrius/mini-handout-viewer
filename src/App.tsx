import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainPage } from './pages/main/MainPage';
import { Layout } from './components/Layout/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <MainPage />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
