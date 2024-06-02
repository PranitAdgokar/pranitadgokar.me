import Hero from '@/components/HomePage/hero'
import Introduction from '@/components/HomePage/introduction'

export default function Home() {
    return (
        <div className="divide-y divide-accent-foreground dark:divide-accent">
            <div className="mx-auto bento-md:-mx-[5vw] bento-lg:-mx-[20vw]">
                <div>
                    <Hero />
                </div>
            </div>
        </div>
    )
}
