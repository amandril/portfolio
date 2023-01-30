import styles from "../styles/Oregano.module.css"
import Image from "next/image"

export default function oregano() {
    return (
        <>
            <section>
                <p>Top section with Nebraska photo.</p>
                <Image width="200" height="200" src="/../public/images/oregano/nebraska-roadside-XG6D2388.jpg" alt="Nebraska roadside" />
            </section>

            <hr />

            <section>
                <p>Map section with SVG mouse interaction and mileage box.</p>
                <Image width="100" height="100" src="/../public/images/oregano/usa-map-traced.png" alt="usa map" />
            </section>

            <hr />

            <section>
                <p>In early May of 2008, on what was otherwise an average spring day in Ypsilanti, MI, the four of us started pedaling down Michigan Avenue, clad in spandex and cycling gear, intent on reaching the Pacific Ocean. Classes at Eastern wrapped up the week prior, putting an end to our junior year of undergrad, whose free time was largely spent on the subject of cycling. Almost nine months prior, the idea sprang in the middle of a parking lot from a loaded question. “Is it even possible to ride a bike across the country?” We’d spend that year studying, deliberating, that summer riding and learning the answer.</p>
                <p>It was sophomore year and I’d spent the last few semesters reprioritizing interests, largely preoccupied with photography and picking up cycling after friends started riding bikes their parents handed down to them. A friend helped me find my first road bike, a bright blue Schwinn Collegiate from a church rummage sale in mostly sound condition. I gladly paid him the ten dollars it cost, excited to join the road bike club. Months after riding it hundreds of miles, I’d accept it was too big for me and that it needed work. Its older steel frame gave me a workout every time I brought it up the stairs and into my apartment. It disappeared one night in Lansing, that time having driven it there. The next day, I bought my second road bike.</p>
            </section>

            <hr />

            <section>
                <p>Riding through through midwest farm country, with nothing to block the wind.</p>
                <p>[Video and horizontal moving text interaction]</p>
            </section>

            <hr />

            <section>

                <p>I met Abe, Nate and Rob through a mutual friend that year. We were playing kidnapped in the suburbs of Detroit one night, getting dropped off in random parking lots back when cellphones didn’t come standard with GPS and maps. We barely knew each other before we schemed an adventure across the country – a cycling trip that would last much of the summer. It was only fitting that none of us had any experience. Riding long distance was something novel for each of us and we didn’t have the proper gear, nor the proper bikes. Even so, the haphazard nature of the plan didn’t seem to bother any of us. Bicycles were already a part of our lives - we used them to get around, as “alternative” transportation. For some of us, it was a way of rebelling against having to use a car.</p>
                <p>
                Not everyone had an appropriate bicycle, and by this point we had a dozen or so people interested in our crazy idea, though that number would dwindle as summer approached. I wanted to learn more about repairing bikes and introduced myself to a bike mechanic downtown. Jim had recently taken over the storefront where Ypsilanti Cycles had been. He was amiable when I told him about our trip, but I could tell he also saw in us our inexperience. I’d visit occasionally, sometimes with friends and their bikes, bringing some business here and there in the form of repairs and parts. For a time my apartment living room was home to no less than a half dozen bicycles, some ready to ride and some in parts, most of which we found on Craigslist. We’d bring them to Jim at the shop and it would draw humor sometimes, what I imagine looked like a gang of college students riding 80s road bikes, but it always resulted in a helping hand.
                </p>
            
            </section>

            <hr />

            <section>
                <p>Image with lower caption</p>
                <p>Day 26<br />Central Oregon<br />2127 Miles</p>
            </section>

            {/* <section className={`${styles.section_one} ${styles.overlap}`}>
                <Image width="1500" height="1" className={styles.top_image} src="/../public/images/oregano/nebraska-roadside-XG6D2388.jpg" alt="Nebraska roadside" />
                <div className={styles.container_text}>
                <span className={`${styles.title_text} ${styles.light_on_dark}`} id="top-title">The Oregon 2500</span>
                </div>
            </section> */}
      
        </>
        )
}