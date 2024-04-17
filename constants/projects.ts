interface Project {
  name: string;
  description: string;
  image: string;
  code: string;
  demo?: string;
  tech: string[];
}

const projects: Project[] = [
    {
      name: "MyTrip - Ticket Booking Platform",
      description:
        "MyTrip is a comprehensive ticket booking platform where users can search for trips, select seats, and make payments using credit cards or UPI.",
      image:
        "https://res.cloudinary.com/dfqd02z8w/image/upload/v1713334062/mddim4kthehusdqi6xcx.jpg",
      code: "https://github.com/Avinash-1-10/mytrip",
      tech: ["React.js", "Node.js", "MongoDB", "Material UI"],
    },
    {
      name: "Calendly - Meeting Scheduler",
      description:
        "Calendly simplifies the process of arranging and managing meetings. Users can create events, share links, select time slots, send email notifications, and more.",
      image:
        "https://res.cloudinary.com/dfqd02z8w/image/upload/v1713334378/evj0jouhzfj1wxqjvpcr.jpg",
      code: "https://github.com/Avinash-1-10/meeting-scheduler",
      tech: ["Next.js", "Firebase", "Shadcn", "Tailwind"],
    },
    {
      name: "Resume Builder",
      description:
        "Resume Builder is a user-friendly platform where users can effortlessly create resumes by filling out a form. Resumes can be downloaded in PDF format.",
      image:
        "https://res.cloudinary.com/dfqd02z8w/image/upload/v1713334727/sw1nqdqz6d2hzzjqxoq3.jpg",
      code: "https://github.com/Avinash-1-10/resume-builder-project?tab=readme-ov-file",
      demo: "https://resume-builder-project-mauve.vercel.app",
      tech: ["React.js", "Material UI", "Redux", "useForm"],
    },
    
  ];

  export default projects