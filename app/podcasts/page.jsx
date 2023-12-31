import Image from 'next/image';
import Link from 'next/link';
import styles from './podcasts.module.css';

async function getPodcasts() {
    
    const res = await fetch('https://www.mycalldevcp.co.uk/api/podcasts', {
        next: {
            revalidate: 30
        }
    })
    const data = await res.json()
    
    return data
}

export default async function Podcasts() {
  
    const podcasts = await getPodcasts()

    return (
        <main>
            <Image src={'/podcasts/podcast_hero_mobile.jpg'} 
            width={1456} 
            height={816} 
            style={{
                width: '100%',
                height: 'auto',
              }}
            className={styles.imageHero} 
            alt='hero image for blogs categroy' 
            quality={100} />

            <h1 className={styles.titleMain}>PODCAST COLLECTION</h1>

            
            {podcasts.map((podcast) => (
                <div key={podcast._id} className={styles.mainContainer}>
                    <div className={styles.imageThumbnailContainer}>
                    <Link href={`/podcasts/${podcast._id}`} prefetch={true} >
                            <div className={styles.imageBlogContanier}>
                                <Image 
                                    src={`/podcasts/${podcast.imageThumbnail}.JPG`} 
                                    width={1456} 
                                    height={816} 
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                      }}
                                    alt='thumbnail of podcast image' 
                                    quality={100} 
                                />  
                            </div>
                        </Link>
                      
                    </div>

                    <div className={styles.contentContainer}>
                        <div className={styles.flexReadTime}>
                            <div className={styles.readTime}>Duration:</div> 
                            <div>{podcast.minuteRead} minutes</div>
                        </div>
                        <div className={styles.podcastTitle}>{podcast.podcastTitle}</div>
                        <div className={styles.podcastSubTitle1}>{podcast.tagTeaser}</div>  
                    </div>
                    <Link href={`/podcasts/${podcast._id}`} className={styles.linkBTN}>
                        <div className={styles.readBTN}>Listen</div>
                    </Link>
                </div>
            ))}
            
        </main>
    )
}
