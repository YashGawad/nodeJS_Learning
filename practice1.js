const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>Navigation</Title></Head>");
    res.write("<head>");
    res.write('<header class="d-flex justify-content-center py-3">');
    res.write('  <ul class="nav nav-pills">');
    res.write('    <li class="nav-item">');
    res.write(
      '      <a href="/Home" class="nav-link active" aria-current="page">',
    );
    res.write("        Home");
    res.write("      </a>");
    res.write("    </li> ");
    res.write('    <li class="nav-item">');
    res.write('      <a href="/Men" class="nav-link">');
    res.write("        Men");
    res.write("      </a>");
    res.write("    </li> ");
    res.write('    <li class="nav-item">');
    res.write('      <a href="/Women" class="nav-link">');
    res.write("        Women");
    res.write("      </a>");
    res.write("    </li> ");
    res.write('    <li class="nav-item">');
    res.write('      <a href="/Kids" class="nav-link">');
    res.write("        Kids");
    res.write("      </a>");
    res.write("    </li> ");
    res.write('    <li class="nav-item">');
    res.write('      <a href="/Cart" class="nav-link">');
    res.write("        Cart");
    res.write("      </a>");
    res.write("    </li> ");
    res.write("  </ul>");
    res.write("</head>");
    res.write("</HTML>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/home") {
    res.setHeader("content-type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>Home</Title></Head>");
    res.write("<body><h1>Welcome to Home Page</h1></body>");
    res.write("</HTML>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/men") {
    res.setHeader("content-type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>Men</Title></Head>");
    res.write("<body><h1>Welcome to Men Page</h1></body>");
    res.write("</HTML>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/women") {
    res.setHeader("content-type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>Women</Title></Head>");
    res.write("<body><h1>Welcome to Women Page</h1></body>");
    res.write("</HTML>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/kids") {
    res.setHeader("content-type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>Kids</Title></Head>");
    res.write("<body><h1>Welcome to Kids Page</h1></body>");
    res.write("</HTML>");
    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/cart") {
    res.setHeader("content-type", "text/html");
    res.write("<HTML>");
    res.write("<Head><Title>Cart</Title></Head>");
    res.write("<body><h1>Welcome to Cart Page</h1></body>");
    res.write("</HTML>");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
