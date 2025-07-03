import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function OurService() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '20%', left: '5%', width: '90%', height: '60%', background: 'linear-gradient(90deg, rgba(0,255,0,0.1) 0%, rgba(0,255,0,0) 100%)', borderRadius: '50%', filter: 'blur(50px)' }}></div>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Card className="bg-[#2a2a2a] text-white text-center p-5 border border-gray-800 hover:border-green-500">
          <CardHeader>
            <img src="https://img.icons8.com/ios-filled/50/00ff00/globe.png" alt="Web Design" className="mx-auto" />
            <CardTitle className="text-green-500 mt-2">Web Design</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white">
              Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilis nisi faucibus.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2a2a2a] text-white text-center p-5 border border-gray-800 hover:border-green-500">
          <CardHeader>
            <img src="https://img.icons8.com/ios-filled/50/00ff00/code.png" alt="Web Development" className="mx-auto" />
            <CardTitle className="text-green-500 mt-2">Web Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white">
              Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilis nisi faucibus.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2a2a2a] text-white text-center p-5 border border-gray-800 hover:border-green-500">
          <CardHeader>
            <img src="https://img.icons8.com/ios-filled/50/00ff00/marketing.png" alt="Digital Marketing" className="mx-auto" />
            <CardTitle className="text-green-500 mt-2">Digital Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white">
              Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilis nisi faucibus.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2a2a2a] text-white text-center p-5 border border-gray-800 hover:border-green-500">
          <CardHeader>
            <img src="https://img.icons8.com/ios-filled/50/00ff00/identity.png" alt="Visual Identity" className="mx-auto" />
            <CardTitle className="text-green-500 mt-2">Visual Identity</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white">
              Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilis nisi faucibus.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2a2a2a] text-white text-center p-5 border border-gray-800 hover:border-green-500">
          <CardHeader>
            <img src="https://img.icons8.com/ios-filled/50/00ff00/consultation.png" alt="Consultation" className="mx-auto" />
            <CardTitle className="text-green-500 mt-2">Consultation</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white">
              Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilis nisi faucibus.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Get Started</Button>
          </CardFooter>
        </Card>
        <Card className="bg-[#2a2a2a] text-white text-center p-5 border border-gray-800 hover:border-green-500">
          <CardHeader>
            <img src="https://img.icons8.com/ios-filled/50/00ff00/maintenance.png" alt="Web Maintenance" className="mx-auto" />
            <CardTitle className="text-green-500 mt-2">Web Maintenance</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-white">
              Habitant risus facilisis vitae curabitur hac nullam. Netus condimentum erat vestibulum sollicitudin sem tempor lacinia. Torquent fringilla facilisi placerat magna pellentesque facilis nisi faucibus.
            </CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}