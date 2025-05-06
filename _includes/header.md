<header>
  <div class="navbar">
    <div class="logo" data-aos="fade-right" data-aos-once="true">
      <a href="/">
        <img src="../img/logo.svg" class="logo-image">
      </a>
    </div>
    <nav class="nav-links">
      <a href="/home/" class="{% if page.url == '/home/' %}active{% endif %}">Kezdőlap</a>
      <a href="/bemutatkozas/" class="{% if page.url == '/bemutatkozas/' %}active{% endif %}">Bemutatkozás</a>
      <a href="/referenciak/" class="{% if page.url == '/referenciak/' %}active{% endif %}">Referenciák</a>
      <a href="/ajanlatok/" class="{% if page.url == '/ajanlatok/' %}active{% endif %}">Ajánlatok</a>
      <a href="/gyik/" class="{% if page.url == '/gyik/' %}active{% endif %}">GY.I.K.</a>
      <a href="/kapcsolat/" class="{% if page.url == '/kapcsolat/' %}active{% endif %}">Kapcsolat</a>
    </nav>
    <div class="hamburger" id="hamburger-icon">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</header>
