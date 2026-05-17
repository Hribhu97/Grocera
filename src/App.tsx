import { MobileWrapper } from './components/layout/MobileWrapper';
import { HomeScreen } from './screens/HomeScreen';
import { CartScreen } from './screens/CartScreen';
import { ScanScreen } from './screens/ScanScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { QueueScreen } from './screens/QueueScreen';
import { SearchScreen } from './screens/SearchScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MobileWrapper>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/scan" element={<ScanScreen />} />
          <Route path="/checkout" element={<CheckoutScreen />} />
          <Route path="/queue" element={<QueueScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
      </MobileWrapper>
    </BrowserRouter>
  );
}

export default App;
