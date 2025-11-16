import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar/Sidebar'; // Import your existing sidebar
import styles from './Layout.module.css'; // We will create this file next
import { Navbar } from '../navbar/Navbar';

export const Layout = () => {
  return (
    <div className={styles.appContainer}>
      {/* The Sidebar is rendered here. 
        Since its position is 'fixed', it doesn't matter where
        it is in the DOM tree.
      */}
      <Sidebar />
      <Navbar />

      {/* This 'main' element will hold your page content.
        The CSS for 'mainContent' will add a margin-left
        to push it out from behind the sidebar.
        The <Outlet /> will render the active route's component.
      */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};