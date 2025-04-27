
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
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
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold">John Doe</h1>
        <p className="text-muted-foreground">
          Android Developer | Kotlin | Clean Architecture Enthusiast
        </p>
        <p className="mt-4 text-muted-foreground">
          Android Developer with 5 years of experience, specializing in creating
          high-quality Android applications using Kotlin and modern architectural
          patterns. Passionate about clean code and UI/UX.
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
              Brief bio highlighting Android and Angular experience. Emphasize clean code
              and UI/UX focus.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              I am an experienced Android developer with a passion for creating clean,
              efficient, and user-friendly applications. With 5 years in the field, I
              have worked on a variety of projects, honing my skills in Kotlin, Java,
              and the Android Jetpack suite. I also have experience in Angular for web.
            </p>
            <p className="mt-4">
              My expertise includes:
              <ul className="list-disc list-inside mt-2">
                <li>Kotlin, Java</li>
                <li>Android Jetpack (Compose, Navigation, ViewModel, LiveData)</li>
                <li>MVVM, Clean Architecture</li>
                <li>Room, Firebase</li>
                <li>UI/UX Design</li>
              </ul>
            </p>
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
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Web</h3>
                <ul className="list-disc list-inside">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Angular</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools</h3>
                <ul className="list-disc list-inside">
                  <li>Android Studio</li>
                  <li>IntelliJ IDEA</li>
                  <li>Git</li>
                  <li>Firebase Console</li>
                  <li>Jira</li>
                  <li>Confluence</li>
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
              At least 3 projects with title, short description, tech stack, and links
              (GitHub / Play Store)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Title 1</CardTitle>
                  <CardDescription>Short description of the project.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Kotlin, MVVM, Room, Retrofit
                  </p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      Play Store
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Title 2</CardTitle>
                  <CardDescription>Short description of the project.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Java, Firebase, Android SDK
                  </p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      Play Store
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card>
                <CardHeader>
                  <CardTitle>Project Title 3</CardTitle>
                  <CardDescription>Short description of the project.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Tech Stack:</strong> Kotlin, Jetpack Compose, Navigation
                  </p>
                  <div className="flex mt-4 space-x-2">
                    <Button variant="outline" size="sm">
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm">
                      Play Store
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
              <h3 className="font-semibold">Company Name 1</h3>
              <p className="text-muted-foreground">
                Role: Android Developer | Dates: 2018 - 2020
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed and maintained key features of the company's flagship Android app.</li>
                <li>Improved app performance by 30% through code optimization.</li>
                <li>Collaborated with cross-functional teams to deliver high-quality products.</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <h3 className="font-semibold">Company Name 2</h3>
              <p className="text-muted-foreground">
                Role: Senior Android Developer | Dates: 2020 - Present
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Led the development of new Android applications from concept to launch.</li>
                <li>Mentored junior developers and provided technical guidance.</li>
                <li>Implemented clean architecture and best practices for code maintainability.</li>
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
            <CardDescription>Email, GitHub, LinkedIn, and Naukri profile links</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <a href="mailto:john.doe@example.com" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com/johndoe" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/johndoe" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
