<header>
    <div class="navbar">
      <div class="logo">
        <img src="../img/logo.svg" alt="Company Logo" class="logo-image">
      </div>
      <nav>
        <a href="/home" class="{% if page.url == '/home/' %}active{% endif %}">Bemutatkozás</a>
        <a href="/referenciak" class="{% if page.url == '/referenciak/' %}active{% endif %}">Referenciák</a>
        <a href="/ajanlatok" class="{% if page.url == '/ajanlatok/' %}active{% endif %}">Ajánlatok</a>
        <a href="/kapcsolat" class="{% if page.url == '/kapcsolat/' %}active{% endif %}">Kapcsolat</a>
      </nav>
    </div>
  </header>