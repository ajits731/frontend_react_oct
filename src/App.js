import HomePage from "./components/homePage";
import About from "./components/about";
import {useState} from 'react';
import NavigationBar from './components/navigation';

import { Route, Routes} from 'react-router-dom';
import Products from "./components/products/products";
import ProductDetails from "./components/products/productDetails";
import NewProduct from "./components/products/newProduct";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ProductLayout from './components/products/productLayout';
import ErrorPage from "./components/errorPage";

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<NavigationBar />}>
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/about'} element={<About />} />
          <Route path="/product"> 
            <Route index element={<Products />} />
            <Route path={':id'} element={<ProductDetails />} />
            <Route path={'new'} element={<NewProduct />} />
          </Route>
          <Route path={'*'} element={<ErrorPage />} />
        </Route>
      </Routes>     
    </>
  );
}

export default App;


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<NavigationBar />} >
//         <Route index element={<HomePage />} />
//         <Route path="/about">
//           <Route index element={<About />} />
//           <Route path="about2" element={<h1>About us 2</h1>} />
//         </Route>
//     </Route>
//   )
// )


{/* <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/about'} element={<About />} />
        <Route path="/product"> 
          <Route index element={<Products />} />
          <Route path={':id'} element={<ProductDetails />} />
          <Route path={'new'} element={<NewProduct />} />
        </Route>
      </Routes> */}

      // const router = createBrowserRouter([
      //   {
      //     path: '/',
      //     element: <NavigationBar />,
      //     errorElement: <ErrorPage />,
      //     children: [
      //       {
      //         path: 'home',
      //         element: <HomePage />
      //       },
      //       {
      //         path: 'about',
      //         element: <About />
      //       },
      //       {
      //         path: 'product',
      //         element: <ProductLayout />,
      //         children: [
      //           {
      //             path: 'all',
      //             loader: async () => {
      //               return fetch('https://fakestoreapi.com/products')
      //               .then((res) => res.json())
      //               .then((response) => response)
      //             },
      //             element: <Products />
      //           },
      //           {
      //             path:':id',
      //             element: <ProductDetails />
      //           },
      //           {
      //             path:'new',
      //             element: <NewProduct />
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ])
