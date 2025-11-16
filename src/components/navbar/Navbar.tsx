import styles from './Navbar.module.css';
import {
  Search,
  ArrowDownToLine,
  Timer,
  ChevronDown,
} from 'lucide-react';
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/img4.jpg'
import image5 from '../../assets/img5.jpg'


// --- Helper Components for Avatars ---
// We'll hard-code these as they are static in the design
const AvatarStack = () => (
  <div className={styles.avatarStack}>
    {/* These are placeholder avatars styled like the design */}
    <img
      src={image1}
      className={styles.avatar}
      style={{ backgroundColor: '#ffbe0b', zIndex: 4 }}
    />
    <img
      src={image2}
      className={styles.avatar}
      style={{ backgroundColor: '#fb5607', zIndex: 3 }}
    />
    <img
      src={image3}
      className={styles.avatar}
      style={{ backgroundColor: '#8338ec', zIndex: 2 }}
    />
    <img
      src={image4}
      className={styles.avatar}
      style={{ backgroundColor: '#3a86ff', zIndex: 1 }}
    />
    <img
      src={image5}
      className={styles.avatar}
      style={{ backgroundColor: '#3a86ff', zIndex: 1 }}
    />
  </div>
);

export const Navbar = () => {
  return (
    <header className={styles.navbar}>
      {/* --- 1. Search Area (Left) --- */}
      <div className={styles.searchArea}>
        <div className={styles.searchBar}>
          <Search size={16} />
          <input type="text" placeholder="Search for anything" />
        </div>
      </div>

      {/* --- 2. User Area (Right) --- */}
      <div className={styles.userArea}>
        {/* Quick Actions Button */}
        <button className={styles.quickActions}>
          <ArrowDownToLine size={16} />
          <span>Quick actions</span>
        </button>

        {/* Timer/Notification Button */}
        <button className={styles.timerButton}>
          <Timer size={20} />
          <span className={styles.timerBadge} />
        </button>

        {/* Avatar Stack */}
        <AvatarStack />

        {/* Profile Area */}
        <div className={styles.profileArea}>
          <button className={styles.profileAvatar}>BE</button>
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>Hamilton Ude</span>
            <span className={styles.profileRole}>ADMIN Frontend</span>
          </div>
          <button className={styles.profileDropdown}>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};