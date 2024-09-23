import { useEffect, useState } from "react";
import Footer from "./assets/components/Footer";
import { Post } from "./assets/components/post";
import supabase from "./assets/lib/helper/supabaseClient";
import Header from "./assets/components/Header";

function App() {
  //useEffect sirve para ejecutar el codigo que tantas veces que queramos y depnde de las dependencias, las dependencias son variables

  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession(); 
    setUser(session?.user);
      // destrucutracion -> nos permite obtener la propiedad deseada, van entre llaves {} los [] son un estado
      const {
        data:{ subscription },
      } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
         setUser(session?.user);
        break;
        case "SIGNED_OUT":
         setUser(null);
         break;
         default:
          console.log("caso no estimado");

      }
     });

  //la userState  es el valor que agarra para iniciarlizar
  // todo lo que piensa en use es un hook
  return () => {
    subscription.unsubscribe();

  };
},[]);

  const handleLogin = async () => {
     await supabase.auth.signInWithOAuth ({
      provider: "github",
    })
  };

   const handleLogout = async () => {
    await supabase.auth.singOut();
   };



  const posts = [
    {
      titulo: "publicidad en contra de pepsi",
      description: "Joylne Cuyoj",
      link: "https://imgs.search.brave.com/1FuzWHjMz6exTyEllwix9wbdH5IpxKT3FoA0yvNslNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXM3Lm1lbWVkcm9p/ZC5jb20vaW1hZ2Vz/L1VQTE9BREVENTU3/LzY2NjkwNDBlZDFm/NjEuanBlZw",
      parrafo: "Gato coca",
    },
    {
      titulo: "6ta jojo",
      description: "Joylne Cuyoj",
      link: "https://i.pinimg.com/236x/8b/7d/0c/8b7d0c88227abf5a237870b047677b4b.jpg",
      parrafo: "Amamos a joylne",
    },
  ];



  return (
    <>

      <Header />
      <Footer />
      <ul className="grilla-padre">
        {posts.map((elemento, index) => (
          <Post
            description={elemento.description}
            link={elemento.link}
            parrafo={elemento.parrafo}
            titulo={elemento.titulo}
            key={index}
          />
        ))}
      </ul>
      {user ? (
       <div>
         <h2>Authenticated</h2>
         <button onClick={handleLogout}>logout</button>
       </div>
      ) : (
         <button onClick={handleLogin}> login Github</button>
     ) }    
    </>
  );
}

export default App;
