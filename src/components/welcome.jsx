import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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
  { name: 'Nuestros E-Syncers', href: '#clientes-satisfechos' },
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop - 60 && scrollY < sectionTop + sectionHeight - 60) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                  activeNav === item.href.substring(1) ? 'text-custom-blue animate-fadeIn' : 'text-white'
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
            
        </nav>
      </header>
      {/* Fin Header */}

      {/* Background Blur */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#1F647C] to-[#a93226] backdrop-blur-md content-fade-in" />
      {/* Fin Background Blur */}   

      {/* Bienvenida */}
      <section id="welcome" className="relative min-h-screen flex items-center justify-center pt-10 p-8">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:py-48">
            <div className="hidden sm:mb-5 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-black hover:ring-gray-400">
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
              <p className="mt-6 text-lg leading-8 text-white">
                En <span className='text-custom-blue font-bold'>E-Sync</span>, conectamos tu pasión con las experiencias más emocionantes del momento. Nuestra plataforma está 
                diseñada para aquellos que buscan vivir la intensidad de los conciertos de los artistas más grandes, la adrenalina de los partidos de fútbol o la emoción de la NBA, Formula-1,
                 e incluso te traemos lo más impresionante de los torneos de E-sports entre muchos otros eventos de entretenimiento en vivo. Ofreciéndote acceso directo a los eventos más codiciados, todo de manera rápida, segura y confiable. <span className='font-bold'>NO TE QUEDES ATRÁS  </span>; 
                 sé parte de la acción y vive el espectáculo en primera fila con <span className='text-custom-blue font-bold'>E-Sync</span>.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to='/login'
                  className="rounded-md bg-custom-yellow px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-custom-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Empezar
                </Link>
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
              <p className="mt-6 text-lg leading-8 text-white">
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
                      className="mt-10 block w-full rounded-md bg-custom-yellow px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-custom-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Obtener Ahora
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
      <section id="soporte">
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Cómo podemos ayudarte?</h2>
                <p className="mt-4 text-lg leading-8 text-white text-justify">
                  En <span className='text-custom-blue font-bold'>E-Sync</span>, nos dedicamos a ofrecerte una experiencia de entretenimiento excepcional, y eso incluye un soporte al 
                  cliente de primera calidad. Te enviaremos un correo al que nos brindaste en breve, asegurándonos de responder a tu consulta lo más pronto posible. Estamos aquí para 
                  ayudarte en cada paso del camino, porque tu satisfacción es nuestra máxima prioridad.
                </p>
                <div className="mt-6 flex max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Correo Electronico"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md border-0 /5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-md bg-custom-yellow px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-custom-yellow-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Enviar
                  </button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-custom-blue" />
                  </div>
                  <dt className="mt-4 font-semibold text-custom-red">Articulos Semanales</dt>
                  <dd className="mt-2 leading-7 text-white text-justify">
                    Además de nuestro soporte, recibirás artículos semanales directamente en tu correo. Estos artículos están diseñados para mantenerte informado sobre los últimos eventos, 
                    tendencias y consejos exclusivos que harán que tu experiencia en E-Sync sea aún mejor.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                    <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-custom-blue" />
                  </div>
                  <dt className="mt-4 font-semibold text-custom-red">No spam</dt>
                  <dd className="mt-2 leading-7 text-white text-justify">
                    Valoramos tu privacidad, por lo que puedes estar seguro de que solo recibirás correos relevantes. En E-Sync, no toleramos el spam; solo te enviaremos información útil y actualizaciones importantes relacionadas con tu experiencia.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      {/* Fin Soporte */}

      {/* Acerca De */}
      <section id="acerca-de">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="flex-shrink-0 lg:w-1/2">
                <img 
                  src="/E-Sync/LG-E-SYNC.png" 
                  alt="Descripción de la imagen" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              <div className="mt-10 lg:mt-0 lg:ml-8 lg:w-1/2">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Acerca De <span className='text-custom-blue'>E-Sync</span></h2>
                <p className="mt-6 text-lg leading-8 text-white text-justify">
                  <span className='text-custom-blue font-bold'>E-Sync</span> es tu destino definitivo para el entretenimiento en vivo, ofreciendo una plataforma innovadora para la compra de boletos para los eventos más emocionantes del momento. en <span className='text-custom-blue font-bold'>E-Sync</span> tenemos algo para cada amante del espectáculo.
                  Fundada con la misión de transformar la forma en que experimentas el entretenimiento en vivo, <span className='text-custom-blue font-bold'>E-Sync</span> se dedica a brindarte una experiencia sin igual. Nuestra plataforma está diseñada para ofrecerte acceso rápido y seguro a los eventos que más te apasionan, con beneficios exclusivos para nuestros miembros a través del <span className='text-custom-red font-bold'>E-Pass</span>.
                  Nuestro compromiso es asegurar que cada compra sea sencilla, cada evento memorable, y cada experiencia, excepcional. Además, nuestro equipo de soporte al cliente está siempre listo para ayudarte en cada paso del camino, garantizando tu total satisfacción.
                  En <span className='text-custom-blue font-bold'>E-Sync</span>, no solo vendemos boletos; te conectamos con el espectáculo, la emoción y la magia del entretenimiento en vivo. Únete a nosotros y descubre una nueva forma de disfrutar tus eventos favoritos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Fin Acerca De */}

      {/*Clientes Satisfechos*/}
      <section id='clientes-satisfechos' className="relative isolate overflow-hiddenpx-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10" />
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Comprometidos con tu Experiencia</h2>
                  <p className="mt-4 text-lg leading-8 text-white text-center">
                    En <span className='text-custom-blue font-bold'>E-Sync</span>, nuestra misión es no solo establecer alianzas sólidas con organizadores de eventos, sino también asegurar la 
                    completa fidelidad y satisfacción de nuestros clientes al comprar boletos. Descubre cómo hemos ayudado a nuestros usuarios a lograr sus objetivos y a crear experiencias 
                    inolvidables.
                  </p>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] blur-md sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <img alt="" src="/E-Sync/LG-E-SYNC.png" className="mx-auto h-12" />
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                <span className='text-custom-blue font-bold'>E-Sync</span> ha sido un cambio total para nuestra gestión de eventos musicales. La interfaz es intuitiva y el proceso de compra de entradas es fluido y sin complicaciones. Desde que comenzamos 
                  a usar <span className='text-custom-blue font-bold'>E-Sync</span>, hemos visto un aumento en la satisfacción de nuestros clientes y una reducción en las incidencias relacionadas con la compra de entradas
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="mx-auto h-10 w-10 rounded-full"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-custom-blue">Laura Martínez</div>
                  <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                    <circle r={1} cx={1} cy={1} />
                  </svg>
                  <div className="text-custom-yellow">Gerente de Eventos en MusicVibes</div>
                </div>
              </figcaption>
              
              </figure>
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Utilizar <span className='text-custom-blue font-bold'>E-Sync</span> para nuestros eventos de e-sports ha sido una de las mejores decisiones que hemos tomado. La plataforma nos ha permitido vender entradas de manera eficiente, y nuestros 
                    asistentes están encantados con la experiencia de usuario. Además, el soporte al cliente es excepcional, siempre dispuestos a ayudar.
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mx-auto h-10 w-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-custom-blue">Andrés López</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-custom-yellow">Coordinador de Marketing en GameZone</div>
                  </div>
                </figcaption>
                
              </figure>
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    Gracias a <span className='text-custom-blue font-bold'>E-Sync</span>, la venta de entradas para nuestros eventos deportivos se ha vuelto más fácil que nunca. La plataforma ofrece una variedad de opciones que se adaptan a nuestras 
                    necesidades específicas, y la integración con nuestras campañas de marketing ha sido perfecta. No podríamos estar más satisfechos.
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mx-auto h-10 w-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-custom-blue">María Fernández</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-custom-yellow">Directora de Comunicación en SportsWorld</div>
                  </div>
                </figcaption>
              </figure> 
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                    He utilizado varias plataformas de venta de entradas a lo largo de los años, pero <span className='text-custom-blue font-bold'>E-Sync</span> se destaca por su facilidad de uso y funcionalidad. Nos ha permitido gestionar grandes volúmenes
                    de entradas para conciertos y eventos masivos sin ningún problema. Definitivamente es una herramienta que recomendaría a otros organizadores de eventos.
                  </p>
                  </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mx-auto h-10 w-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-custom-blue">Javier Ortega</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-custom-yellow">Productor de Eventos en LiveNation</div>
                  </div>
                </figcaption>
                
              </figure> 
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                  <p>
                  <span className='text-custom-blue font-bold'>E-Sync</span> nos ha dado la confianza que necesitábamos para manejar la venta de entradas de nuestros eventos más importantes. La plataforma es robusta y fiable, y nuestros clientes han 
                  apreciado la experiencia de compra rápida y segura. Ha sido un verdadero aliado en nuestra estrategia de eventos.
                  </p>
                  </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="mx-auto h-10 w-10 rounded-full"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-custom-blue">Claudia Ruiz</div>
                    <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                      <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="text-custom-yellow">Coordinadora de Eventos en DreamStage</div>
                  </div>
                </figcaption>
                
              </figure> 
      </div>
    </section>
    {/*Fin Clientes Satisfechos*/}




    </>
  );
});

export default Welcome;
