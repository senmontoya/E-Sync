import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const includedFeatures = [
  'Acceso Anticipado',
  'Descuentos Exclusivos',
  'Insignias Únicas',
  'Comentarios Destacados',
  'Experiencias VIP',
  'Atención Personalizada',
  'Reembolso de Hasta 1 Semana',
  'Meet and Great en Eventos Seleccionados'
];

const navigation = [
  { name: 'Bienvenida', href: '#welcome' },
  { name: 'Suscripciones', href: '#subscripciones' },
  { name: 'Soporte', href: '#soporte' },
  { name: 'Acerca de E-SYNC', href: '#acerca-de' },
];

const animationStyle = `
  @keyframes slideDown {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-slideDown {
    animation: slideDown 0.50s ease-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
`;

const Welcome = React.memo(() => {
  const [activeNav, setActiveNav] = useState('Bienvenida');

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveNav(id);
  };

  return (
    <>
      {/* Header */}
      <style>{animationStyle}</style>
      <header className="fixed inset-x-0 top-0 z-50  text-gray-900 shadow-md animate-slideDown backdrop-blur-md">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
            <img src="/E-Sync/LG-E-SYNC.png" className="h-12 w-auto" alt="E-SYNC Logo" />
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  activeNav === item.href.substring(1) ? 'text-custom-blue animate-fadeIn' : 'text-gray-700'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href.substring(1));
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-700">
              Log in
            </a>
          </div>
        </nav>
      </header>
      {/* Fin Header */}

      {/* Background Blur */}
      <div
        aria-hidden="true"    
        className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#1F647C] to-[#a93226] opacity-30 backdrop-blur-md"
      />
      {/* Fin Background Blur */}   

      {/* Bienvenida */}
      <section id="welcome" className="relative min-h-screen flex items-center justify-center pt-10 p-8">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:py-48">
            <div className="hidden sm:mb-5 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-700 ring-1 ring-black hover:ring-gray-400">
                Politicas y condiciones sobre E-Sync.{' '}
                <a href="#" className="font-semibold text-custom-red">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Leer más <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ¡Vive la emoción del entretenimiento en vivo!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                En <span className='text-custom-blue font-bold'>E-Sync</span>, conectamos tu pasión con las experiencias más emocionantes del momento. Nuestra plataforma está 
                diseñada para aquellos que buscan vivir la intensidad de los conciertos de los artistas más grandes, la adrenalina de los partidos de fútbol o la emoción de la NBA, Formula-1,
                 e incluso te traemos lo más impresionante de los torneos de E-sports entre muchos otros eventos de entretenimiento en vivo. Ofreciéndote acceso directo a los eventos más codiciados, todo de manera rápida, segura y confiable. <span className='font-bold'>NO TE QUEDES ATRÁS  </span>; 
                 sé parte de la acción y vive el espectáculo en primera fila con <span className='text-custom-blue font-bold'>E-Sync</span>.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-custom-yellow px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-custom-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Empezar
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-custom-red">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin Bienvenida */}

      {/* Subscripciones */}
      <section id="subscripciones" className="pt-20 ">
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Obten nuestra membresía</h2>
              <p className="mt-6 text-lg leading-8 text-gray-700">
                Conviértete en parte de una comunidad exclusiva que vive el entretenimiento en su máxima expresión.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-300 bg-custom-white sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Únete a <span className='text-custom-red'>E-Pass</span></h3>
                <p className="mt-6 text-base leading-7 text-gray-700">
                Con <span className='text-custom-red font-bold'>E-Pass</span>, no solo obtienes boletos, obtienes acceso a una experiencia de entretenimiento excepcional. ¡Únete y empieza a disfrutar de todos estos beneficios hoy mismo!
                </p>
                <div className="mt-10 flex items-center gap-x-4"> 
                  <h4 className="flex-none text-sm font-semibold leading-6 text-custom-blue ">¿Qué incluye?</h4>
                  <div className="h-px flex-auto bg-gray-300" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-custom-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-custom-white py-10 text-center ring-0 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">Paga una vez al mes, disfruta de beneficios exclusivos siempre</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-green-700">$5.99</span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-green-700">USD</span>
                    </p>
                    <a
                      href="#"
                      className="mt-10 block w-full rounded-md bg-custom-yellow px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-custom-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get access
                    </a>
                    <p className="mt-6 text-xs leading-5 text-gray-600">
                      Facturas y recibos disponibles para facilitar el reembolso de la empresa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin Subscripciones */}

      {/* Soporte */}
    </>
  );
});

export default Welcome;
