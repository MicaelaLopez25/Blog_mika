import { useEffect, useState } from "react";
import Footer from "./assets/components/Footer";
import { Post } from "./assets/components/post";
import supabase from "./assets/lib/helper/supabaseClient";

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
      titulo: "6ta jojo",
      description: "Joylne Cuyoj",
      link: "https://i.pinimg.com/236x/10/72/13/107213216b07a7f94c531b40313c00ed.jpg",
      parrafo: "Amamos a joylne",
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
      {posts.map((elemento, index) => (
        <Post
          description={elemento.description}
          link={elemento.link}
          parrafo={elemento.parrafo}
          titulo={elemento.titulo}
          key={index}
        />
      ))}
    </>
  );
}

export default App;
