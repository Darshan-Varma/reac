import logo from '../images/boy_img.png'
export default function Header(){
  return(
    <header id="header">
      <h1 className="name">Hi There, I'm Darshan Varma</h1>
        <h2 className="bio">I'm a professional Software Engineer with an experience of 3 years in Dotnet Framework.</h2>
          <div className="flex-item">
            <img src={logo} id="main-img" alt="Image of a character greeting the user"></img>
          </div>
        <hr></hr>
    </header>
  );
}