import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { useState } from 'react';
import { Button } from './components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function App() {
  const [display , setDisplay] = useState("hidden");
  useGSAP(() => {
   gsap.fromTo("#text" , {
    x : 0 ,
    height:'400px',
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    } , {
      duration:2,
      y:-150,
      yoyo:true,
    })
    setTimeout(() => {
      setDisplay("flex")
    }, 2000);
    gsap.to("#content" , {
      x:0,
      y:-300,
      duration:3
    })
    gsap.fromTo("#down" , {
      repeat:-1,
      y:0,
      duration:1,
    } , {
      y:-15,
      repeat:-1,
      yoyo:true,
    })
  } , []);
  const data = [
    {
      title:'rust',
      link:'',
      image:'https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Rust_programming_language_black_logo.svg/640px-Rust_programming_language_black_logo.svg.png&w=640&q=50'
    },
    {
      title:'C#',
      link:'',
      image:'https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png'
    },
    {
      title:'python',
      link:'',
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png'
    }, 
    {
      title:'other',
      link:'',
      image:''
    },      
  ];
  return (
    <div>
      <p className='text-5xl font-bold' id="text">
        welcome to abyte editor
      </p>
      <div className='flex justify-center items-center flex-col h-full'>
      <div className={`${display} justify-center items-center flex-col border p-10 w-[500px] rounded-lg`} id="content">
      <Drawer>
  <DrawerTrigger>
       <Button>
        create new project +
       </Button>    
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>choose your langauge</DrawerTitle>
    </DrawerHeader>
    <DrawerFooter>
      <div className='grid grid-cols-2 gap-4'>
        {data.map((item , index) => (
          <div dir='rtl' key={index} style={{transition:'0.5s'}} className='border p-5 m-5 flex justify-between items-center flex-row hover:scale-110 hover:bg-gray-700 cursor-pointer hover:text-white rounded-lg'> 
            <img src={item.image}  width={50} height={50} />
            <p className='text-2xl font-bold'>
              {item.title}
            </p>
          </div>
        ))}        
      </div>

    </DrawerFooter>
  </DrawerContent>
</Drawer>

       or
       <Button variant={"secondary"}>
        open old project
       </Button>
      </div>
      <div className={`${display}`}>
      <Dialog>
  <DialogTrigger>

      <div id='down' className='bg-gray-500 p-1 w-[160px] h-15 rounded-lg shadow-lg flex justify-center items-center flex-col'>
        <Info />
      </div>      
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>learn more</DialogTitle>
      <DialogDescription>
        text
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
      
      </div>

      </div>
    </div>
  );
}

export default App
