const WA = '34685553699';

const wa = (texto) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;

const WA_JAMON = wa('Hola, me interesa el Jamón Premium Belluta (190 €).');
const WA_PALETA = wa('Hola, me interesa la Paleta Premium Belluta (115 €).');
const WA_GENERAL = wa('Hola, quiero información sobre los jamones Belluta.');

/* --- Iconos dorados de la banda de cifras (SVG propio, sin librerías) --- */

const svgProps = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

function IconReloj() {
  return (
    <svg {...svgProps} className="ic-clock">
      <circle cx="24" cy="24" r="17.5" />
      <circle cx="24" cy="24" r="21" strokeOpacity="0.3" />
      <path d="M24 8.5v2.6M39.5 24h-2.6M24 39.5v-2.6M8.5 24h2.6" />
      <path className="hand-h" d="M24 24v-8.5" />
      <path className="hand-m" d="M24 24h7.5" />
      <circle cx="24" cy="24" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconMedalla() {
  return (
    <svg {...svgProps} className="ic-medal">
      <g>
        <path d="M16.5 27.5 11 41l7.2-3.6L24 40l5.8-2.6L37 41l-5.5-13.5" />
        <circle cx="24" cy="18" r="11.5" />
        <circle cx="24" cy="18" r="6.5" strokeOpacity="0.45" />
        <path d="M24 14.2v7.6M20.2 18h7.6" strokeOpacity="0.45" />
      </g>
    </svg>
  );
}

function IconFamilia() {
  return (
    <svg {...svgProps} className="ic-family">
      <g>
        <circle cx="12.5" cy="17.5" r="4.3" />
        <path d="M5.5 33.5c0-4 3.2-7 7-7s7 3 7 7" />
        <circle cx="26.5" cy="14.5" r="5" />
        <path d="M18.5 33.5c0-4.6 3.6-8 8-8s8 3.4 8 8" />
        <circle cx="39" cy="21.5" r="3.4" />
        <path d="M33.5 33.5c0-3.2 2.5-5.6 5.5-5.6s5.5 2.4 5.5 5.6" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <div className="topbar dark">
        <div className="u">
          <div className="brand">
            <img src="/img/logo.jpg" alt="Belluta" width="132" />
          </div>
          <div className="top-right">
            <nav>
              <ul>
                <li><a href="#jamon">Jamón</a></li>
                <li><a href="#paleta">Paleta</a></li>
                <li><a href="#casa">La casa</a></li>
                <li><a href="#envios">Envíos</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </nav>
            <span className="lang"><b>ES</b> / EN</span>
            <a className="wa-btn" href={WA_GENERAL}>Pedir por WhatsApp</a>
          </div>
        </div>
      </div>

      <header className="hero dark">
        <img src="/img/hero.jpg" alt="Lonchas de jamón Belluta" />
        <div className="scrim" />
        <div className="u">
          <div className="hero-copy">
            <p className="eyebrow">Tradición desde 1951</p>
            <h1>La sabiduría <em>de la tradición</em></h1>
            <p>
              Jamones y paletas cuidados sin prisa en la Sierra de Huelva, como en 1951.
              Nuestra producción nunca supera las 1.000 piezas al año.
            </p>
            <div className="hero-actions">
              <a className="wa-btn" href="#jamon">Ver el Jamón Premium</a>
              <a className="wa-btn ghost" href={WA_GENERAL}>Pedir por WhatsApp</a>
            </div>
          </div>
        </div>
      </header>

      <section className="figures dark">
        <div className="u figures-lead">
          <p className="eyebrow">La casa, en tres cifras</p>
          <p>Lo que no se ve en la foto: el tiempo que espera cada pieza y las pocas que salen al año.</p>
        </div>
        <div className="u figures-grid">
          <div className="fig">
            <div className="fig-ic"><IconReloj /></div>
            <span className="n">24</span>
            <p className="t">meses mínimo de curación</p>
            <p className="d">Nuestros jamones no salen de bodega antes. Las paletas, 12.</p>
          </div>
          <div className="fig">
            <div className="fig-ic"><IconMedalla /></div>
            <span className="fig-badge">Edición limitada</span>
            <span className="n">1.000</span>
            <p className="t">piezas al año, ni una más</p>
            <p className="d">Se puede producir mucho más. Preferimos poder cuidarlas.</p>
          </div>
          <div className="fig">
            <div className="fig-ic"><IconFamilia /></div>
            <span className="n">3</span>
            <p className="t">generaciones en el oficio</p>
            <p className="d">Jamones Pastor Sánchez · De Jabugo La Cañada · Belluta.</p>
          </div>
        </div>
      </section>

      <section className="piece piece--fondo dark" id="jamon">
        <div
          className="plate-bg"
          style={{ backgroundImage: "url('/img/jamon-plato.jpg')" }}
          role="img"
          aria-label="Plato de jamón Belluta recién cortado"
        />
        <img className="ham-float" src="/img/jamon.jpg" alt="Jamón Premium Belluta en su jamonero" />
        <div className="veil" />
        <div className="scrim" />
        <div className="u">
          <div className="piece-copy">
            <p className="meta">7,5 kg aprox · mínimo 24 meses</p>
            <h2>Jamón Premium</h2>
            <p>
              Un mínimo de veinticuatro meses en bodega, cuidado con mimo hasta que la grasa se
              vuelve brillante y se funde al tacto. Al corte da una loncha fina, veteada, de bocado
              largo y con ese punto de avellana que solo dan los meses.
            </p>
            <ul>
              <li>Pieza entera, en su caja, con la vitola de Belluta</li>
              <li>Te decimos por WhatsApp cómo empezarlo y por dónde cortar</li>
              <li>Envío a toda la península por 10 €</li>
            </ul>
            <div className="price-row">
              <span className="price">190 €</span>
              <span className="was">210 €</span>
              <span className="campaign">precio de campaña</span>
            </div>
            <a className="wa-btn" href={WA_JAMON}>Pedir por WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="piece piece--paleta dark" id="paleta">
        <div className="u">
          <div className="piece-media">
            <div>
              <div className="whole">
                <img src="/img/paleta.jpg" alt="Paleta Premium Belluta" />
              </div>
            </div>
            <div>
              <div className="plate">
                <img src="/img/paleta-plato.jpg" alt="Lonchas de paleta Belluta en primer plano" />
              </div>
              <p className="plate-cap">Plato de corte</p>
            </div>
          </div>

          <div className="piece-copy">
            <p className="meta">5,3 kg aprox · mínimo 12 meses</p>
            <h2>Paleta Premium</h2>
            <p>
              El mismo cuidado en una pieza más manejable. Doce meses mínimo de bodega: menos peso,
              más intensidad. La paleta concentra el sabor, y por eso es la que más gusta a quien
              corta a diario en casa.
            </p>
            <ul>
              <li>La puerta de entrada a Belluta, con la misma vitola</li>
              <li>Se termina antes: ideal si en casa sois pocos</li>
              <li>Envío a toda la península por 10 €</li>
            </ul>
            <div className="price-row">
              <span className="price">115 €</span>
              <span className="was">130 €</span>
              <span className="campaign">precio de campaña</span>
            </div>
            <a className="wa-btn" href={WA_PALETA}>Pedir por WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="house" id="casa">
        <div className="u house-grid">
          <figure className="drawing">
            <img src="/img/calle.jpg" alt="Dibujo de la calle Talero con el cartel de Jamones Pastor Sánchez" />
            <figcaption>Calle Talero, Jabugo · el dibujo de la vitola</figcaption>
          </figure>

          <div>
            <p className="eyebrow">La historia</p>
            <h2>Jamones Pastor Sánchez, 1951</h2>
            <p>
              En 1951 mi abuelo abrió el matadero y el secadero en la calle Talero, en Jabugo. Del
              cerdo al jamón se hacía todo allí mismo, sin más ayuda que el frío del invierno y el
              tiempo.
            </p>
            <p>
              Mi padre continuó el oficio con De Jabugo La Cañada. Y yo, que crecí entre esas piezas,
              sigo con Belluta. Han pasado tres generaciones y la manera de trabajar no ha cambiado:
              nuestros jamones esperan en bodega lo que tienen que esperar y nunca hacemos más de mil
              piezas al año. Se puede producir mucho más. Nosotros preferimos poder cuidarlas.
            </p>

            <div className="house-extra">
              <div className="vitola-note">
                <p>
                  <strong>La vitola.</strong> El dibujo que va en cada pieza es aquella calle: el
                  cartel de Jamones Pastor Sánchez, las casas blancas cuesta abajo y, al fondo, mi
                  abuelo corriendo detrás del cerdo. Lo mandamos dibujar a mano porque es
                  exactamente así como empezó todo.
                </p>
              </div>
              <img src="/img/vitola.jpg" alt="Vitola de Belluta" style={{ width: '88px' }} />
            </div>

            <div style={{ marginTop: '2rem' }}>
              <img
                src="/img/familia.jpg"
                alt="La familia en los años cincuenta"
                style={{ width: '100%', border: '1px solid var(--line-light)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band dark">
        <img src="/img/cortador.jpg" alt="Corte de jamón Belluta" />
        <div className="band-copy">
          <div className="u">
            <p>
              Setenta y cinco años después, seguimos haciéndolo igual: con las manos, con la nariz y
              sin prisa.
            </p>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="u">
          <div className="rev-head">
            <div>
              <p className="eyebrow">Opiniones en Google</p>
              <h2>Lo que dicen quienes ya lo han cortado</h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="stars">★★★★★</div>
              <div style={{ fontSize: '.85rem', color: 'var(--muted-light)' }}>valoración de Google</div>
            </div>
          </div>
          <div className="grid3">
            {[0, 1, 2].map((i) => (
              <div className="rev" key={i}>
                <div className="stars">★★★★★</div>
                <div className="ph" />
                <div className="ph" />
                <div className="ph s" />
                <div className="who">reseña real de Google</div>
              </div>
            ))}
          </div>
          <p className="placeholder-note">
            Pendiente: aquí entran las reseñas de 4 y 5 estrellas de la ficha de Google, con su
            nombre y su texto reales.
          </p>
        </div>
      </section>

      <section className="ship" id="envios">
        <div className="u">
          <p className="eyebrow">Cómo se compra</p>
          <h2>Sin carrito. Hablas con nosotros.</h2>
          <div className="ship-grid">
            <div>
              <h3>Un mensaje, y ya</h3>
              <p>
                Pulsas el botón y se abre WhatsApp con la pieza ya escrita. Te confirmamos peso
                exacto y disponibilidad.
              </p>
            </div>
            <div>
              <h3>Península, 10 €</h3>
              <p>Envío a toda la península por 10 €. No enviamos a Canarias ni a Baleares.</p>
            </div>
            <div>
              <h3>Bizum o transferencia</h3>
              <p>Te pasamos los datos al confirmar el pedido. Nada de formularios ni de pasarelas.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="dark">
        <div className="u">
          <div className="foot-grid">
            <div>
              <img src="/img/logo.jpg" alt="Belluta" width="120" />
              <p>La sabiduría de la tradición</p>
              <p style={{ color: '#6F675B' }}>Tradición desde 1951</p>
            </div>
            <div>
              <h4>Contacto</h4>
              <p><a href={WA_GENERAL}>WhatsApp · +34 685 553 699</a></p>
              <p><a href="mailto:info@belluta.es">info@belluta.es</a></p>
            </div>
            <div>
              <h4>Origen</h4>
              <p>Sierra de Huelva</p>
              <p>Reg. Sanitario ES 10.0014844/H C.E.</p>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Belluta</span>
            <span>Aviso legal · Privacidad · Cookies</span>
          </div>
        </div>
      </footer>

      <div className="sticky">
        <span>Jamón Premium · 190 €</span>
        <a className="wa-btn" href={WA_JAMON}>Pedir por WhatsApp</a>
      </div>
    </>
  );
}
