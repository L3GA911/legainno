<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ page.title }} | LegaInno</title>
  <link rel="stylesheet" href="{{ site.baseurl }}/style.css">
</head>
<body>
  <div class="container">
    {% include_relative ../_includes/header.html %}
      <main>
        {{ content }}
      </main>
    {% include_relative ../_includes/footer.html %}
  </div>
</body>
</html>