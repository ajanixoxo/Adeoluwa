import CodeEditor from "../components/CodeEditor"
import { Link } from "react-router";
import Grouped from "../components/Grouped";
import AOS from 'aos';
import 'animate.css';
import 'aos/dist/aos.css';
// ..
AOS.init();
function Hero() {
    return (
        <div className="relative min-h-screen text-white w-screen" id="h">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"
                data-aos="fade-in"
                data-aos-offset="200"
                data-aos-delay="50"
            />

            <Grouped titleO='<hero>' titleC='</hero>' />
            <div className="w-full relative z-20 flex flex-col lg:flex-row min-h-screen items-center justify-center lg:justify-around py-32">
                <div className="relative p-2 z-10 lg:w-[45%] space-y-4">
                    <div className="inline-block z-10 relative rounded-md bg-background/90 backdrop-blur-sm border  p-4 px-4 py-1.5 text-sm lg:text-2xl font-medium text-foreground buttonp  animate__animated animate__fadeIn">
                        <span className="mr-2 text-sm lg:text-2xl">Hey👋</span> Welcome to my digital space
                    </div>
                    <br />

                    <div className="space-y-2 main px-2">

                        <h1 className="text-3xl lg:text-7xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none "
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                        >
                            I&apos;m <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                                ADEOLUWA
                            </span>

                        </h1>

                        <p className="text-3xl lg:text-6xl font-bold text-muted-foreground "
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="350"
                            data-aos-duration="1000"
                        >
                            A Front-end, Back-end and  App Developer
                        </p>
                    </div>
                    <p className="px-2 max-w-[600px] buttonp text-muted-foreground text-base lg:text-lg "
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="550"
                        data-aos-duration="1000"
                    >
                        with a love for creating dynamic and responsive Web and Mobile Applications.
                    </p>

                    <div className="px-2 flex gap-4
                    "
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-delay="750"
                        data-aos-duration="1000">
                        <button className="flex buttonp items-center gap-2 bg-white rounded-lg px-5 py-2 text-blue-700"> Reach Me</button>
                        <button className="flex buttonp items-center gap-2 rounded-lg border px-5 py-2 ml-8" ><a href="/#project" >View Projects</a></button>
                    </div>

                </div>

                <div className="relative mt-3 lg:mt-0 flex items-center lg:items-start lg:justify-start justify-center w-full lg:w-[40%] "
                    data-aos="fade-up"
                    data-aos-offset="00"
                    data-aos-delay="0"
                    data-aos-duration="1000">
                    <CodeEditor />
                </div>

            </div>
        </div>
    )
}

export default Hero