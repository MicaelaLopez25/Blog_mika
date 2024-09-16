import { useEffect, useState } from "react";
import Footer from "./assets/components/Footer";
import { Post } from "./assets/components/post";
import supabase from "./assets/lib/helper/supabaseClient";
import Header from "./assets/components/Header";

function App() {
  //useEffect sirve para ejecutar el codigo que tantas veces que queramos y depnde de las dependencias, las dependencias son variables

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      // destrucutracion -> nos permite obtener la propiedad deseada, van entre llaves {} los [] son un estado
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.sesson?.user);
      } //cuando hay signos de preguntas es pq tal vez no existe y no rompe
    };
  }, []);

  //la userState  es el valor que agarra para iniciarlizar
  // todo lo que piensa en use es un hook

  const handleLogin = async () => {
    const { error, data } = await supabase.auth.singInWithOauth({
      provider: "github",
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
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
      <button onClick={handleLogin}> inicio sesion Github </button>
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
    </>
  );
}

export default App;
