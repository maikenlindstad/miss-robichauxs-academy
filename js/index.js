const header = document.querySelector("header");
const introSection = document.querySelector(".intro-section");
const sevenWondersSection = document.querySelector(".seven-wonders-section");
const mapSection = document.querySelector(".map-section");

header.innerHTML = `
  <nav class="home-menu">
    <div class="navigation-menu home-menu">
    </div>
  </nav>
  <div class="header-img">
    <h1>Miss Robichaux's Academy</h1> 
  </div>`;

introSection.innerHTML += `
  <div>
    <h2>Miss Robichaux Academy for Exceptional Young Ladies</h2>
    <p>
      "Miss Robichaux's Academy for Exceptional Young Ladies was established as a premier girls' 
      finishing school in 1790. Afterwards, it came under new management. Our management."
      - <b>Cordelia Goode</b>, <i>Supreme and Headmistress at Miss Robichaux's Academy.</i>
    </p>
    <p>
      Miss Robichaux's Academy for Exceptional Young Ladies is an all-girls boarding school for 
      witchcraft; this also acts as a safe haven for young witches and a pivotal location in Coven.
    </p>
    <p>
      Located in New Orleans, Louisiana, Miss Robichaux's Academy for Exceptional Young Ladies is 
      an academy where young Salem witches are automatically enrolled once their powers have been 
      uncovered. It is here that they are taught the history of their kind, how to practice 
      witchraft and how to discover and control their magical abilities
    </p>
  </div>

  <div class="stairs">
  </div>`;

sevenWondersSection.innerHTML += `
  <div>
    <h2>The Seven Wonders</h2>
    <p>
      Exceptionally exceptional young ladies can request to be tested in the seven wonders if they
      think they possess the qualifications of a Supreme.                
    </p>
    <p>
      Due to it's dangers, no student of the academy can request to be tested in the Seven Wonders 
      before completing all courses. 
    </p>
    <h3>Music video</h3>
    <p>
      See when Stevie Nicks came back to the academy to send our students - now proud teachers of the academy - 
      into the tests of the Seven Wonders in the video below.
    </p>
    <iframe id="stevie-nicks" width="100%" height="400" style="border-radius: 15px" src="https://www.youtube.com/embed/eW4q2RG8zYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div class="latest-news">
    <h2>Latest news</h2>
    <div> 
      <a><p>40% Discount for all students at Hotel Cortez</p></a>
    </div>
  <div>
    <a><p>"Witches" - Anne Hathaway Zoom conference.</p></a></div>
    <div>
      <a><p>Staff and students of the academy have been invited for two whole weeks at Camp Redwood this summer.</p></a>
    </div>
    <div>
      <a><p>Deceased wards that attended the academy.</p></a></div>
      <div>
        <a><p>"A walk in Fiona Goode's shoes." - Field trip</p></a>
      </div>
      <div>
        <a><p>Meet and greet. New students arrives every month.</p></a>
      </div>      
    </div>`;

mapSection.innerHTML += `
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.6506704332414!2d-90.08130988255617!3d29.93195749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a589b29359e9%3A0x637f9be429eb77e0!2sBuckner%20Mansion!5e0!3m2!1sno!2sno!4v1646235203223!5m2!1sno!2sno" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
