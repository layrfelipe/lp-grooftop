import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
export default function AboutUs() {
  return (
    <div className={styles.page}>
      <div className={styles.heroAboutUs}>
        <div className={styles.heroAboutUsText}>
          <h2>About Us</h2>
        </div>

        <div className={styles.imageWrapper}>
          <Image className={styles.image} src="/images/image-4.png" alt="About Us" width={1348} height={505}/>
        </div>

        <div className={styles.aboutUsText}>
          <h1>Discover the city from above with Grooftop</h1>
          <p>Introducing Grooftop, the ultimate app for rooftop lovers and urban explorers.</p>
          <p>Grooftop is the app that lets you discover and book the most stunning rooftops in your city — or turn your own rooftop into passive income.</p>
          <p>Whether you're a visitor or a local, Grooftop helps you discover the best rooftops in your city — bars, restaurants, cultural spaces, and even private venues available for special occasions. From panoramic cityscapes to serene green views, find the perfect rooftop for any moment, whether it’s a lively gathering, a romantic sunset, or a peaceful retreat.</p>
        </div>

        <div className={styles.meetTheTeam}>
          <h2>Meet the Team</h2>

          <div className={styles.teamMember}>
            <Link href="https://www.linkedin.com/in/emmanueldegroof" target="_blank" rel="noopener noreferrer" className={styles.teamMemberImageWrapper}>
              <Image className={styles.teamMemberImage} src="https://res.cloudinary.com/dx3ulr1ti/image/upload/v1745706451/emmanuel_ot5rbo.png" alt="Manu" width={200} height={200}/>
            </Link>
            <div className={styles.teamMemberText}>
              <h3 className={styles.teamMemberName}>MANU</h3>
              <p className={styles.teamMemberDescription}>As the Founder & Coordinator, he oversees team efforts and is also the spokesperson towards external partners; in addition, he keeps an eye on legal compliance. </p>
              <p className={styles.teamMemberBackground}>Background</p>
              <p className={styles.teamMemberBackgroundDescription}>He originated the idea when he first dreamt of a rooftop-hunting app while living in NYC in 2014. Rediscovering the heights of Rio brought the idea back to life. A Belgian citizen, he has worked in South Africa, the Netherlands, Germany, the US, and Italy where he earned his Ph.D. Hiking, biking, music, and quality time with friends are his passions.</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <Link href="https://www.linkedin.com/in/virginia-mignoni-evaristo-78329045/" target="_blank" rel="noopener noreferrer" className={styles.teamMemberImageWrapper}>
              <Image className={styles.teamMemberImage} src="https://res.cloudinary.com/dx3ulr1ti/image/upload/v1745706450/virginia_beavny.png" alt="Manu" width={200} height={200}/>
            </Link>
            <div className={styles.teamMemberText}>
              <h3 className={styles.teamMemberName}>VIRGÍNIA</h3>
              <p className={styles.teamMemberDescription}>As the Project Manager, Virginia is the Scrum Master at Grooftop. She coordinates daily team efforts (operations lead), tracks the advancements of the project according to the business plan, monitors the project’s milestones, and is also the spokesperson towards external partners.</p>
              <p className={styles.teamMemberBackground}>Background</p>
              <p className={styles.teamMemberBackgroundDescription}>With a background in aviation safety and coordination, arts and conference interpretation, she blends structure and creativity to build tools that unlock urban potential. Virginia holds an MBA and is passionate about visual arts and singing.</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <Link href="https://www.linkedin.com/in/wlademyr-mendes-925aaa6b/" target="_blank" rel="noopener noreferrer" className={styles.teamMemberImageWrapper}>
              <Image className={styles.teamMemberImage} src="https://res.cloudinary.com/dx3ulr1ti/image/upload/v1745706450/wlad_sf4emk.png" alt="Manu" width={200} height={200}/>
            </Link>
            <div className={styles.teamMemberText}>
              <h3 className={styles.teamMemberName}>WLAD</h3>
              <p className={styles.teamMemberDescription}>As the Back-end Developer & Tech Lead, Wlad designs the technical framework, builds and maintains the backend, and integrates external APIs to ensure a robust, scalable system.</p>
              <p className={styles.teamMemberBackground}>Background</p>
              <p className={styles.teamMemberBackgroundDescription}>A Brazilian Tech Lead, Builder, and Web3 Enthusiast, Wlad is shaping the future of blockchain and Web3 applications at Lumx. When not coding, he’s either brainstorming new innovations or spending time with his kids.</p>
            </div>
          </div>

          <div className={styles.teamMember}> 
            <Link href="https://www.linkedin.com/in/layr-felipe/" target="_blank" rel="noopener noreferrer" className={styles.teamMemberImageWrapper}>
              <Image className={styles.teamMemberImage} src="https://res.cloudinary.com/dx3ulr1ti/image/upload/v1745558624/layr_wgctec.webp" alt="Manu" width={200} height={200}/>
            </Link>
            <div className={styles.teamMemberText}>
              <h3 className={styles.teamMemberName}>LAYR</h3>
              <p className={styles.teamMemberDescription}>As the Full Stack Developer, Layr codes eveything from the mobile to the back-end and the websites. Also is responsible for deploying and maintaining our applications running smoothly on the cloud.</p>
              <p className={styles.teamMemberBackground}>Background</p>
              <p className={styles.teamMemberBackgroundDescription}>A self-taught software developer with 4 years of experience, Layr currently works as Plataform AI Engineer at Hotmart. Born and raised in Rio, he&apos;s driven by a passion for building innovative solutions that bridge tech, nature, and society. When not coding, he&apos;s biking, playing saxophone or exploring new technologies.</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <Link href="https://www.linkedin.com/in/gabrielsabux/" target="_blank" rel="noopener noreferrer" className={styles.teamMemberImageWrapper}>
              <Image className={styles.teamMemberImage} src="https://res.cloudinary.com/dx3ulr1ti/image/upload/v1745706450/gabriel_xwjrqg.png" alt="Manu" width={200} height={200}/>
            </Link>
            <div className={styles.teamMemberText}>
              <h3 className={styles.teamMemberName}>GABRIEL</h3>
              <p className={styles.teamMemberDescription}>As the Designer, Gabriel leads the full user experience design, including both UX and UI; He is also responsible for the app’s visual identity, branding, and digital marketing. This includes creating design systems, visual assets, and supporting promotional materials like social media content, t-shirts, and business cards.</p>
              <p className={styles.teamMemberBackground}>Background</p>
              <p className={styles.teamMemberBackgroundDescription}>Designer with over 22 years of experience, specializing in creating impactful and functional digital experiences. Throughout his career, Gabriel has worked with companies such as Embratel, Claro, UVA, UNISUAM, and UNIJORGE, developing innovative solutions focused on usability and user-centered design. His approach combines creativity and strategy to deliver results that connect brands and users in an intuitive and engaging way.</p>
            </div>
          </div>

          <div className={styles.teamMember}>
            <Link href="https://www.linkedin.com/in/benjaminvandam1/" target="_blank" rel="noopener noreferrer" className={styles.teamMemberImageWrapper}>
              <Image className={styles.teamMemberImage} src="https://res.cloudinary.com/dx3ulr1ti/image/upload/v1745706449/benjamin_iehcxs.png" alt="Manu" width={200} height={200}/>
            </Link>
            <div className={styles.teamMemberText}>
              <h3 className={styles.teamMemberName}>BENJAMIN</h3>
              <p className={styles.teamMemberDescription}>As the Financial Manager and business developer, Benjamin tracks the operational costs, develops financial projections, crafts growth strategies, and prepares materials for investor discussions. He also takes care of the daily accounting.</p>
              <p className={styles.teamMemberBackground}>Background</p>
              <p className={styles.teamMemberBackgroundDescription}>As an expat financial manager, Benjamin has lived and worked across the globe embracing new cultures and experiences along the way. With a passion for technology, he thrives on creating innovative applications that make an impact. Benjamin holds a Master in Business Engineering.</p>
            </div>
          </div>

          <p className={styles.teamMemberNote}>N.B., all team members have full-time jobs and dedicate their time and energy to the project during their free hours. </p>

          <div className={styles.howItWorks}>
            <h2>How it works - A closer look</h2>
            <p>Grooftop makes it easy to find the perfect rooftop for any occasion. The app categorizes rooftops into different types, from vibrant bars, restaurants, and hotels to cultural spaces like museums and libraries. It also features private venues and event spaces that can be booked for special occasions, as well as exclusive rooftops in private homes, offices, and co-working spaces available for short-term rental.</p>

            <p>Finding the right rooftop is simple with Grooftop’s smart filters. Users can search by location and even plan an itinerary based on availability, allowing them to visit multiple rooftops in a day. The app provides information on whether a rooftop is open, its access conditions, and any potential entrance fees or membership requirements.</p>

            <p>To ensure every user finds the right atmosphere, Grooftop offers additional filters based on the purpose of the visit. Whether someone is looking for a lively social spot, a peaceful place for meditation or yoga, or a private venue for an event, the app helps them choose accordingly. It also includes options for special uses, such as film sets, theater performances, live music, religious ceremonies, or pop-up exhibitions and stores.</p>

            <p>Weather conditions are also taken into account. Users can check if a rooftop offers shade or rain protection and whether it provides a good view of the sunrise or sunset. Food and beverage options are clearly indicated, specifying whether catering is available or if guests can bring their own drinks and meals. Facilities such as restrooms, lockers, seating arrangements, and even smoking areas or first-aid kits are listed to help users make an informed choice.
For those looking for an extra touch of luxury, Grooftop allows users to filter by amenities like swimming pools. Accessibility is another key feature, with information on parking availability, elevators, and wheelchair-friendly spaces. Families and pet owners will appreciate details about child safety measures, such as secure railings, and whether pets are welcome.
Finally, the app highlights the unique views each rooftop offers. Whether overlooking a bustling city skyline, a peaceful park, a mountain range, or the ocean, users can choose their preferred scenery. Some rooftops even provide a list of notable landmarks visible from their location.</p>

            <p>Grooftop is more than just a directory—it’s a new way to experience the city from above. Whether you're exploring, celebrating, or simply looking for a change of perspective, this app connects you to the most stunning rooftops around.</p>
          </div>

          <h3 className={styles.finalMessage}>The sky is not the limit — it&apos;s just the beginning.</h3>
        </div>
      </div>
    </div>
  );
}
