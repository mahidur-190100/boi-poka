import React, { Children } from 'react'
import { createBrowserRouter } from "react-router";
import Root from '../Roots/Root';
import Home from '../Home/Home';
import About from '../Pages/About';
import BookDetails from '../Pages/BookDetails';
import ReadList from '../Pages/ReadList';
// import WishList from '../Pages/WishList';



export const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello World</div>
    Component: Root,
    children: [
      {
        index:     true,
        loader:() => fetch ('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res => res.json()),
        Component: Home,
        
    },
     {
        path: "/About",
        Component:About ,
        
    },
     {
       path: "/ReadList",
       loader:() => fetch ('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res => res.json()),
        Component: ReadList ,
        
    },
    // {
    //   path: "/WishList",
    //   Component: WishList ,

    // },
    
     {
        path: "/BookDetails/:Id",
        loader:() => fetch ('https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json').then(res => res.json()),
        Component:BookDetails ,
        
    },

    ],
    } 
]);