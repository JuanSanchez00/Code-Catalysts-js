import Image from 'next/image';

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-logo">
      <Image
        src="https://i.ibb.co/7WBsHrf/Logo.png"
        width={40}
        height={40}
      />
      </div>
      <a class="navbar-brand" href="/">La Camiseta No Se Mancha </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/camisetas">Camisetas</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}