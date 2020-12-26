import {$} from '@core/dom';

export default class IndexMain {
  constructor(active) {
    this.active = active;
    this.$root = $('.main');
  }
  init() {
    this.$root.insertAdjacentHTML('afterbegin', this.toHtml());
  }
  toHtml() {
    return `
      <section class="history-of-fc">
        <h2 class="header-history-of-fc">History of FC Barcelona</h2>
        <div class="content-history-of-fc">
          <div class="text-container-history-of-fc">
            <p class="text-history-of-fc">
              The history of Futbol Club Barcelona goes from the football club's
              founding in 1899 and up to current time. FC Barcelona, also known
              simply as Barcelona and familiarly as Barça, is based in
              Barcelona, Catalonia, Spain. The team was founded in 1899 by a
              group of Swiss, English and Spanish footballers led by Joan
              Gamper. The club played amateur football until 1910 in various
              regional competitions. In 1910, the club participated in their
              first of many European competitions, and has since amassed
              fourteen UEFA trophies and a sextuple. In 1928, Barcelona
              co-founded La Liga, the top-tier in Spanish football, along with a
              string of other clubs. As of 2020, Barcelona has never been
              relegated from La Liga, a record they share with Athletic Bilbao
              and arch-rival Real Madrid.
            </p>

            <p class="text-history-of-fc">
              The history of Barcelona has often been political. Though it was a
              club created and run by foreigners, Barcelona gradually became a
              club associated with Catalan values. In Spain's transition to
              autocracy in 1925, Catalonia became increasingly hostile towards
              the central government in Madrid. The hostility enhanced
              Barcelona's image as a focal point for Catalonism, and when
              Francisco Franco banned the use of the Catalan language, the
              stadium of Barcelona became one of the few places the people could
              express their dissatisfaction. The Spanish transition to democracy
              in 1978 has not dampened the club's image of Catalan pride. In the
              2000s – a period of sporting success in the club and an increased
              focus on Catalan players – club officials have openly called for
              Catalonia to become an independent state.
            </p>
          </div>

          <div class="container-photo-history-of-fc">
            <img
              class="photo-history-of-fc"
              src="img/team.jpg"
              alt="barcelona team photo"
            />
          </div>
        </div>
      </section>
      <section class="last-victory">
        <h2 class="header-last-victory">Last victory</h2>
        <div class="content-last-victory">
          <div class="content-scope">
            <img src="./img/barcelona-logo.png" alt="barcelona logo" />
            barcelona <span class="scope">5 - 1</span> ferencváros
            <img src="./img/ferencvaros-logo.png" alt="ferencvaros logo" />
          </div>
          <div class="video-container-last-victory">
            <iframe
                 width="100%"
                 height="100%"
                 src="https://www.youtube.com/embed/4TswupzUq9c"
                 frameborder="0"
                 allow="accelerometer;
                 clipboard-write;
                 encrypted-media;
                 gyroscope;
                 picture-in-picture"
                 allowfullscreen>
            </iframe>
          </div>
        </div>
      </section>
    `;
  }
}
