import { BrowserRouter, Route, Routes } from 'react-router-dom';
import router from './Routes/router';
import { Suspense } from 'react';
import { SiderBarProvider } from '@/contexts/SideBar';
import SideBar from '@components/public/SideBar/SideBar';
import { ToastProvider } from './contexts/ToastProvider';
import { StoreProvider } from './contexts/StoreProvider';
import routerDashboard from './Routes/routerDashboard';
import { SearchProvider } from './contexts/SearchProvider';
import SearchItem from '@components/public/SearchItem/SearchItem';

function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SearchProvider>
          <SiderBarProvider>
            <BrowserRouter>
              <Suspense fallback={<div>...loading</div>}>
                <SearchItem />
                <SideBar />
                <Routes>
                  {router.map((item, index) => (
                    <Route
                      key={index}
                      path={item.path}
                      element={<item.component />}
                    />
                  ))}
                  {routerDashboard.map((item, index) => (
                    <Route
                      key={`dashboard-${index}`}
                      path={item.path}
                      element={<item.component />}
                    />
                  ))}
                </Routes>
              </Suspense>
            </BrowserRouter>
          </SiderBarProvider>
        </SearchProvider>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
