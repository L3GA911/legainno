<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }} | LegaInno</title>
  <link rel="stylesheet" href="{{ '/style.css' | relative_url }}">
</head>
<body>
  <div class="container">
    {% include header.md %}
      <main>
        {{ content }}
      </main>
    {% include footer.md %}
  </div>
</body>
</html>