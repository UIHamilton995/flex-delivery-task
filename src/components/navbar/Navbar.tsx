import styles from './Navbar.module.css';
import {
  Search,
  ArrowDownToLine,
  Timer,
  ChevronDown,
} from 'lucide-react';

// --- Helper Components for Avatars ---
// We'll hard-code these as they are static in the design
const AvatarStack = () => (
  <div className={styles.avatarStack}>
    {/* These are placeholder avatars styled like the design */}
    <div
      className={styles.avatar}
      style={{ backgroundColor: '#ffbe0b', zIndex: 4 }}
    />
    <div
      className={styles.avatar}
      style={{ backgroundColor: '#fb5607', zIndex: 3 }}
    />
    <div
      className={styles.avatar}
      style={{ backgroundColor: '#8338ec', zIndex: 2 }}
    />
    <div
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
            <span className={styles.profileName}>e6rhrdfbrdsb ergeteb</span>
            <span className={styles.profileRole}>ADMIN</span>
          </div>
          <button className={styles.profileDropdown}>
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};