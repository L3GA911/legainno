---
layout: default
title: Kapcsolat
permalink: /kapcsolat/
---

<div class="headline">
    <h1 data-aos="fade-right">Kapcsolat</h1>
</div>
<div class="boxContainerLighter">
    <div data-aos="fade-right" data-aos-delay="200" class="boxTitle">
        <h2>Vedd fel velem a kapcsolatot!</h2>
    </div>
    <!-- modify this form HTML and place wherever you want your form -->
    <form action="https://formsubmit.co/info@legainno.hu" method="POST"  data-aos="fade-right" data-aos-delay="400">
    <!-- Rejtett beállítások -->
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://www.legainno.hu/koszonjuk">

    <!-- Név -->
    <label for="name">Név</label>
    <input type="text" id="name" name="name" required>

    <!-- Email -->
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <!-- Telefonszám -->
    <label for="phone">Telefonszám</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9+ ]{6,}" placeholder="+36 20 123 4567">

    <!-- Üzenet -->
    <label for="message">Üzenet</label>
    <textarea id="message" name="message" rows="5" required></textarea>

    <!-- Adatvédelmi nyilatkozat elfogadása -->
    <label>
        <input type="checkbox" name="adatvedelem" required>
        Elfogadom az <a href="/adatvedelem" target="_blank">adatvédelmi nyilatkozatot</a>.
    </label>

    <!-- Küldés -->
        <button class="button">
            <span>Küldés</span>
            <i data-lucide="send" class="icon"></i>
        </button>
    </form>
</div>
<div class="socialMedia">
    <div>
        <i class="fas fa-phone"></i>
        <span>06-70/231-3180</span>
    </div>
    <div>
        <i class="fas fa-envelope"></i>
        <span>info@legainno.hu</span>
    </div>
    <div>
        <i class="fab fa-facebook"></i>
        <span>legainno</span>
    </div>
    <div>
        <i class="fab fa-instagram"></i>
        <span>legainno</span>
    </div>
</div>