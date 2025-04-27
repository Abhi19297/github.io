'use client';

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import {motion} from "framer-motion";
import {useEffect, useRef} from "react";

const profileImage = "https://picsum.photos/200/200";

function PlayStoreButton() {
  const handlePlayStoreClick = () => {
    window.open("https://play.google.com/store/apps/details?id=com.prolifiquetech.betteryou&hl=en_IN&pli=1", "_blank");
  };

  return (
    <Button variant="outline" size="sm" className="rounded-full" onClick={handlePlayStoreClick}>Play Store</Button>
  );
}

export default function Home() {
  const fadeInAnimation = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0, transition: {duration: 0.5, ease: "easeInOut"}},
  };

  const sectionRefs = useRef<(HTMLElement | null)[]>([null, null, null, null, null]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-12"
        variants={fadeInAnimation}
        initial="initial"
        animate="animate"
      >
        <div className="relative rounded-full overflow-hidden h-40 w-40 mx-auto mb-4 shadow-md">
          <Image
            src={profileImage}
            alt="Abhijeet Thakur"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Abhijeet Thakur</h1>
        <p className="text-muted-foreground">
          Android Developer | Kotlin | Clean Architecture Enthusiast
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Experienced Android developer with over 5 years of expertise in developing, maintaining, and enhancing
          Android applications using Kotlin and Java. Passionate about clean code, modern architecture, and delivering exceptional user experiences.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <Button variant="outline" className="rounded-full">View Projects</Button>
          <Button className="rounded-full">Download Resume</Button>
        </div>
      </motion.section>

      {/* About Me */}
      <section className="mb-12" ref={sectionRefs.current[0]}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">About Me</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Experienced Android developer with a passion for creating high-quality mobile applications.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <p className="leading-relaxed">
              I am an experienced Android developer with a passion for creating clean,
              efficient, and user-friendly applications. With 5 years in the field, I
              have worked on a variety of projects, honing my skills in Kotlin, Java,
              and the Android Jetpack suite. I also have 3 years of experience in Angular for web development.
            </p>
            <ul className="list-disc list-inside mt-4 pl-4">
              <li>Kotlin, Java</li>
              <li>Android Jetpack (Compose, Navigation, ViewModel, LiveData)</li>
              <li>MVVM, Clean Architecture</li>
              <li>Room, Firebase</li>
              <li>RESTful APIs, JSON</li>
              <li>UI/UX Design</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              My Android development expertise includes:
            </p>
            <p className="mt-4 leading-relaxed">
              I am dedicated to writing clean, maintainable code and creating intuitive
              user interfaces.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-12" ref={sectionRefs.current[1]}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Skills</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">Technical skills categorized under Mobile, Web, Tools.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-lg text-gray-700 dark:text-gray-200">Mobile</h3>
                <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Kotlin</li>
                  <li>Java</li>
                  <li>Jetpack Compose</li>
                  <li>MVVM</li>
                  <li>Coroutines</li>
                  <li>Room</li>
                  <li>Firebase</li>
                  <li>SQLite</li>
                  <li>Play Services</li>
                  <li>Payment Gateway Integration</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg text-gray-700 dark:text-gray-200">Web</h3>
                <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Angular 18</li>
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>RESTful APIs</li>
                  <li>Bootstrap</li>
                  <li>Material UI</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg text-gray-700 dark:text-gray-200">Tools</h3>
                <ul className="list-disc list-inside pl-4 text-gray-600 dark:text-gray-300">
                  <li>Android Studio</li>
                  <li>IntelliJ IDEA</li>
                  <li>Visual Studio Code</li>
                  <li>Git</li>
                  <li>Postman</li>
                  <li>Jira</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="mb-12" ref={sectionRefs.current[2]}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Projects</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">Key projects showcasing Android and Angular development skills.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <Card className="shadow-md rounded-lg h-full">
                  <CardHeader>
                    <CardTitle>Mconnect Insurance App</CardTitle>
                    <CardDescription>SBI Life Insurance app for agents.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Tech Stack:</strong> Kotlin, MVVM, Retrofit, Room</p>
                    <p>Designed for agents to manage sales, track performance, purchase policies, and upload documents.</p>
                    <div className="flex mt-4 space-x-2">
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full">
                <Card className="shadow-md rounded-lg h-full">
                  <CardHeader>
                    <CardTitle>Mconnect PWA</CardTitle>
                    <CardDescription>Angular app for agents and clients, similar to the Android version.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Tech Stack:</strong> Angular 18, TypeScript, Material UI</p>
                    <p>Cross-platform functionality, extending to iOS and other clients, helping agents grow the SBI Life business efficiently.</p>
                    <div className="flex mt-4 space-x-2">
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full">
                <Card className="shadow-md rounded-lg h-full">
                  <CardHeader>
                    <CardTitle>Premium Payer</CardTitle>
                    <CardDescription>Angular app for seamless KYC validation.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Tech Stack:</strong> Angular, TypeScript, REST APIs</p>
                    <p>Seamless KYC validation, supporting CKYC, EKYC, and Physical KYC processes.</p>
                    <div className="flex mt-4 space-x-2">
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full">
                <Card className="shadow-md rounded-lg h-full">
                  <CardHeader>
                    <CardTitle>Better You, Your Growth Buddy</CardTitle>
                    <CardDescription>Android eBooks app with journaling and goal-setting features.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Tech Stack:</strong> Kotlin, Google Authentication, Play Billing</p>
                    <p>Paid eBooks app designed for reading, with additional features for journaling, creating strategy/action plans, and setting goals.</p>
                    <div className="flex mt-4 space-x-2">
                      <PlayStoreButton />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="w-full">
                <Card className="shadow-md rounded-lg h-full">
                  <CardHeader>
                    <CardTitle>Collekto (Field & Manage)</CardTitle>
                    <CardDescription>Android app for loan recovery agents.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Tech Stack:</strong> Java, Google Maps API</p>
                    <p>Helps agents efficiently locate and visit customers for loan recovery by integrating Google Maps API.</p>
                    <div className="flex mt-4 space-x-2">
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="mb-12" ref={sectionRefs.current[3]}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Experience</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">List of companies with roles, dates, and key contributions</CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <div className="mb-6">
              <h3 className="font-semibold text-lg">NSEIT Pvt Ltd (Nusummit)</h3>
              <p className="text-muted-foreground">Role: Android & Angular Developer | Dates: 12/2021 – Present</p>
              <ul className="list-disc list-inside mt-2 pl-4">
                <li>Developed and maintained Android applications using Java/Kotlin and Angular web applications.</li>
                <li>Contributed to SBI Life’s insurance platform, enabling smooth policy purchases and investment processes.</li>
                <li>Integrated REST APIs, authentication modules, and applied performance optimization techniques to improve user experience.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Prolifiquetech</h3>
              <p className="text-muted-foreground">Role: Android Developer | Dates: 07/2020 – 12/2021</p>
              <ul className="list-disc list-inside mt-2 pl-4">
                <li>Developed custom Android applications, focusing on bug fixes, performance enhancements, and API integrations.</li>
                <li>Implemented Room Database, Play Billing, Firebase, Google APIs, and maps to improve application functionality.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.current[4]}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Contact</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">Email and Phone</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <a href="mailto:thakurabhi19297@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+918779007101" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Kharghar, Navi Mumbai 410210</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
