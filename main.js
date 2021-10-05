var header = document.createElement("header");
header.innerHTML = `
  <nav>
    <ul>
      <li><a href="https://David-Akpan.github.io">Home</a></li>
      <li><a href="https://github.com/David-Akpan?tab=repositories&q=&type=&language=processing&sort=">Projects</a></li>
      <li><a href="https://github.com/David-Akpan">Github</a></li>
    </ul>
  </nav>
  <a href="#"><h1>David Akpan</h1></a>
`
document.body.prepend(header);

var footer = document.createElement('footer');
footer.innerHTML = `
  <a class="email" href="#">david3emmanuel@gmail.com</a>
`
document.body.append(footer);