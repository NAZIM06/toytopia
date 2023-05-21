import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ToyGallery = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='my-12 px-10'>
      <p className='font-extrabold text-3xl text-blue-900 text-center my-10'>Toy Gallery</p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1574071744270-6b1c3fae0e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="patryk-norman-BBQOQFk-OICg-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1587292818536-5a404595dd36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1046&q=80" alt="marcos-ferreira-QYBVbw-JYx-NA-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1616850508572-8b22fb1e38c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="patryk-norman-ZR-AL5r0-KZA-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1651574458535-c1de765c296f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="aaron-cass-GJuh-DRb-Mj7g-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1563116591-d7461a096371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="maha-khairy-3uu-LWb6a-QXc-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1563116590-0e92ec646f06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="tengyart-RZfb8-FFd2g-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1559816933-0b5b4de2bbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="branden-skeli-x-KTp-Y-Ny-Ss-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="valentino-montironi-av-Il29-hxao-unsplash" />
        </div>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img className="w-full h-full object-cover" data-aos='fade-up' src="https://images.unsplash.com/photo-1536846511313-4b07b637bff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="valentino-montironi-av-Il29-hxao-unsplash" />
        </div>
      </div>
    </div>
  );
};

export default ToyGallery;