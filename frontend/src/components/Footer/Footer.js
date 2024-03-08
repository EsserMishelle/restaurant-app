import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={`${styles.listContainer} ${styles.horizontalList}`}>
        {/* <h2 className={styles.storeName}>Ramen Time</h2> */}
        <div style={{ display: "flex" }}>
          <div>
            <img
              src="https://res.cloudinary.com/dxh60x8dq/image/upload/v1709282323/Ramen%20Time%20Images/contact-us-icon-black-2_g4wfyk.png"
              alt="footer img"
              style={{ height: "30px", marginRight: "30px", marginTop: "7px" }}
              className={styles.phone}
            ></img>
          </div>
          <div>
            <p>
              (757)-808-7277 <br /> (757)-808-7164
            </p>
          </div>
        </div>
        <div>
          <a
            href="https://www.facebook.com/RamenTalkwilliamsburg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dxh60x8dq/image/upload/v1709275661/Ramen%20Time%20Images/icons8-facebook-50_fuaeot.png"
              alt="footer img"
            ></img>
          </a>
        </div>

        <a href="https://www.google.com/maps/place/Ramen+Time/@37.2942501,-76.7257842,15z/data=!4m6!3m5!1s0x89b0891b52203b49:0x9269f0aaafb856ee!8m2!3d37.2942501!4d-76.7257842!16s%2Fg%2F11tsp991zy?entry=ttu">
          1640 Richmond Rd <br />
          Williamsburg, VA 23185
        </a>
      </div>
    </div>
  );
}
