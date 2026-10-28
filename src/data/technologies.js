import { Globe, Brain, Cloud, Smartphone, GitBranch, Wrench } from 'lucide-react'
// Areas of interest only, not claims of formal programs.
export const technologies = [
  { id:'web', name:'Web Development', Icon:Globe, color:'#4285F4', blurb:'Interfaces, frameworks and the modern browser.', topics:['HTML, CSS & JavaScript','React and component design','Accessibility','Performance'] },
  { id:'ai', name:'Artificial Intelligence', Icon:Brain, color:'#EA4335', blurb:'Models, tools and responsible use.', topics:['Machine learning basics','Working with AI APIs','Prompting','Responsible AI'] },
  { id:'cloud', name:'Cloud Computing', Icon:Cloud, color:'#FBBC05', blurb:'Deploy and scale what you build.', topics:['Hosting & deployment','Serverless','Databases','Containers'] },
  { id:'android', name:'Android Development', Icon:Smartphone, color:'#34A853', blurb:'Apps for the device in every pocket.', topics:['Kotlin','Jetpack Compose','App architecture','Publishing'] },
  { id:'oss', name:'Open Source', Icon:GitBranch, color:'#4285F4', blurb:'Learn in public and contribute.', topics:['Git & GitHub','First contributions','Code review','Licenses'] },
  { id:'tools', name:'Developer Tools', Icon:Wrench, color:'#EA4335', blurb:'Work faster with a sharper toolkit.', topics:['Editors & terminals','Debugging','Testing','Automation'] },
]
