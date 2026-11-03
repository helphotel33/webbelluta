const WA = '34685553699';
const wa = (texto) => `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;

const WA_JAMON = wa('Hola, me interesa el Jamón Premium Belluta (190 €).');
const WA_PALETA = wa('Hola, me interesa la Paleta Premium Belluta (115 €).');
const WA_GENERAL = wa('Hola, quiero información sobre los jamones Belluta.');

const GOOGLE_PERFIL = 'https://share.google/qW1aiP8bbA9d6ace9';

/* Reseñas reales de la ficha de Google, copiadas tal cual. */
const RESENAS = [
  {
    autor: 'Susana AH',
    texto:
      'De los mejores jamones que hemos probado. Excelente calidad en sus productos. La atención de Chicho fue inmejorable. Totalmente recomendable. Repetiremos sin duda.',
  },
  {
    autor: 'Jose M Aguirre',
    texto:
      'Máxima calidad y servicio esmerado a precio muy competitivo. Totalmente recomendable.',
  },
  {
    autor: 'Cristina León',
    texto:
      'Excelente calidad, productos de primera a un precio inmejorable. Trato espléndido.',
  },
];

export default function Home() {
  return (
    <>
      {/* ===================== PORTADA ===================== */}
      <header className="hero">
        <div className="topbar">
          <div className="u">
            <img src="/img/logo.png" alt="Belluta" />
            <nav className="topnav">
              <a href="#seleccion">Selección</a>
              <a href="#gama">Jamón y paleta</a>
              <a href="#compra">Cómo comprar</a>
              <a href="#herencia">Nuestra herencia</a>
              <a href="#contacto">Contacto</a>
            </nav>
            <div className="topmeta">
              <span><b>ES</b> / EN</span>
            </div>
          </div>
        </div>

        <img src="/img/jamon.jpg" alt="Jamón Premium Belluta en su jamonero" />
        <div className="u">
          <div className="stars">★★★★★</div>
          <h1>La sabiduría de la tradición</h1>
          <p className="sub">Tradición desde 1951</p>
          <a className="btn" href="#seleccion">Descubrir</a>
        </div>
      </header>

      {/* ===================== SELECCIÓN ===================== */}
      <section className="pad seleccion" id="seleccion">
        <div className="u center">
          <img className="orn" src="/img/ornamento.png" alt="" />
          <p className="eyebrow" style={{ marginTop: '1.2rem' }}>Selección Belluta</p>
          <p className="claim">
            Nuestros jamones esperan en bodega lo que tienen que esperar. Nunca más de mil piezas al
            año.
          </p>

          <div className="trio">
            <figure>
              <div className="ph">
                <img src="/img/paleta.jpg" alt="Paletas Belluta colgadas con su vitola" />
              </div>
              <figcaption>En bodega</figcaption>
            </figure>
            <figure>
              <div className="ph">
                <img src="/img/hero.jpg" alt="Estuche Belluta con la pieza en su malla" />
              </div>
              <figcaption>El estuche</figcaption>
            </figure>
            <figure>
              <div className="ph">
                <img src="/img/paleta-plato.jpg" alt="Tostada de jamón Belluta" />
              </div>
              <figcaption>En la mesa</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===================== BANDA: LA SIERRA ===================== */}
      <section className="band">
        <img src="/img/cortador.jpg" alt="Corte de jamón Belluta" />
        <div className="u-narrow">
          <img className="orn" src="/img/ornamento.png" alt="" />
          <h2 className="display">La Sierra de Huelva</h2>
          <p>
            El frío del invierno y el tiempo. Nuestras piezas se curan despacio, al ritmo de la
            sierra, y no salen de bodega antes de los veinticuatro meses. Se puede producir mucho
            más. Nosotros preferimos poder cuidarlas.
          </p>
          <a className="btn" href="#gama">Ver la selección</a>
        </div>
      </section>

      {/* ===================== LA GAMA ===================== */}
      <section className="pad gama" id="gama">
        <div className="u center">
          <p className="eyebrow">La casa</p>
          <h2
            className="display"
            style={{ color: 'var(--cream)', fontSize: 'clamp(1.3rem,2.6vw,1.9rem)', marginTop: '1rem' }}
          >
            Dos piezas, y nada más
          </h2>

          <div className="piezas">
            <article className="pieza" id="jamon">
              <div className="pieza-img">
                <img src="/img/jamon.jpg" alt="Jamón Premium Belluta" />
                <img className="alt" src="/img/jamon-plato.jpg" alt="Plato de jamón Belluta recién cortado" />
              </div>
              <h2>Jamón Premium</h2>
              <p className="spec">7,5 kg aprox · mínimo 24 meses</p>
              <p className="desc">
                Veinticuatro meses de bodega hasta que la grasa se vuelve brillante y se funde al
                tacto. Loncha fina, veteada, de bocado largo.
              </p>
              <div className="precio">
                <span className="n">190 €</span>
                <span className="was">210 €</span>
              </div>
              <p className="precio-nota">Precio de campaña</p>
              <a className="btn btn--solid" href={WA_JAMON}>Pedir por WhatsApp</a>
            </article>

            <article className="pieza" id="paleta">
              <div className="pieza-img">
                <img src="/img/paleta.jpg" alt="Paleta Premium Belluta" />
                <img className="alt" src="/img/paleta-plato.jpg" alt="Tostada de paleta Belluta" />
              </div>
              <h2>Paleta Premium</h2>
              <p className="spec">5,3 kg aprox · mínimo 12 meses</p>
              <p className="desc">
                El mismo cuidado en una pieza más manejable. Menos peso, más intensidad: la que más
                gusta a quien corta a diario en casa.
              </p>
              <div className="precio">
                <span className="n">115 €</span>
                <span className="was">130 €</span>
              </div>
              <p className="precio-nota">Precio de campaña</p>
              <a className="btn btn--solid" href={WA_PALETA}>Pedir por WhatsApp</a>
            </article>
          </div>

          <div className="cifras">
            <div className="cifra">
              <div className="n">24</div>
              <div className="t">Meses de bodega</div>
              <p className="d">Las paletas, doce. Ni un día menos.</p>
            </div>
            <div className="cifra">
              <div className="n">1.000</div>
              <div className="t">Piezas al año</div>
              <p className="d">Ni una más. Cuando se acaban, se acaban.</p>
            </div>
            <div className="cifra">
              <div className="n">3</div>
              <div className="t">Generaciones</div>
              <p className="d">Pastor Sánchez · De Jabugo La Cañada · Belluta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RESEÑAS ===================== */}
      <section className="dicen pad-sm">
        <div className="u">
          <div className="center">
            <img className="orn on-light" src="/img/ornamento.png" alt="" />
            <p className="dicen-nota">5,0 sobre 5 · 21 opiniones en Google</p>
          </div>
          <div className="dicen-grid">
            <div className="dicen-title">
              Dicen
              <br />
              de nosotros
            </div>
            {RESENAS.map((r) => (
              <blockquote className="resena" key={r.autor}>
                <div className="stars">★★★★★</div>
                <p>{r.texto}</p>
                <cite className="who">{r.autor}</cite>
              </blockquote>
            ))}
          </div>
          <p className="center" style={{ marginTop: '2.4rem' }}>
            <a className="btn btn--light" href={GOOGLE_PERFIL}>Ver todas en Google</a>
          </p>
        </div>
      </section>

      {/* ===================== CÓMO SE COMPRA ===================== */}
      <section className="pad compra" id="compra">
        <div className="u center">
          <p className="eyebrow">Cómo se compra</p>
          <h2
            className="display"
            style={{ color: 'var(--cream)', fontSize: 'clamp(1.3rem,2.6vw,1.9rem)', marginTop: '1rem' }}
          >
            Sin carrito. Hablas con nosotros.
          </h2>

          <div className="compra-grid">
            <div className="paso">
              <div className="num">I</div>
              <h3>Un mensaje</h3>
              <p>
                Pulsas el botón y se abre WhatsApp con la pieza ya escrita. Te confirmamos peso
                exacto y disponibilidad.
              </p>
            </div>
            <div className="paso">
              <div className="num">II</div>
              <h3>Península, 10 €</h3>
              <p>Envío a toda la península por 10 €. No enviamos a Canarias ni a Baleares.</p>
            </div>
            <div className="paso">
              <div className="num">III</div>
              <h3>Bizum o transferencia</h3>
              <p>Te pasamos los datos al confirmar el pedido. Nada de formularios ni de pasarelas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HERENCIA (al final) ===================== */}
      <section className="light pad" id="herencia">
        <div className="watermark">Belluta</div>
        <div className="u herencia">
          <div className="frame">
            <img
              src="/img/calle.jpg"
              alt="Dibujo de la calle Talero con el cartel de Jamones Pastor Sánchez"
            />
          </div>
          <div>
            <p className="eyebrow start">Nuestra herencia</p>
            <h2 className="display">
              Calle Talero, Jabugo,
              <br />
              1951
            </h2>
            <p>
              En 1951 mi abuelo abrió el matadero y el secadero en la calle Talero, en Jabugo. La
              casa se llamaba Jamones Pastor Sánchez. Del cerdo al jamón se hacía todo allí mismo,
              sin más ayuda que el frío del invierno y el tiempo.
            </p>
            <p>
              Mi padre continuó el oficio con De Jabugo La Cañada. Y yo, que crecí entre esas
              piezas, sigo con Belluta. Tres generaciones después, la manera de trabajar no ha
              cambiado.
            </p>
            <p>
              El dibujo que va en cada vitola es aquella calle: el cartel de Jamones Pastor Sánchez,
              las casas blancas cuesta abajo y, al fondo, mi abuelo corriendo detrás del cerdo. Lo
              mandamos dibujar a mano porque es exactamente así como empezó todo.
            </p>

            <div className="herencia-extra">
              <img className="vit" src="/img/vitola.jpg" alt="Vitola de Belluta" />
              <img className="fam" src="/img/familia.jpg" alt="La familia en los años cincuenta" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PIE ===================== */}
      <footer id="contacto">
        <div className="u">
          <img className="marca" src="/img/logo.png" alt="Belluta" />
          <p className="firma">La sabiduría de la tradición</p>

          <div className="foot-cols">
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
            <div>
              <h4>Casa</h4>
              <p>Tradición desde 1951</p>
              <p>Jamón Premium · Paleta Premium</p>
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
        <a className="btn btn--solid" href={WA_JAMON}>Pedir</a>
      </div>
    </>
  );
}
