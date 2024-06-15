import { VelocityScroll } from '../MagicUi/scroll-based-velocity'

export default function hero() {
    return (
        <div className="py-20 flex flex-col justify-end min-h-[calc(100vh-50px)] ">
            <div className=" ">
                <VelocityScroll
                    text="Pranit Adgokar __"
                    default_velocity={5}
                    className="font-display text-center text-black drop-shadow-sm dark:text-white text-[10rem]"
                />
            </div>
        </div>
    )
}
