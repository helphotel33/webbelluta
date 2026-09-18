const WA = '34685553699';

const wa = (texto) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;

const WA_JAMON = wa('Hola, me interesa el Jamón Premium Belluta (190 €).');
const WA_PALETA = wa('Hola, me interesa la Paleta Premium Belluta (115 €).');
const WA_GENERAL = wa('Hola, quiero información sobre los jamones Belluta.');

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
        <div className="u">
          <div className="fig">
            <span className="n">24</span>
            <p className="t">meses mínimo de curación</p>
            <p className="d">Nuestros jamones no salen de bodega antes. Las paletas, 18.</p>
          </div>
          <div className="fig">
            <span className="n">1.000</span>
            <p className="t">piezas al año como máximo</p>
            <p className="d">Se puede producir mucho más. Preferimos poder cuidarlas.</p>
          </div>
          <div className="fig">
            <span className="n">3</span>
            <p className="t">generaciones en el oficio</p>
            <p className="d">Jamones Pastor Sánchez · De Jabugo La Cañada · Belluta.</p>
          </div>
        </div>
      </section>

      <section className="piece piece--jamon dark" id="jamon">
        <div className="u">
          <div className="piece-media">
            <div>
              <div className="whole">
                <img src="/img/jamon.jpg" alt="Jamón Premium Belluta con su vitola" />
              </div>
            </div>
            <div>
              <div className="plate">
                <img src="/img/jamon-plato.jpg" alt="Plato de jamón Belluta recién cortado" />
              </div>
              <p className="plate-cap">Plato de corte</p>
            </div>
          </div>

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
            <p className="meta">5,3 kg aprox · mínimo 18 meses</p>
            <h2>Paleta Premium</h2>
            <p>
              El mismo cuidado en una pieza más manejable. Dieciocho meses mínimo de bodega: menos
              peso, más intensidad. La paleta concentra el sabor, y por eso es la que más gusta a
              quien corta a diario en casa.
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
