
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

const profileImage = "https://picsum.photos/200/200";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <Image
          src={profileImage}
          alt="Abhijeet Thakur"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold">Abhijeet Thakur</h1>
        <p className="text-muted-foreground">
          Android Developer | Kotlin | Clean Architecture Enthusiast
        </p>
        <p className="mt-4 text-muted-foreground">
          Experienced Android developer with over 5 years of expertise in developing, maintaining, and enhancing
          Android applications using Kotlin and Java. Passionate about clean code, modern architecture, and delivering exceptional user experiences.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <Button variant="outline">View Projects</Button>
          <Button>Download Resume</Button>
        </div>
      </section>

      {/* About Me */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              Experienced Android developer with a passion for creating high-quality mobile applications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I am an experienced Android developer with a passion for creating clean,
              efficient, and user-friendly applications. With 5 years in the field, I
              have worked on a variety of projects, honing my skills in Kotlin, Java,
              and the Android Jetpack suite. I also have 3 years of experience in Angular for web development.
            </p>
            <p className="mt-4">
              My Android development expertise includes:
            </p>
            
            <ul className="list-disc list-inside mt-2">
              <li>Kotlin, Java</li>
              <li>Android Jetpack (Compose, Navigation, ViewModel, LiveData)</li>
              <li>MVVM, Clean Architecture</li>
              <li>Room, Firebase</li>
              <li>RESTful APIs, JSON</li>
              <li>UI/UX Design</li>
            </ul>
            
            <p className="mt-4">
              I am dedicated to writing clean, maintainable code and creating intuitive
              user interfaces.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Technical skills categorized under Mobile, Web, Tools.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Mobile</h3>
                <ul className="list-disc list-inside">
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
                <h3 className="font-semibold mb-2">Web</h3>
                <ul className="list-disc list-inside">
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
                <h3 className="font-semibold mb-2">Tools</h3>
                <ul className="list-disc list-inside">
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
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>
              Key projects showcasing Android and Angular development skills.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Mconnect Insurance App</CardTitle>
                  <CardDescription>SBI Life Insurance app for agents.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Kotlin, MVVM, Retrofit, Room
                  </p>
                  <p>Designed for agents to manage sales, track performance, purchase policies, and upload documents.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                    {/* Removed Play Store button as it's an internal app */}
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Mconnect PWA</CardTitle>
                  <CardDescription>Angular app for agents and clients, similar to the Android version.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Angular 18, TypeScript, Material UI
                  </p>
                  <p>Cross-platform functionality, extending to iOS and other clients, helping agents grow the SBI Life business efficiently.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Premium Payer</CardTitle>
                  <CardDescription>Angular app for seamless KYC validation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Angular, TypeScript, REST APIs
                  </p>
                  <p>Seamless KYC validation, supporting CKYC, EKYC, and Physical KYC processes.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

               {/* Project 4 */}
               <Card>
                <CardHeader>
                  <CardTitle>Better You, Your Growth Buddy</CardTitle>
                  <CardDescription>Android eBooks app with journaling and goal-setting features.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Kotlin, Google Authentication, Play Billing
                  </p>
                  <p>Paid eBooks app designed for reading, with additional features for journaling, creating strategy/action plans, and setting goals.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 5 */}
              <Card>
                <CardHeader>
                  <CardTitle>Collekto (Field &amp; Manage)</CardTitle>
                  <CardDescription>Android app for loan recovery agents.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Java, Google Maps API
                  </p>
                  <p>Helps agents efficiently locate and visit customers for loan recovery by integrating Google Maps API.</p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
            <CardDescription>
              List of companies with roles, dates, and key contributions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Experience 1 */}
            <div className="mb-6">
              <h3 className="font-semibold">NSEIT Pvt Ltd (Nusummit)</h3>
              <p className="text-muted-foreground">
                Role: Android &amp; Angular Developer | Dates: 12/2021 – Present
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed and maintained Android applications using Java/Kotlin and Angular web applications.</li>
                <li>Contributed to SBI Life’s insurance platform, enabling smooth policy purchases and investment processes.</li>
                <li>Integrated REST APIs, authentication modules, and applied performance optimization techniques to improve user experience.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <h3 className="font-semibold">Prolifiquetech</h3>
              <p className="text-muted-foreground">
                Role: Android Developer | Dates: 07/2020 – 12/2021
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed custom Android applications, focusing on bug fixes, performance enhancements, and API integrations.</li>
                <li>Implemented Room Database, Play Billing, Firebase, Google APIs, and maps to improve application functionality.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>Email, Phone, GitHub, and LinkedIn profile links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <a href="mailto:thakurabhi19297@gmail.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
               <a href="tel:+918779007101" className="text-muted-foreground hover:text-primary">
                <Phone className="h-5 w-5" />
              </a>
              <a href="https://github.com/abhijeetthakur1997" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/abhijeet-thakur-443273162/" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4">Kharghar, Navi Mumbai 410210</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

